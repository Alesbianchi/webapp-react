const ReviewForm = () => {
    return (
        <div className="container mt-4">
            <h2 className="mb-3 text-white">Lascia una Recensione</h2>
            <form>
                <div className="mb-3 text-white">
                    <label for="name" className="form-label">Nome</label>
                    <input type="text" className="form-control" id="name" required />
                </div>

                <div class="mb-3 text-white">
                    <label for="rating" className="form-label">Voto (1-5)</label>
                    <input type="number" className="form-control" id="rating" min="1" max="5" required />
                </div>

                <div className="mb-3 text-white">
                    <label for="description" className="form-label">Descrizione</label>
                    <textarea className="form-control" id="description" rows="3" required></textarea>
                </div>

                <button type="submit" className="btn btn-primary">Invia</button>
            </form>
        </div>

    )
}

export default ReviewForm