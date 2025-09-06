import "./TopBar.css"
import { Screen } from "../types/Screen"
import homeIcon from "../assets/ad-plank.svg"
import phoneIcon from "../assets/phone.svg"
import whatsappIcon from "../assets/whatsapp.svg"
import mailIcon from "../assets/mail-plus.svg"

interface TopBarProps {
    onNavigate: (screen: Screen) => void
}

export default function TopBar({ onNavigate }: TopBarProps) {

    const phoneNumber = "+972547329884".replace(/\D/g, "")
    const emailAddress = "avirandabush@gmail.com"

    const handleMailClick = () => {
        window.location.href = `mailto:${emailAddress}`
    }

    const handleWhatsAppClick = () => {
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
        if (isMobile) {
            window.location.href = `whatsapp://send?phone=${phoneNumber}`
        } else {
            window.open(`https://wa.me/${phoneNumber}`, "_blank")
        }
        window.open(`https://wa.me/${phoneNumber}`, "_blank")
    }

    const handlePhoneClick = () => {
        alert(`Phone: ${phoneNumber}`)
    }

    return (
        <div className="top-bar">
            <div className="left">
                <img src={homeIcon} alt="Home" onClick={() => onNavigate(Screen.Home)} />
            </div>
            <div className="right">
                <img src={mailIcon} alt="Email" onClick={handleMailClick} />
                <img src={whatsappIcon} alt="WhatsApp" onClick={handleWhatsAppClick} />
                <img src={phoneIcon} alt="Phone" onClick={handlePhoneClick} />
            </div>
        </div>
    )
}
