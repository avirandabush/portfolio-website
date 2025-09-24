import type { Project } from "../../../types/Project"
import LinkAndIconButton from "../../shared/linkAndIconButton/LinkAndIconButton"
import gitIcon from "../../../assets/git-branch.svg"
import gitIconLight from "../../../assets/git-branch-light.svg"
import appStoreIcon from "../../../assets/app-store.svg"
import googlePlayIcon from "../../../assets/google-play.svg"
import googlePlayLightIcon from "../../../assets/google-play-light.svg"
import visitWebsiteIcon from "../../../assets/website-click.svg"
import visitWebsiteLightIcon from "../../../assets/website-click-light.svg"
import "./MobileProjectCell.css"
import { useDevice } from "../../../context/DeviceContext"

type Props = {
    project: Project
}

const MobileProjectCell = ({ project }: Props) => {

    const { isMobile } = useDevice();

    return (
        <div className={`mobile-cell ${isMobile ? 'mobile' : 'desktop'}`}>
            <div className={`device-frame ${isMobile ? 'mobile' : 'desktop'} ${project.type}`}>
                <video src={project.videoUrl} autoPlay loop />
            </div>

            <div className={`project-details ${isMobile ? 'mobile' : 'desktop'}`}>
                <h3>{project.name}</h3>
                <p className={`date ${isMobile ? 'mobile' : 'desktop'}`}>
                    {project.createdAt.toLocaleDateString()}
                </p>
                <p className={`description ${isMobile ? 'mobile' : 'desktop'}`}>
                    {project.description}
                </p>

                <div className={`tags ${isMobile ? 'mobile' : 'desktop'}`}>
                    {project.tags.map(tag => (
                        <span key={tag} className={`tag ${isMobile ? 'mobile' : 'desktop'}`}>
                            {tag}
                        </span>
                    ))}
                </div>

                <div className={`actions ${isMobile ? 'mobile' : 'desktop'}`}>
                    <LinkAndIconButton
                        text={"View Code"}
                        link={project.codeUrl}
                        icon={gitIcon}
                        hoverIcon={gitIconLight}
                    />

                    {project.liveUrl && (
                        <LinkAndIconButton
                            text={"View Project"}
                            link={project.liveUrl}
                            icon={project.type === "android" ? googlePlayIcon : project.type === "ios" ? appStoreIcon : visitWebsiteIcon}
                            hoverIcon={project.type === "android" ? googlePlayLightIcon : project.type === "ios" ? appStoreIcon : visitWebsiteLightIcon}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}

export default MobileProjectCell
