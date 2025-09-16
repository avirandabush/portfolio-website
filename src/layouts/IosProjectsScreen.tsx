import ProjectsView from "../components/ProjectsView"
import MobileProjectCell from "../components/ProjectCell/MobileProjectCell"

const IosProjectsScreen = () => (
    <ProjectsView
        projectType="ios"
        title="iOS"
        CellComponent={MobileProjectCell}
    />
)

export default IosProjectsScreen
