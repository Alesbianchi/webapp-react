import axios from "axios";
// importo parte Link del modulo react-router
import { Link, useNavigate } from "react-router-dom"
// importo lo useState
import { useState } from "react";

const initialData = {
    title: "",
    director: "",
    abstract: "",
    image: null
}


const CreateMoviePage = () => {
    // navigazione
    const navigate = useNavigate();

    // creo la variabile di stato
    const [formDataOgj, setFormDataOgj] = useState(initialData);

    const setFieldValue = (e) => {
        const { value, name } = e.target;
        if (name === "image") setFormDataOgj({ ...formDataOgj, image: e.target.files[0] });
        else setFormDataOgj({ ...formDataOgj, [name]: value });
    }

    const handleSubmit = () => {

    }



    return (
        <>

            <header className="border-bottom border-1 mb-3">
                <h1 className="text-light mt-5" >Add a new book</h1>
            </header>
            <form onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                    <input
                        type="text" name="title" value={formDataOgj.title} onChange={setFieldValue} required className="form-control" id="floatingInputDisabled" placeholder="inserisci il titolo del film" />
                    <label htmlFor="floatingInputDisabled">Titolo del film</label>
                </div>
                <div className="form-floating mb-3">
                    <input name="director" type="text" value={formDataOgj.director} onChange={setFieldValue} required className="form-control" id="floatingInputDisabled" placeholder="inserisci il regista del film" />
                    <label className="floatingTextareaDisabled">Regia</label>
                </div>
                <div className="input-group mb-3">
                    <input type="file" name="image" onChange={setFieldValue} required className="form-control" id="inputGroupFile02" />
                    <label className="input-group-text" htmlFor="inputGroupFile02">Copertina del film</label>
                </div>


                <div className="form-floating mb-3">
                    <textarea name="abstract" value={formDataOgj.abstract} onChange={setFieldValue} required className="form-control" placeholder="Leave a comment here" id="floatingTextarea2Disabled" style={{ height: 100 }} >Disabled textarea with some text inside</textarea>
                    <label htmlFor="floatingTextarea2Disabled">Comments</label>
                </div>

                <button type="submit" className="btn btn-primary">
                    Invia
                </button>
            </form>

        </>

    )
}

export default CreateMoviePage



