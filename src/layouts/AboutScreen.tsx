import { useEffect, useState } from "react"
import { Screen } from "../types/Screen"
import "./About.css"

type AboutScreenProps = {
    onClose: () => void
}

const AboutScreen = ({ onClose }: AboutScreenProps) => {

    const [windowState, setWindowState] = useState<"normal" | "minimized" | "maximized" | "closed">("normal")

    useEffect(() => {
        setWindowState("normal")
    }, [])

    if (windowState === "closed") {
        return null
    }
    
    return (
        <div className={`about-container ${windowState}`}>
            <div className={`terminal-window ${windowState}`}>
                <div className="terminal-header">
                    <div className="terminal-buttons">
                        <div className="terminal-button close" onClick={() => onClose()}></div>
                        <div className="terminal-button minimize" onClick={() => setWindowState("minimized")}></div>
                        <div className="terminal-button maximize" onClick={() => setWindowState(windowState === "maximized" ? "normal" : "maximized")}></div>
                    </div>
                    <div className="terminal-title">About Me</div>
                </div>
                <div className="terminal-content">
                    <p>Hi, my name is Aviran Dabush.</p>
                    <p>iOS developer with three years of experience in mobile app development.</p>
                    <p>I also practice Android and web development in my free time.</p>
                    <p>Passionate about learning new technologies, improving my skills, and growing professionally.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutScreen
