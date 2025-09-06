import "./BottomDock.css"
import { Screen } from "../types/Screen"
import DockButton from "./DockButton"
import appleIcon from "../assets/apple.svg"
import androidIcon from "../assets/android.svg"
import reactIcon from "../assets/react.svg"
import cvIcon from "../assets/file-cv.svg"
import infoIcon from "../assets/info.svg"
import { showCvAlert } from "../utils/Alerts"

type BottomDockProps = {
    activeScreen: Screen;
    onNavigate: (screen: Screen) => void
}

const BottomDock = ({ activeScreen, onNavigate }: BottomDockProps) => {
    return (
        <div className="dock">
            <div className="dock-inner">
                <DockButton icon={appleIcon} alt={"iOS Projects"} isActive={activeScreen === Screen.iOS} onClick={() => onNavigate(Screen.iOS)} />
                <DockButton icon={androidIcon} alt={"Android Projects"} isActive={activeScreen === Screen.Android} onClick={() => onNavigate(Screen.Android)} />
                <DockButton icon={reactIcon} alt={"React Projects"} isActive={activeScreen === Screen.React} onClick={() => onNavigate(Screen.React)} />

                <div className="dock-devider" />

                <DockButton icon={cvIcon} alt={"Download CV file"} isActive={false} onClick={showCvAlert} />
                <DockButton icon={infoIcon} alt={"My Personal Info"} isActive={activeScreen === Screen.About} onClick={() => onNavigate(Screen.About)} />
            </div>
        </div>
    )
}

export default BottomDock
