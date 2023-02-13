export default function ({ imgsrc, desc }) {
    return (
        <div className="card para">
            <img className="card-image" src={imgsrc} />
            <p> {desc} </p>
        </div>
    )
}
