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
import AboutScreen from "../../../layouts/AboutScreen"
import AboutModal from "../AboutModal/AboutModal"
import ProjectsMobileCell from "../ProjectsMobileCell/ProjectsMobileCell"

type ModalType = "projects" | "about"

interface ModalState {
    type: ModalType
    title: string
    projectType?: string
}

export default function MobileApps() {
    const [modalState, setModalState] = useState<ModalState | null>(null)

    const openProjectsModal = (title: string, projectType: string) => {
        setModalState({ type: "projects", title, projectType })
    }

    const openAboutModal = (title: string) => {
        setModalState({ type: "about", title })
    }

    const closeModal = () => setModalState(null)

    const handleDownloadCv = () => downloadCv()

    return (
        <>
            <div className="mobile-apps-container">
                <DockButton
                    icon={appleIcon}
                    alt="iOS Projects"
                    onClick={() => openProjectsModal("iOS", "ios")}
                />
                <DockButton
                    icon={androidIcon}
                    alt="Android Projects"
                    onClick={() => openProjectsModal("Android", "android")}
                />
                <DockButton
                    icon={reactIcon}
                    alt="React Projects"
                    onClick={() => openProjectsModal("React", "react")}
                />
                <DockButton
                    icon={otherIcon}
                    alt="Other Projects"
                    onClick={() => openProjectsModal("Other", "other")}
                />
                <DockButton icon={cvIcon} alt="CV" onClick={handleDownloadCv} />
                <DockButton
                    icon={infoIcon}
                    alt="About"
                    onClick={() => openAboutModal("About Me")}
                />
            </div>

            {modalState?.type === "projects" && (
                <ProjectsModal
                    projectType={modalState.projectType!}
                    title={modalState.title}
                    CellComponent={ProjectsMobileCell}
                    onClose={closeModal}
                />
            )}

            {modalState?.type === "about" && (
                <AboutModal
                    title={modalState.title}
                    CellComponent={AboutScreen}
                    onClose={closeModal}
                />
            )}
        </>
    )
}
