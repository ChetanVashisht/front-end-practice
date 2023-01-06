import pin from "../assets/pin.svg"


export default function (props) {
    var card = props.card
    return (
        <div className="card">
            <img className="card-image" src={`./src/assets/${card.imageUrl}`} />
            <div>
                <div>
                    <img src={pin} />
                    <span className="card-location" > {card.location} </span>
                    <a href={card.googleMapsUrl} className="card-link">View on Google Maps </a>
                </div>
                <h2 className="card-title"> {card.title} </h2>
                <div className="card-dates">
                    <span> {card.startDate} </span> - <span> {card.endDate} </span>
                </div>
                <p className="card-para"> {card.description} </p>
            </div>
        </div>
    )
}
