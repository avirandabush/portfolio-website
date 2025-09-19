import "./TopBar.css"
import { useState } from "react"
import { Screen } from "../../../types/Screen"
import homeIcon from "../../../assets/ad-plank.svg"
import phoneIcon from "../../../assets/phone.svg"
import whatsappIcon from "../../../assets/whatsapp.svg"
import mailIcon from "../../../assets/mail-plus.svg"
import AlertPopup from "../alertPopup/AlertPopup"

interface TopBarProps {
    onNavigate: (screen: Screen) => void
}

export default function TopBar({ onNavigate }: TopBarProps) {
    const [showPhonePopup, setShowPhonePopup] = useState(false)

    const phoneNumber = "0547329884".replace(/\D/g, "")
    const emailAddress = "avirandabush@gmail.com"
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

    const handleMailClick = () => {
        if (isMobile) {
            window.location.href = `mailto:${emailAddress}`
        } else {
            window.open(`mailto:${emailAddress}`, "_")
        }
    }

    const handleWhatsAppClick = () => {
        if (isMobile) {
            window.location.href = `whatsapp://send?phone=${phoneNumber}`
        } else {
            window.open(`https://web.whatsapp.com/send?phone=${phoneNumber}`, "_blank")
        }
    }

    const handlePhoneClick = () => {
        if (isMobile) {
            window.location.href = `tel:${phoneNumber}`
        } else {
            setShowPhonePopup(true)
        }
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
