import { Link } from "react-router-dom"


const MovieCard = ({ movieProp }) => {
    const { id, title, director, abstract, image } = movieProp;
    return (

        <Link to={`movies/${id}`} className="card img-fluid mb-4 p-3 mb-5 bg-body-tertiary rounded blue-shadow-card" >
            {image && <img className="card-img-top" src={image} alt={title} />}
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">By {director || 'Anonymous'}</p>
                <p className="card-text">{abstract}</p>
            </div>
        </Link>



    )
}


export default MovieCard