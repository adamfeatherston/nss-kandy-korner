//module for displaying information about employees
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const EmployeeDetails = () => {
    const {employeeId} = useParams()
    const [employee, updateEmployee] = useState({})

    useEffect(
        () => {
            fetch(`http://localhost:8088/employees?_expand=user&_expand=location&userId=${employeeId}`)
            .then(response => response.json())
            .then((data) => {
                const singleEmployee = data[0]
                updateEmployee(singleEmployee)
            })
        },
        [employeeId]
    )

    return <section className="employee">
    <header className="employee__header">{employee?.user?.fullName}</header>
    <div>Email: {employee?.user?.email}</div>
    <div>Assigned to Store #{employee?.location?.id} at: {employee?.location?.address}</div>
    <div>Pay Rate: {employee.payRate}</div>
    <footer className="employee__footer">Employee Started working on: {employee.startDate}.</footer>
</section>
    
}