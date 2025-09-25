import ProjectsView from "../components/desktop/projectsView/ProjectsView"
import ProjectsDesktopCell from "../components/desktop/ProjectsDesktopCell/ProjectsDesktopCell"

const AndroidProjectsScreen = () => (
    <ProjectsView
        projectType="android"
        title="Android"
        CellComponent={ProjectsDesktopCell}
    />
)

export default AndroidProjectsScreen
