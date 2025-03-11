// importo parte outlet di module react-router
import { Outlet } from "react-router-dom"

// importo il componente header
import Header from "./../components/Header"



const DefaultLayout = () => {

    return (
        <>
            <Header />
            <main className="container">
                <Outlet />
            </main>
        </>

    )

}

export default DefaultLayout