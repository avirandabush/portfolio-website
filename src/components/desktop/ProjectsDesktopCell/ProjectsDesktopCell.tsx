import type { Project } from "../../../types/Project"
import LinkAndIconButton from "../../shared/linkAndIconButton/LinkAndIconButton"
import gitIcon from "../../../assets/git-branch.svg"
import gitIconLight from "../../../assets/git-branch-light.svg"
import appStoreIcon from "../../../assets/app-store.svg"
import googlePlayIcon from "../../../assets/google-play.svg"
import googlePlayLightIcon from "../../../assets/google-play-light.svg"
import visitWebsiteIcon from "../../../assets/website-click.svg"
import visitWebsiteLightIcon from "../../../assets/website-click-light.svg"
import "./ProjectsDesktopCell.css"

type ProjectsDesktopCellProps = {
    project: Project;
}

const ProjectsDesktopCell = ({ project }: ProjectsDesktopCellProps) => {
    return (
        <div className={`desktop-cell-container ${project.type}`}>
            <div className="desktop-video-section">
                <div className={`desktop-device-frame ${project.type}`}>
                    <video src={project.videoUrl} autoPlay loop />
                </div>
            </div>

            <div className="desktop-cell-content">
                <h3>{project.name}</h3>
                <p className="desktop-date-string">
                    {project.createdAt.toLocaleDateString()}
                </p>
                <p className="desktop-project-description">
                    {project.description}
                </p>
                <div className="desktop-tags">
                    {project.tags.map(tag => (
                        <span key={tag} className="desktop-tag">{tag}</span>
                    ))}
                </div>
                <div className="desktop-actions">
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
                            icon={
                                project.type === "android"
                                    ? googlePlayIcon
                                    : project.type === "ios"
                                        ? appStoreIcon
                                        : visitWebsiteIcon
                            }
                            hoverIcon={
                                project.type === "android"
                                    ? googlePlayLightIcon
                                    : project.type === "ios"
                                        ? appStoreIcon
                                        : visitWebsiteLightIcon
                            }
                        />
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProjectsDesktopCell;
