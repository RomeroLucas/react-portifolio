import './card.css'

export  function CardArea(props) {
    return (
        <div className="cards-area">
            {props.children}
        </div>

    )
}

export function Card(props) {
    return (
        <div className="cards">
            <p>{props.title}</p>
            <img src={require(`../../assets/gif/${props.img}`).default} />
        </div>
    )
}