import { Link } from "react-router-dom"
import styles from "./Menu.module.css"
import MenuLink from "../MenuLink"

const Menu = () => {
    return (
        <header>
            <nav className={styles.navegacao}>
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