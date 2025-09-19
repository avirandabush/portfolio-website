import "./BottomDock.css"
import { useState } from "react"
import { Screen } from "../../../types/Screen"
import DockButton from "../dockButton/DockButton"
import appleIcon from "../../../assets/apple.svg"
import androidIcon from "../../../assets/android.svg"
import reactIcon from "../../../assets/react.svg"
import otherIcon from "../../../assets/brackets-code.svg"
import cvIcon from "../../../assets/file-cv.svg"
import infoIcon from "../../../assets/info.svg"
import Toast from "../toast/Toast"

type BottomDockProps = {
    activeScreen: Screen;
    onNavigate: (screen: Screen) => void
}

const BottomDock = ({ activeScreen, onNavigate }: BottomDockProps) => {
    const [toastMessage, setToastMessage] = useState<string | null>(null)

    const handleDownloadCv = () => {
        const link = document.createElement("a")
        link.href = "cv.pdf"
        link.download = "Aviran_Dabush_iOS_Developer_CV.pdf"
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)

        setToastMessage("📄 CV file was downloaded successfully!")
    }

    return (
        <>
            <div className="dock">
                <div className="dock-inner">
                    <DockButton icon={appleIcon} alt={"iOS Projects"} isActive={activeScreen === Screen.iOS} onClick={() => onNavigate(Screen.iOS)} />
                    <DockButton icon={androidIcon} alt={"Android Projects"} isActive={activeScreen === Screen.Android} onClick={() => onNavigate(Screen.Android)} />
                    <DockButton icon={reactIcon} alt={"React Projects"} isActive={activeScreen === Screen.React} onClick={() => onNavigate(Screen.React)} />
                    <DockButton icon={otherIcon} alt={"Other Projects"} isActive={activeScreen === Screen.Other} onClick={() => onNavigate(Screen.Other)} />

                    <div className="dock-devider" />

                    <DockButton icon={cvIcon} alt={"Download CV file"} isActive={false} onClick={handleDownloadCv} />
                    <DockButton icon={infoIcon} alt={"My Personal Info"} isActive={activeScreen === Screen.About} onClick={() => onNavigate(Screen.About)} />
                </div>
            </div>

            {toastMessage && (
                <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
            )}
        </>
    )
}

export default BottomDock
