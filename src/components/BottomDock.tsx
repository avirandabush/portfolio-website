import "./BottomDock.css"
import { Screen } from "../types/Screen"
import DockButton from "./DockButton"
import appleIcon from "../assets/apple.svg"
import androidIcon from "../assets/android.svg"
import reactIcon from "../assets/react.svg"
import cvIcon from "../assets/file-cv.svg"
import infoIcon from "../assets/info.svg"

type BottomDockProps = {
    activeScreen: Screen;
}

const BottomDock = ({ activeScreen }: BottomDockProps) => {
    return (
        <div className="dock">
            <div className="dock-inner">
                <DockButton icon={appleIcon} alt={"iOS Projects"} isActive={activeScreen === Screen.iOS} onClick={() => console.log("iOS")} />
                <DockButton icon={androidIcon} alt={"Android Projects"} isActive={activeScreen === Screen.Android} onClick={() => console.log("Android")} />
                <DockButton icon={reactIcon} alt={"React Projects"} isActive={activeScreen === Screen.React} onClick={() => console.log("React")} />

                <div className="dock-devider" />
                
                <DockButton icon={cvIcon} alt={"Download CV file"} isActive={false} onClick={() => console.log("cv")} />
                <DockButton icon={infoIcon} alt={"My Personal Info"} isActive={activeScreen === Screen.About} onClick={() => console.log("info")} />
            </div>
        </div>
    )
}

export default BottomDock
