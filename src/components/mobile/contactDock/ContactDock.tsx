import "./ContactDock.css"
import phoneIcon from "../../../assets/phone.svg"
import whatsappIcon from "../../../assets/whatsapp.svg"
import mailIcon from "../../../assets/mail-plus.svg"
import DockButton from "../../desktop/dockButton/DockButton"

export default function ContactDock() {
    const phoneNumber = "972547329884".replace(/\D/g, "")
    const emailAddress = "avirandabush@gmail.com"

    const handleMailClick = () => {
        window.location.href = `mailto:${emailAddress}`
    }

    const handleWhatsAppClick = () => {
        window.location.href = `whatsapp://send?phone=${phoneNumber}`
    }

    const handlePhoneClick = () => {
        window.location.href = `tel:${phoneNumber}`
    }

    return (
        <div className="contact-dock">
            <DockButton icon={mailIcon} alt={"Email"} onClick={handleMailClick} />
            <DockButton icon={whatsappIcon} alt={"Whatsapp"} onClick={handleWhatsAppClick} />
            <DockButton icon={phoneIcon} alt={"Phone"} onClick={handlePhoneClick} />
        </div>
    )
}
