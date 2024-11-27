import { Link, useLocation } from "react-router-dom"
import './MenuLink.css'

const MenuLink = ({ to, children }) => {
    const location = useLocation().pathname
    return (
        <Link className={`link ${location === to ? "linkDestacado" : ''}`} to={to}>
            {children}
        </Link>
    )
}

export default MenuLink