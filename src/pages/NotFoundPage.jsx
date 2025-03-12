//importo parde del link del modulo react-router
import { Link } from "react-router-dom"

const NotFoundPage = () => {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center vh-100 text-center">
            <h1 className="display-1 fw-bold text-danger">404</h1>
            <p className="lead text-danger">Oops! La pagina che cerchi non esiste.</p>
            <Link to="/" className="btn btn-primary mt-3">Torna alla Home</Link>
        </div>
    )
}

export default NotFoundPage