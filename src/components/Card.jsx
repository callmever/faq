import "./card.css"

const Card = (props) => {
    return(
        <div className="card-box">
            <img src={props.image} alt="image" />
            <p>{props.name}</p>
        </div>
    )
}

export default Card