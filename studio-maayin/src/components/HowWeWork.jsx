import Work from "./Work"
import data from "../assets/workData"

export default function HowWeWork() {
    const renderWork = (work, i) => (<Work imgsrc={work.img} desc={work.desc} key={i} />)
    return (
        <section>
            <h2> How We Work </h2>
            <div className="cards">
                {data.map(renderWork)}
            </div>
        </section>
    )
}
