import Banner from "Componentes/Banner"
import { Outlet } from "react-router-dom"

const PaginaPadrao = () => {
    return (
        <main>
            <Banner />
            <Outlet />
        </main>
    )
}

export default PaginaPadrao