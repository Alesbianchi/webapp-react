//importo il componente moviecard
import MovieCard from "./../components/MovieCard"

//importo axios
import axios from "axios"

import { Link } from "react-router-dom"

const HomePage = () => {

    const fetchMovies = () => {
        axios.get("http://localhost:3000/api/movies")
            .then(
                res => {
                    console.log(res.data);

                }
            )
            .catch(err => console.log(err)
            )

    }
    fetchMovies();

    return (
        <>
            <h1 className="text-primary mt-3">BoolFlix</h1>
            <h2 className="text-light"><i>the nerdest movie community</i></h2>


            <div className="row row-cols-4 mt-4 g-3">
                <div className="col"> <MovieCard /> </div>
                <div className="col"> <MovieCard /> </div>
                <div className="col"> <MovieCard /> </div>
                <div className="col"> <MovieCard /> </div>
                <div className="col"> <MovieCard /> </div>
                <div className="col"> <MovieCard /> </div>
                <div className="col"> <MovieCard /> </div>
                <div className="col"> <MovieCard /> </div>
            </div>

        </>

    )
}

export default HomePage

