import "./LinkAndIconButton.css"

interface LinkAndIconButtonProps {
    text: string
    link: string
    icon: string
    hoverIcon: string
}

export default function LinkAndIconButton({ text, link, icon, hoverIcon }: LinkAndIconButtonProps) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="link-icon-button"
        >
            <img src={icon} alt={`${text} icon`} className="button-icon default" />

            <img src={hoverIcon} alt={`${text} icon`} className="button-icon hover" />

            <span className="button-text">{text}</span>
        </a>
    )
}
