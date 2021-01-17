import './textArea.css'

export default function TextArea(props) {
    return (
        <div>
            <h3 className="mobile subtitle">{props.subtitle}</h3>
                <p>
                    {props.text}
                </p>
        </div>
    )
}