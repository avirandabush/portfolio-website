import type { Project } from "../../types/Project"
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
                    <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                        <button>View Code</button>
                    </a>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <button>View Project</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default MobileProjectCell
