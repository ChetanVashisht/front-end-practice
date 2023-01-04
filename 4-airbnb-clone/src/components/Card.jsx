import katie from "../assets/katie.png"
import star from "../assets/star.svg"

export default function Card() {
    return (
        <div className="cards">
            <div className="card">
                <div className="card-section">
                    <div className="card-special-box">
                        <span className="card-special"> SOLD OUT </span>
                    </div>
                    <img className="card-image" src={katie} />
                </div>
                <div className="card-section">
                    <img src={star} />
                    <span className="card-review-dark-text"> 5.0 </span>
                    <span className="card-review-light-text"> (6). USA</span>
                </div>
                <div className="card-section">
                    <span>Life lessons with Katie Zaferes</span>
                </div>
                <div className="card-section">
                    <span> <b>From $136 </b> / person </span>
                </div>
            </div>
        </div>
    );
}
