import Card from './Card'

export default function Cards(props) {
    var cardRender = function (card) { return <Card card={card} /> }
    return (<div>{props.data.map(cardRender)}</div>)
}
