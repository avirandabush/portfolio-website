import { useState } from "react"
import MobileProjectCell from "../components/ProjectCell/MobileProjectCell"
import type { Project } from "../types/Project"
import next from "../assets/next-arrow.svg"
import "./Projects.css"

const IosProjectsScreen = () => {

    const mockProject: Project[] = [
        {
            id: "1",
            name: "My iOS Todo App",
            description: "An iOS app to manage daily tasks with a sleek UI and local storage. An iOS app to manage daily tasks with a sleek UI and local storage.",
            videoUrl: "https://res.cloudinary.com/dmfnvzewi/video/upload/v1755681786/Pregnancy-Tracker_iiow5q.mp4",
            codeUrl: "https://github.com/username/ios-todo-app",
            liveUrl: "https://apps.apple.com/app/id123456789",
            createdAt: new Date("2025-01-15"),
            tags: ["iOS", "Swift", "CoreData"],
            type: "ios"
        },
        {
            id: "2",
            name: "Weather App",
            description: "An iOS app to manage daily tasks with a sleek UI and local storage. An iOS app to manage daily tasks with a sleek UI and local storage.",
            videoUrl: "https://res.cloudinary.com/dmfnvzewi/video/upload/v1755679623/BMI-Calculator_aasqqx.mp4",
            codeUrl: "https://github.com/username/ios-todo-app",
            liveUrl: "https://apps.apple.com/app/id123456789",
            createdAt: new Date("2025-01-15"),
            tags: ["iOS", "Swift", "API"],
            type: "android"
        },
        {
            id: "3",
            name: "Fitness Tracker",
            description: "An iOS app to manage daily tasks with a sleek UI and local storage. An iOS app to manage daily tasks with a sleek UI and local storage.",
            videoUrl: "/videos/ios-todo-demo.mp4",
            codeUrl: "https://github.com/username/ios-todo-app",
            liveUrl: "https://apps.apple.com/app/id123456789",
            createdAt: new Date("2025-01-15"),
            tags: ["iOS", "Swift", "Health Kit"],
            type: "ios"
        }
    ]

    const [currentIndex, setCurrentIndex] = useState(0)

    const goNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % mockProject.length)
    }

    const goPrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + mockProject.length) % mockProject.length)
    }

    const project = mockProject[currentIndex]

    return (
        <div className="projects-container">
            <div className="projects-left">
                <h2>iOS Projects</h2>
            </div>
            <div className="projects-right">
                <button className="nav-button" onClick={goPrev}>
                    <img src={next} alt="Next" id="backArrow" />
                </button>

                <MobileProjectCell project={project} />

                <button className="nav-button" onClick={goNext}>
                    <img src={next} alt="Next" />
                </button>
            </div>
        </div>
    )
}

export default IosProjectsScreen
