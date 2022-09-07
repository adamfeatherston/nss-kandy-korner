//mdodule for creating html display of one single employee
import { Link } from "react-router-dom"

export const Employee = ({id, fullName, email}) => {
    return <section className="employee">
    <div>
        <Link to={`/employees/${id}`}>Name: {fullName}</Link>
    </div>
    <div>Email: {email}</div>
</section>
}