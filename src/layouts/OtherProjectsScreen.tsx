import ProjectsView from "../components/desktop/projectsView/ProjectsView"
import ProjectsDesktopCell from "../components/desktop/ProjectsDesktopCell/ProjectsDesktopCell"

const OtherProjectsScreen = () => (
    <ProjectsView
        projectType="other"
        title="Other Programing Languages"
        CellComponent={ProjectsDesktopCell}
    />
)

export default OtherProjectsScreen
