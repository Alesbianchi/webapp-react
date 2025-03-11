//importo parde del link del modulo react-router
import { Link } from "react-router-dom"

//importo il componente delle recensioni
import ReviewCard from "./../components/ReviewCard"


const MoviePage = () => {
    return (
        <>
            <div className="border-bottom border-1 mb-3">
                <div className="d-flex mb-3">
                    <img className="movie-img" src="http://localhost:3000/imgs/movies/inception.jpg" />
                    <div>
                        <h1>Titolo Film</h1>
                        <h3 className="text-muted"><i>By Nome Autore</i></h3>
                        <p>breve descrizione</p>
                    </div>
                </div>
            </div>
            <section>
                <div className="d-flex justify-content-between align-items mb-4">
                    <h4>Our community reviews</h4>
                </div>

                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />

            </section>
            <footer className="d-flex justify-content-end p-2 m-2">
                <Link className="btn btn-primary btn-lg" to="/">Torna alla Home</Link>
            </footer>

        </>

    )
}

export default MoviePage