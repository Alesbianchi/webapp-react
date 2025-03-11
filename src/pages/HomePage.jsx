//importo il componente moviecard
import MovieCard from "./../components/MovieCard"

import { Link } from "react-router-dom"

const HomePage = () => {
    return (
        <>
            <h1 className="text-primary">BoolFlix</h1>
            <h2><i>the nerdest movie community</i></h2>


            <div className="row row-cols-4 mt-4">
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
            </div>

        </>



    )
}

export default HomePage