//importo parte del link del modulo react router
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <nav className="navbar  bg-dark">
            <div className="container-fluid bg-dark ms-2">
                <Link className="navbar-brand text-led" to="/">BOOLFLIX</Link>
            </div>
        </nav>


    )
}

export default Header