//form for creating a new employee
//1. Gather API from employees, users, locations
//2.user API to POST
//  fullName
//  email
//  isStaff: true
//3.employee API to POST
//  startDate
//  payRate
//  userId
//  locationId
//POST user API first so employee API has access to the newly generated userId (nest employee API post in user API post)
//4. generate HTML
//5. button to save
//in fetch call have user navigate back to list of employees after click of button that saves to API

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export const NewEmployeeForm = () => {
    const [employeeLocations, setLocations] = useState([])

    const [employee, update] = useState({
        fullName: "",
        email: "",
        isStaff: true,
        startDate: "",
        payRate: "",
        locationId: (0)
    })

    const navigate = useNavigate()
    useEffect(
        //function useEffect displays state
        () => {
            // console.log("Initial state of tickets", tickets) // View the initial state of tickets
            fetch(`http://localhost:8088/locations`)
                .then(response => response.json())
                .then((locationArray) => {
                    setLocations(locationArray)
                })
        },
        [] // When this array is empty, you are observing initial component state
    )


    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        const userToSendToAPI = {
            fullName: employee.fullName,
            email: employee.email,
            isStaff: true
        }

        fetch(`http://localhost:8088/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userToSendToAPI)
        })
        .then(response => response.json())
        .then((newUser) => {
                       
                    const employeeToSendToAPI = {
                        startDate: employee.startDate,
                        payRate: parseInt(employee.payRate),
                        userId: newUser.id,
                        locationId: parseInt(employee.locationId)
            
                    }
            
            fetch(`http://localhost:8088/employees`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(employeeToSendToAPI)
            })
                .then(response => response.json())
                .then(() => {
                    navigate("/employees")

                })
    })
    }
    return (
        <form className="EmployeeForm">
            <h2 className="EmployeeForm__title">Add New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Employee Name</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Enter New Employee Name"
                        value={employee.fullName}
                        onChange={
                            (evt) => {
                                const copy = { ...employee }
                                copy.fullName = evt.target.value
                                update(copy)
                            }
                        } />

                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="price">Employee Email</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Enter New Employee Email"
                        value={employee.email}
                        onChange={
                            (evt) => {
                                const copy = { ...employee }
                                copy.email = evt.target.value
                                update(copy)
                            }
                        } />
                </div>

            </fieldset>
            <fieldset className="locationList">
                <label htmlFor="location">Select Store Location</label>
                {employeeLocations.map(
                    (location) => {
                        return <div className="form-group">
                            <input
                                onChange={
                                    (evt) => {
                                        const copy = { ...employee }
                                        copy.locationId = parseInt(evt.target.value)
                                        update(copy)
                                    }
                                } type="radio" value={employee.locationId} name="type" /> {location.address}
                        </div>
                    }
                )}

            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="start">Employee Start Date</label>
                    <input
                        required autoFocus
                        type="date"
                        className="form-control"
                        placeholder="Employee Start Date"
                        value={employee.startDate}
                        onChange={
                            (evt) => {
                                const copy = { ...employee }
                                copy.startDate = evt.target.value
                                update(copy)
                            }
                        } />
                </div>

            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="payRate">Hourly Pay Rate</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Enter Employee Pay Rate"
                        value={employee.payRate}
                        onChange={
                            (evt) => {
                                const copy = { ...employee }
                                copy.payRate = evt.target.value
                                update(copy)
                            }
                        } />
                </div>

            </fieldset>
            <button
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="btn btn-primary">
                Save New Employee
            </button>
        </form>
    )
                    
}
