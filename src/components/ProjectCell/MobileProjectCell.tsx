import type { Project } from "../../types/Project"
import LinkAndIconButton from "../LinkAndIconButton"
import gitIcon from "../../assets/git-branch.svg"
import gitIconLight from "../../assets/git-branch-light.svg"
import appStoreIcon from "../../assets/app-store.svg"
import googlePlayIcon from "../../assets/google-play.svg"
import googlePlayLightIcon from "../../assets/google-play-light.svg"
import visitWebsiteIcon from "../../assets/website-click.svg"
import visitWebsiteLightIcon from "../../assets/website-click-light.svg"
import "./MobileProjectCell.css"

type Props = {
    project: Project
}

const MobileProjectCell = ({ project }: Props) => {
    return (
        <div className="mobile-cell">
            <div className={`device-frame ${project.type}`}>
                <video src={project.videoUrl} autoPlay loop />
            </div>

            <div className="project-details">
                <h3>{project.name}</h3>
                <p className="date">{project.createdAt.toLocaleDateString()}</p>
                <p className="description">{project.description}</p>

                <div className="tags">
                    {project.tags.map(tag => (
                        <span key={tag} className="tag">{tag}</span>
                    ))}
                </div>

                <div className="actions">
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
