import ProjectsView from "../components/desktop/projectsView/ProjectsView"
import MobileProjectCell from "../components/desktop/projectCell/MobileProjectCell"

const IosProjectsScreen = () => (
    <ProjectsView
        projectType="ios"
        title="iOS"
        CellComponent={MobileProjectCell}
    />
)

export default IosProjectsScreen
