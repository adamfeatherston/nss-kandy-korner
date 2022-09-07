//module for displaying information about customers
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const CustomerDetails = () => {
    const {customerId} = useParams()
    const [customer, updateCustomer] = useState({})

    useEffect(
        () => {
            fetch(`http://localhost:8088/customers?_expand=user&userId=${customerId}`)
            .then(response => response.json())
            .then((data) => {
                const singleCustomer = data[0]
                updateCustomer(singleCustomer)
            })
        },
        [customerId]
    )

    return <section className="customer">
    <header className="employee__header">{customer?.user?.fullName}</header>
    <div>Email: {customer?.user?.email}</div>
    <footer className="employee__footer">Employee Started working on: {customer.loyaltyNumber}.</footer>
</section>
    
}