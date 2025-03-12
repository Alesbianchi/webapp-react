import { Link } from "react-router-dom"


const MovieCard = ({ movieProp }) => {
    const { id, title, director, abstract, image } = movieProp;
    return (

        <div className="card img-fluid mb-4 p-3 mb-5 bg-body-tertiary rounded blue-shadow" >
            {image && <img className="card-img-top" src={image} alt={title} />}
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">By {director || 'Anonymous'}</p>
                <p className="card-text">{abstract}</p>
                <Link to={`movies/${id}`} className="btn btn-outline-primary" >See more</Link>
            </div>
        </div>



    )
}


export default MovieCard