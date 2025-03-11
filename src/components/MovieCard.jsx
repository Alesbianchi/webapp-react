import { Link } from "react-router-dom"


const MovieCard = () => {
    return (

        <div className="card img-fluid mb-4 p-3 mb-5 bg-body-tertiary rounded blue-shadow" >
            <img className="card-img-top" src="http://localhost:3000/imgs/movies/inception.jpg" />
            <div className="card-body">
                <h5 className="card-title">Titolo del film</h5>
                <p className="card-text">Nome Autore</p>
                <p className="card-text">breve descrizione</p>
                <Link className="btn btn-primary" to="movies/1">See more</Link>
            </div>
        </div>



    )
}


export default MovieCard