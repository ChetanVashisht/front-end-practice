import Work from "./Work"
import data from "../assets/Data"

export default function HowWeWork() {
    const renderWork = (work) => <Work img={work.img} text={work.desc} />
    return (
        <div>
            <h2 className="section-heading"> How We Work </h2>
            <div>
                {data.map(renderWork)}
            </div>
        </div>
    )
}
