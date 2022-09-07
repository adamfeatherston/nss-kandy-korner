//html for a list of all employees
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Employee } from "./Employee"
import "./Employees.css"

export const EmployeeList = () => {
      const [users, setUsers] =useState([])
      const navigate = useNavigate()
      
      useEffect(
        () => {
            fetch('http://localhost:8088/users?isStaff=true')
                .then(response => response.json())
                .then((employeeArray) => {
                    setUsers(employeeArray)
                })
        },
        []
      )

      return <>

      <button onClick={() => navigate("/employee/create")}>Create New Employee</button>

      <article className="employees">
        {
            users.map(user => <Employee key={`user--${user.id}`}
                id={user.id} 
                fullName={user.fullName} 
                email={user.email}/>)
        }
      </article>
      </>
}