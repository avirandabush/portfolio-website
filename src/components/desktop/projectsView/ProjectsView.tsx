import { useState, useEffect, type ComponentType } from "react"
import { fetchProjects } from "../../../utils/ProjectsServise"
import type { Project } from "../../../types/Project"
import next from "../../../assets/next-arrow.svg"
import "./ProjectsView.css"

interface ProjectsViewProps {
    projectType: string
    title: string
    CellComponent: ComponentType<{ project: Project }>
}

const ProjectsView = ({ projectType, title, CellComponent }: ProjectsViewProps) => {
    const [projects, setProjects] = useState<Project[]>([])
    const [currentIndex, setCurrentIndex] = useState(0)
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

    const goNext = () => {
        setCurrentIndex((prev) => (prev + 1) % projects.length)
    }

    const goPrev = () => {
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
    }

    const project = projects[currentIndex]

    return (
        <div className="projects-container">
            <div className="projects-left">
                <h2>{title}</h2>
            </div>
            <div className="projects-right">
                {loading ? (
                    <div className="projects-loader">Loading {title} Projects...</div>
                ) : error ? (
                    <div className="projects-error">{error}</div>
                ) : projects.length === 0 ? (
                    <div className="projects-empty">No {title} projects found</div>
                ) : (
                    <>
                        {projects.length > 1 && (
                            <button className="nav-button" onClick={goPrev}>
                                <img src={next} alt="Prev" id="backArrow" />
                            </button>
                        )}

                        <CellComponent project={project} />

                        {projects.length > 1 && (
                            <button className="nav-button" onClick={goNext}>
                                <img src={next} alt="Next" />
                            </button>
                        )}
                    </>
                )}
            </div>
        </div>
    )
}

export default ProjectsView
