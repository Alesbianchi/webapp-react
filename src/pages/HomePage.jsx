//importo il componente moviecard
import MovieCard from "./../components/MovieCard"

import { Link } from "react-router-dom"

const HomePage = () => {
    return (
        <>
            <h1 className="text-primary">BoolFlix</h1>
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

