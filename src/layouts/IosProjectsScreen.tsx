import ProjectsView from "../components/desktop/projectsView/ProjectsView"
import ProjectsDesktopCell from "../components/desktop/ProjectsDesktopCell/ProjectsDesktopCell"

const IosProjectsScreen = () => (
    <ProjectsView
        projectType="ios"
        title="iOS"
        CellComponent={ProjectsDesktopCell}
    />
)

export default IosProjectsScreen
