//importo parde del link del modulo react-router
import { Link } from "react-router-dom"

const MoviePage = () => {
    return (
        <>
            <div className="border-bottom border-1 mb-3">
                <h1>Titolo Film</h1>
                <h3 className="text-muted"><i>By Nome Autore</i></h3>
                <p>breve descrizione</p>
            </div>
            <section>
                <div className="d-flex justify-content-between align-items">
                    <h4>Our community reviews</h4>
                </div>
                <p>
                    qui inserirò le card delle reviews
                </p>
            </section>
            <footer className="d-flex justify-content-end p-2 m-2">
                <Link className="btn btn-primary btn-lg" to="/">Torna alla Home</Link>
            </footer>

        </>

    )
}

export default MoviePage