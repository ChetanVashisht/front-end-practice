import Work from "./Work"
import data from "../assets/Data"

export default function HowWeWork() {
    const renderWork = (work) => (<Work imgsrc={work.img} desc={work.desc} />)
    return (
        <section>
            <h2> How We Work </h2>
            <div className="cards">
                {data.map(renderWork)}
            </div>
        </section>
    )
}
