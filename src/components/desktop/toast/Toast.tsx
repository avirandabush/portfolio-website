import { useEffect } from "react"
import "./Toast.css"

type ToastProps = {
    message: string
    onClose: () => void
    duration?: number
}

const Toast = ({ message, onClose, duration = 3000 }: ToastProps) => {
    useEffect(() => {
        const timer = setTimeout(onClose, duration)
        return () => clearTimeout(timer)
    }, [onClose, duration])

    return (
        <div className="toast">
            {message}
        </div>
    )
}

export default Toast
