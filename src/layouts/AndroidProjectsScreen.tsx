import ProjectsView from "../components/desktop/projectsView/ProjectsView"
import MobileProjectCell from "../components/desktop/projectCell/MobileProjectCell"

const AndroidProjectsScreen = () => (
    <ProjectsView
        projectType="android"
        title="Android"
        CellComponent={MobileProjectCell}
    />
)

export default AndroidProjectsScreen
