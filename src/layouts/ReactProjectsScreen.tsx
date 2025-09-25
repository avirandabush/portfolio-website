import ProjectsView from "../components/desktop/projectsView/ProjectsView"
import ProjectsDesktopCell from "../components/desktop/ProjectsDesktopCell/ProjectsDesktopCell"

const ReactProjectsScreen = () => (
    <ProjectsView
        projectType="react"
        title="React"
        CellComponent={ProjectsDesktopCell}
    />
)

export default ReactProjectsScreen
