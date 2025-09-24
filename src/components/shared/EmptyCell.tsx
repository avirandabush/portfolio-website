import "./EmptyCell.css"
import emptyIcon from "../../assets/empty.svg"

type EmptyMessageProps = {
    name: string;
}

export default function EmptyCell({ name }: EmptyMessageProps) {
    return (
        <div className="empty-container">
            <img src={emptyIcon} alt="empty icon" className="empty-icon" />
            <h3 className="empty-header">Sorry</h3>
            <p className="empty-message">Coulnd't find any {name} projects.</p>
        </div>
    )
}
