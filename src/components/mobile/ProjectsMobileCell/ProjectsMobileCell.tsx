import type { Project } from "../../../types/Project"
import LinkAndIconButton from "../../desktop/linkAndIconButton/LinkAndIconButton";
import gitIcon from "../../../assets/git-branch.svg"
import gitIconLight from "../../../assets/git-branch-light.svg"
import appStoreIcon from "../../../assets/app-store.svg"
import googlePlayIcon from "../../../assets/google-play.svg"
import googlePlayLightIcon from "../../../assets/google-play-light.svg"
import visitWebsiteIcon from "../../../assets/website-click.svg"
import visitWebsiteLightIcon from "../../../assets/website-click-light.svg"
import "./ProjectsMobileCell.css"

type ProjectsMobileCellProps = {
    project: Project;
}

const ProjectsMobileCell = ({ project }: ProjectsMobileCellProps) => {

    return (
        <div className="mobile-cell-container">
            <div className="mobile-project-header">
                <h3>{project.name}</h3>
                <p className="mobile-date-string">
                    {project.createdAt.toLocaleDateString()}
                </p>
            </div>
            <div className="mobile-cell-body">
                <div className={`mobile-device-frame ${project.type}`}>
                    <video src={project.videoUrl} autoPlay loop />
                </div>
                <p className="mobile-project-description">
                    {project.description}
                </p>
            </div>
            <div className="mobile-cell-footer">
                <div className="mobile-tags">
                    {project.tags.map(tag => (
                        <span key={tag} className="mobile-tag">
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="mobile-actions">
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

export default ProjectsMobileCell;
