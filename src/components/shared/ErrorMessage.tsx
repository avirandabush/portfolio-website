import "./ErrorMessage.css"
import errorIcon from "../../assets/error.svg"

type ErrorMessageProps = {
    message: string;
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
    return (
        <div className="error-container">
            <img src={errorIcon} alt="error icon" className="error-icon" />
            <h3 className="error-header">Error</h3>
            <p className="error-message">{message}</p>
            <p className="error-footer">Please try again later</p>
        </div>
    )
}
