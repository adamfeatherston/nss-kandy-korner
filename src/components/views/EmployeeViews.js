import { Outlet, Route, Routes } from "react-router-dom"
import { LocationsList } from "../locations/LocationsList"
import { ProductsList } from "../products/ProductsList"
import { NewProductForm } from "../products/NewProductForm"
import { EmployeeList } from "../employees/EmployeeList"
import { EmployeeDetails } from "../employees/EmployeeDetails"
import { NewEmployeeForm } from "../employees/NewEmployeeForm"
import { CustomerList } from "../customers/CustomerList"
import { CustomerDetails } from "../customers/CustomerDetails"

export const EmployeeViews = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>Kandy Korner</h1>
                    <div>Best Kandy on this Korner</div>

                    <Outlet />
                </>
            }>

                <Route path="locations" element={ <LocationsList /> } />
				<Route path="products" element={ <ProductsList /> } />
				<Route path="product/create" element={ <NewProductForm /> } />
                <Route path="employees" element={<EmployeeList />} />
				<Route path="employees/:employeeId" element={<EmployeeDetails />} />
                <Route path="employee/create" element={ <NewEmployeeForm /> } />
                <Route path="customers" element={<CustomerList />} />
				<Route path="customers/:customerId" element={<CustomerDetails />} />
            </Route>
        </Routes>
    )
}