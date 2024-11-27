import { Link } from "react-router-dom"
import "./Menu.css"
import MenuLink from "../MenuLink"

const Menu = () => {
    return (
        <header>
            <nav className="navegacao">
                <MenuLink to='/'>
                    Pagina inicial
                </MenuLink>
                <MenuLink to='/sobremim'>
                    Sobre Mim
                </MenuLink>
            </nav>
        </header>
    )
}

export default Menu