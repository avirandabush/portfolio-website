import { useEffect, useState, type ComponentType } from "react";
import "./ProjectsModal.css";
import type { Project } from "../../../types/Project";
import { fetchProjects } from "../../../utils/ProjectsServise";

interface ProjectsModalProps {
    projectType: string
    title: string
    CellComponent: ComponentType<{ project: Project }>
    onClose: () => void;
}

export default function ProjectsModal({ projectType, title, CellComponent, onClose }: ProjectsModalProps) {
    const [projects, setProjects] = useState<Project[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const loadProjects = async () => {
            try {
                const data = await fetchProjects(projectType)
                setProjects(data)
            } catch (err) {
                setError("Error fetching projects")
            } finally {
                setLoading(false)
            }
        }

        loadProjects()
    }, [projectType])

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>{title}</h2>
                    <button className="modal-close" onClick={onClose}>✕</button>
                </div>
                <div className="modal-body"><div className="modal-body">
                    {loading && <div>Loading projects...</div>}
                    {error && <div>{error}</div>}
                    {!loading && !error && projects.length === 0 && <div>No projects found</div>}

                    {!loading && !error && projects.length > 0 && (
                        <div className="projects-list">
                            {projects.map(project => (
                                <CellComponent key={project.id} project={project} />
                            ))}
                        </div>
                    )}
                </div>

                </div>
            </div>
        </div>
    );
}
