import "./DockButton.css"

type DockButtonProps = {
    icon: string
    alt: string
    isActive: boolean
    onClick?: () => void
}

const DockButton = ({ icon, alt, isActive, onClick }: DockButtonProps) => {
    return (
        <div className="dock-button-wrapper">
            <button className="dock-button" onClick={onClick}>
                <img src={icon} alt={alt} />
            </button>
            {isActive && <div className="dock-indicator" />}
        </div>
    )
}

export default DockButton
