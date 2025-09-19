import "./AlertPopup.css"

interface AlertPopupProps {
  title: string
  body: string
  onClose: () => void
}

export default function AlertPopup({ title, body, onClose }: AlertPopupProps) {
  return (
    <div className="alert-popup-overlay" onClick={onClose}>
      <div className="alert-popup-card" onClick={(e) => e.stopPropagation()}>
        <h3>{title}</h3>
        <p>{body}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  )
}
