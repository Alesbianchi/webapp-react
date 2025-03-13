//importo axios
import axios from "axios";

//importo usestate e useeffect
import { useState } from "react"



const ReviewForm = ({ movie_id, reloadReviews }) => {

    //creo variabile iniziale vuota
    const initialValue = { nama: "", vote: 1, text: "" };

    //variabile di stato
    const [formData, setFormData] = useState(initialValue);

    //funzione per creazione oggetto contenente i valori del form
    const setFieldValue = (e) => {
        const { value, name } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    //salvo la chiamata in una costante
    const urlEndpoint = ` http://localhost:3000/api/movies/${movie_id}/reviews`;

    //funzione necessaria per inviare il form al submit
    const submitReview = (e) => {
        e.preventDefault();
        axios.post(urlEndpoint, formData, { headers: { 'content-type': 'application/json' } })
            .then(
                () => {
                    setFormData(initialValue)
                    reloadReviews()
                }
            )
            .catch(err => console.log(err)
            )
    }

    return (
        <div className="container mt-4">
            <h2 className="mb-3 text-white">Lascia una Recensione</h2>
            <form onSubmit={submitReview}>
                <div className="mb-3 text-white">
                    <label htmlFor="name" className="form-label" ></label>
                    <input type="text" className="form-control" id="name" name="name" placeholder="Inserisci il nome" value={formData.name || ""} onChange={setFieldValue} required />
                </div>

                <div className="mb-3 text-white">
                    <label htmlFor="rating" className="form-label" ></label>
                    <input type="number" className="form-control" id="rating" name="vote" min="1" max="5" placeholder="Inserisci un voto da 1 a 5" value={formData.vote || 1} onChange={setFieldValue} required />
                </div>

                <div className="mb-3 text-white">
                    <label htmlFor="description" className="form-label" ></label>
                    <textarea className="form-control" id="description" name="text" rows="3" placeholder="Inserisci una breve descrizione" value={formData.text || ""} onChange={setFieldValue} required></textarea>
                </div>

                <button type="submit" className="btn btn-outline-primary" >Invia</button>
            </form>
        </div>

    )
}

export default ReviewForm