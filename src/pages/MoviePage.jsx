//importo axios
import axios from "axios"

//importo usestate e useeffect
import { useState, useEffect } from "react"

//importo parde del link del modulo react-router
import { Link, useParams } from "react-router-dom"

//importo il componente delle recensioni
import ReviewCard from "./../components/ReviewCard"


const MoviePage = () => {

    //recupero l'id del film richiesto
    const { id } = useParams();

    //setto lo stato del componente
    const [movie, setMovie] = useState({});

    const fetchMovie = () => {
        axios.get("http://localhost:3000/api/movies/" + id)
            .then(
                res => {
                    //console.log(res.data);
                    setMovie(res.data)

                }
            )
            .catch(err => console.log(err)
            )

    }
    useEffect(fetchMovie, []);


    return (
        <>
            <div className="border-bottom border-1 mb-3 mt-5">
                <div className="d-flex mb-3">
                    <img className="movie-img" src={movie.image} alt={movie.title} />
                    <div>
                        <h1 className="text-light">{movie.title}</h1>
                        <h3 className="text-muted "><i className="text-light">By {movie.director}</i></h3>
                        <p className="text-light">{movie.abstract}</p>
                    </div>
                </div>
            </div>
            <section>
                <div className="d-flex justify-content-between align-items mb-4">
                    <h4 className="text-light">Our community reviews</h4>
                </div>

                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />

            </section>
            <footer className="d-flex justify-content-end p-2 m-2">
                <Link className="btn btn-outline-primary btn-lg mb-5" to="/">Torna alla Home</Link>
            </footer>

        </>

    )
}

export default MoviePage