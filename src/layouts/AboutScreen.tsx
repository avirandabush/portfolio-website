import { useEffect, useState } from "react"
import { useDevice } from "../context/DeviceContext"
import "./About.css"

type AboutScreenProps = {
    onClose: () => void
}

const AboutScreen = ({ onClose }: AboutScreenProps) => {

    const { isMobile } = useDevice();
    const [windowState, setWindowState] = useState<"normal" | "minimized" | "maximized">("normal")
    const [isCountdownVisible, setIsCountdownVisible] = useState(false)
    const [countdown, setCountdown] = useState(3)

    useEffect(() => {
        setWindowState("normal")
    }, [])

    useEffect(() => {
        if (windowState === "minimized") {
            setCountdown(3)
            setIsCountdownVisible(true)

            const interval = setInterval(() => {
                setCountdown(prev => {
                    if (prev <= 1) {
                        clearInterval(interval)
                        setWindowState("normal")
                        setIsCountdownVisible(false)
                        return 0
                    }
                    return prev - 1
                })
            }, 1000)

            return () => clearInterval(interval)
        }
    }, [windowState])

    return (
        <div className={`about-container ${windowState}`}>
            <div className={`terminal-window ${windowState}`}>
                <div className="terminal-header">
                    <div className="terminal-buttons">
                        <div className="terminal-button close" onClick={() => onClose()}></div>
                        <div className="terminal-button minimize" onClick={() => setWindowState("minimized") }></div>
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
            {isCountdownVisible && windowState === "minimized" && (
                <div className="minimized-bar" onClick={() => { setIsCountdownVisible(true); setWindowState("normal"); }}>
                    <p>Be back in <span>{countdown}...</span></p>
                </div>
            )}
        </div>
    )
}

export default AboutScreen
