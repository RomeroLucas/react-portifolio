import './listGroup.css'

export function ListGroup(props) {
    return (
        <section className="list-group">
            <p className="list-title">{props.groupTitle}</p>
            {props.children}
        </section>
    )
}

export function ListItem(props) {
    return (
    <div className="list-item" key={props.dados.key}>
        <img src={require(`../../assets/icon/${props.dados.icon}`).default} alt="icons" />
        <span>{props.dados.skill}</span>
        <span>{props.dados.exp}</span>
    </div>
    )
}