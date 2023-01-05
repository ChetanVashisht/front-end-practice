import Card from './Card'

export default function (props) {
    var renderCard = (card) => {
        return <Card card={{ ...card }} />
    }

    return <div className='cards-section'>{props.jokes.map(renderCard)}</div>
}
