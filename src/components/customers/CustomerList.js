import { useEffect, useState } from "react"
// import { useNavigate } from "react-router-dom"
import { Customer } from "./Customer"
import "./Customers.css"

export const CustomerList = () => {
      const [users, setUsers] =useState([])
    //   const navigate = useNavigate()
      
      useEffect(
        () => {
            fetch('http://localhost:8088/users?isStaff=false')
                .then(response => response.json())
                .then((customerArray) => {
                    setUsers(customerArray)
                })
        },
        []
      )

      return <>

      {/* <button onClick={() => navigate("/customer/create")}>Create New Customer</button> */}

      <article className="customers">
        {
            users.map(user => <Customer key={`customer--${user.id}`}
                id={user.id} 
                fullName={user.fullName} 
                email={user.email}/>)
        }
      </article>
      </>
}