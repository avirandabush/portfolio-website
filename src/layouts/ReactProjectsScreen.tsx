import ProjectsView from "../components/desktop/projectsView/ProjectsView"
import MobileProjectCell from "../components/desktop/projectCell/MobileProjectCell"

const ReactProjectsScreen = () => (
    <ProjectsView
        projectType="react"
        title="React"
        CellComponent={MobileProjectCell}
    />
)

export default ReactProjectsScreen
