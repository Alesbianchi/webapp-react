

//importo axios
import axios from "axios"

//importo usestate e useeffect
import { useState, useEffect } from "react"

// import { Link } from "react-router-dom"

//importo il componente moviecard
import MovieCard from "./../components/MovieCard"

const HomePage = () => {

    // setto lo stato del componente
    const [movies, setMovies] = useState([]);

    const fetchMovies = () => {
        axios.get("http://localhost:3000/api/movies")
            .then(
                res => {
                    //console.log(res.data);
                    setMovies(res.data)

                }
            )
            .catch(err => console.log(err)
            )

    }
    useEffect(fetchMovies, []);

    const renderMovie = () => {
        return movies.map(
            movie => {
                return (
                    <div className="col" key={movie.id}>
                        <MovieCard movieProp={movie} />
                    </div>
                )
            }
        )

    }

    return (
        <>
            <h1 className="text-primary mt-3">BoolFlix</h1>
            <h2 className="text-light"><i>the nerdest movie community</i></h2>


            <div className="row row-cols-4 mt-4 g-3">
                {renderMovie()}
            </div>

        </>

    )
}

export default HomePage

