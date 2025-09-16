import ProjectsView from "../components/ProjectsView"
import MobileProjectCell from "../components/ProjectCell/MobileProjectCell"

const ReactProjectsScreen = () => (
    <ProjectsView
        projectType="react"
        title="React"
        CellComponent={MobileProjectCell}
    />
)

export default ReactProjectsScreen
