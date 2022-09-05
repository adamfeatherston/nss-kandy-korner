import { Link, useNavigate } from "react-router-dom"
import { CustomerNavBar } from "./CustomerNav"
import { EmployeeNavBar } from "./EmployeeNav"
import "./NavBar.css"

export const NavBar = () => {
  
    const localKandyUser = localStorage.getItem("kandy_user")
    const kandyUserObject = JSON.parse(localKandyUser)

    if (kandyUserObject.staff) {
		//return employee views
		return <EmployeeNavBar />
	}
	else {
		//return customer views
		return <CustomerNavBar />
	}
}

