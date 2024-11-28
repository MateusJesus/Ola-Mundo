import { NavLink } from "react-router-dom"
import './MenuLink.css'

const MenuLink = ({ to, children }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive, isPending }) =>
                isPending ? "linkDestacado" : isActive ? "linkDestacado" : ""
            }
        >
            {children}
        </NavLink>
    )
}

export default MenuLink