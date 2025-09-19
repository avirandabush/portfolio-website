import "./TopMobileBar.css"
import homeIcon from "../../../assets/ad-plank.svg";
import { Screen } from "../../../types/Screen";

interface TopMobileBarProps {
    onNavigate: (screen: Screen) => void
}

export default function TopMobileBar({ onNavigate }: TopMobileBarProps) {
    return (
        <div className="bar-container">
            <div className="left">
                <img
                    src={homeIcon}
                    alt="Home"
                    onClick={() => onNavigate(Screen.Home)}
                />
            </div>
            <div className="center">
                Portfolio
            </div>
            <div className="right">{/* empty to keep balance */}</div>
        </div>
    )
}
