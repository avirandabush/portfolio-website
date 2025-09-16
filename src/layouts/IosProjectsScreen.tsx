import ProjectsView from "../components/ProjectsView"
import MobileProjectCell from "../components/ProjectCell/MobileProjectCell"

const IosProjectsScreen = () => (
    <ProjectsView
        projectType="iOS"
        title="iOS Projects"
        CellComponent={MobileProjectCell}
    />
)

export default IosProjectsScreen
