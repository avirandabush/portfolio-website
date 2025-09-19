import "./TopContactBar.css"
import { useState } from "react"
import { Screen } from "../../../types/Screen"
import homeIcon from "../../../assets/ad-plank.svg"
import phoneIcon from "../../../assets/phone.svg"
import whatsappIcon from "../../../assets/whatsapp.svg"
import mailIcon from "../../../assets/mail-plus.svg"
import AlertPopup from "../alertPopup/AlertPopup"

interface TopContactBarProps {
    onNavigate: (screen: Screen) => void
}

export default function TopContactBar({ onNavigate }: TopContactBarProps) {
    const [showPhonePopup, setShowPhonePopup] = useState(false)

    const phoneNumber = "+972-54-7329884"
    const emailAddress = "avirandabush@gmail.com"

    const handleMailClick = () => {
        window.open(`mailto:${emailAddress}`, "_")
    }

    const handleWhatsAppClick = () => {
        window.open(`https://web.whatsapp.com/send?phone=${phoneNumber.replace(/\D/g, "")}`, "_blank")
    }

    const handlePhoneClick = () => {
        setShowPhonePopup(true)
    }

    return (
        <div className="top-bar">
            <div className="left">
                <img src={homeIcon} alt="Home" onClick={() => onNavigate(Screen.Home)} />
            </div>
            <div className="right wave-icons">
                <img src={mailIcon} alt="Email" onClick={handleMailClick} />
                <img src={whatsappIcon} alt="WhatsApp" onClick={handleWhatsAppClick} />
                <img src={phoneIcon} alt="Phone" onClick={handlePhoneClick} />
            </div>

            {showPhonePopup && (
                <AlertPopup title="Call" body={phoneNumber} onClose={() => setShowPhonePopup(false)} />
            )}
        </div>
    )
}
