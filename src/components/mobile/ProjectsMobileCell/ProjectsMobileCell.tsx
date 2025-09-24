import { useDevice } from "../../../context/DeviceContext";
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
    const { isMobile } = useDevice();

    return (
        <div className="cell-container">
            <div className="project-header">
                <h3>{project.name}</h3>
                <p className="date-string">
                    {project.createdAt.toLocaleDateString()}
                </p>
            </div>
            <div className="cell-body">
                <div className={`device-frame ${project.type}`}>
                    <video src={project.videoUrl} autoPlay loop />
                </div>
                <p className="project-description">
                    {project.description}
                </p>
            </div>
            <div className="cell-footer">
                <div className="tags">
                    {project.tags.map(tag => (
                        <span key={tag} className="tag">
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

export default ProjectsMobileCell;
