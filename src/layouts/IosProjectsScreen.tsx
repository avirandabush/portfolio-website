import { useState, useEffect } from "react"
import MobileProjectCell from "../components/ProjectCell/MobileProjectCell"
import { fetchProjects } from "../utils/ProjectsServise"
import type { Project } from "../types/Project"
import next from "../assets/next-arrow.svg"
import "./Projects.css"

const IosProjectsScreen = () => {
    const [projects, setProjects] = useState<Project[]>([])
    const [currentIndex, setCurrentIndex] = useState(0)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const loadProjects = async () => {
            try {
                const data = await fetchProjects("iOS")
                setProjects(data)
            } catch (err) {
                console.error("Error fetching projects:", err)
                setError("Failed to load projects")
            } finally {
                setLoading(false)
            }
        }

        loadProjects()
    }, [])

    const goNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
    }

    const goPrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length)
    }

    return (
        <div className="projects-container">
            <div className="projects-left">
                <h2>iOS Projects</h2>
            </div>

            <div className="projects-right">
                {loading ? (
                    <div className="projects-loader">Loading projects...</div>
                ) : error ? (
                    <div className="projects-error">{error}</div>
                ) : projects.length === 0 ? (
                    <div className="projects-empty">No projects found</div>
                ) : (
                    <>
                        <button className="nav-button" onClick={goPrev}>
                            <img src={next} alt="Prev" id="backArrow" />
                        </button>

                        <MobileProjectCell project={projects[currentIndex]} />

                        <button className="nav-button" onClick={goNext}>
                            <img src={next} alt="Next" />
                        </button>
                    </>
                )}
            </div>
        </div>
    )
}

export default IosProjectsScreen
