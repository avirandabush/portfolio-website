import "./MobileApps.css"
import { useState } from "react"
import { downloadCv } from "../../../utils/files"
import DockButton from "../../desktop/dockButton/DockButton"
import ProjectsModal from "../ProjectsModal/ProjectsModal"
import appleIcon from "../../../assets/apple.svg"
import androidIcon from "../../../assets/android.svg"
import reactIcon from "../../../assets/react.svg"
import otherIcon from "../../../assets/brackets-code.svg"
import cvIcon from "../../../assets/file-cv.svg"
import infoIcon from "../../../assets/info.svg"
import MobileProjectCell from "../../desktop/projectCell/MobileProjectCell"

interface ModalState {
    title: string
    type: string
}

export default function MobileApps() {
    const [modalState, setModalState] = useState<ModalState | null>(null)

    const openModal = (title: string, type: string) => {
        setModalState({ title, type })
    }

    const closeModal = () => setModalState(null)

    const handleDownloadCv = () => {
        downloadCv()
    }

    return (
        <>
            <div className="mobile-apps-container">
                <DockButton
                    icon={appleIcon}
                    alt="iOS Projects"
                    onClick={() => openModal("iOS Projects", "ios")}
                />
                <DockButton
                    icon={androidIcon}
                    alt="Android Projects"
                    onClick={() => openModal("Android Projects", "android")}
                />
                <DockButton
                    icon={reactIcon}
                    alt="React Projects"
                    onClick={() => openModal("React Projects", "react")}
                />
                <DockButton
                    icon={otherIcon}
                    alt="Other Projects"
                    onClick={() => openModal("Other Projects", "other")}
                />
                <DockButton
                    icon={cvIcon}
                    alt="CV"
                    onClick={() => handleDownloadCv()}
                />
                <DockButton
                    icon={infoIcon}
                    alt="About"
                    onClick={() => console.log("open about page")}
                />
            </div>

            {modalState && (
                <ProjectsModal
                    projectType={modalState.type}
                    title={modalState.title}
                    CellComponent={MobileProjectCell}
                    onClose={closeModal}
                />
            )}
        </>
    )
}
