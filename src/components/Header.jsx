//importo parte del link del modulo react router
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">BOOLFLIX</Link>
            </div>
        </nav>


    )
}

export default Header