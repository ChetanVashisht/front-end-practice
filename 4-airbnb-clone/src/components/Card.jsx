import star from "../assets/star.svg"

function getBadgeText(card) {
    if (card.openSpots === 0) {
        return "SOLD OUT";
    } else if (card.location === 'Online') {
        return "ONLINE";
    }
    return null;
}

export default function Card(props) {
    var card = props.card;
    var badgeText = getBadgeText(card);
    return (
        <div className="cards">
            <div className="card">
                <div className="card-section">
                    {badgeText &&
                     <div className="card-special-box">
                        <span className="card-special"> {card.eyeCatcher} </span>
                        </div>}
                    <img className="card-image" src={`./src/assets/${card.coverImg}`} />
                </div>
                <div className="card-section">
                    <img src={star} />
                    <span className="card-review-dark-text">{(Math.round(card.stats.rating * 10) / 10).toFixed(1)}</span>
                    <span className="card-review-light-text"> ({card.stats.reviewCount}). </span>
                    <span className="card-review-light-text">{card.location}</span>
                </div>
                <div className="card-section">
                    <span>{card.title}</span>
                </div>
                <div className="card-section">
                    <span> <b> From ${card.price}</b> / person </span>
                </div>
            </div>
        </div>
    );
}
