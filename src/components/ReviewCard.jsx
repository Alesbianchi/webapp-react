const ReviewCard = ({ reviewProp }) => {
    const { text, vote, name } = reviewProp
    return (

        <div className="card mb-4 blue-shadow">
            <div className="card-body">
                <p>{text}</p>
                <p><strong>Vote</strong> {vote}</p>
                <p className="text-muted"><em>By {name}</em></p>
            </div>
        </div>
    )
}

export default ReviewCard


