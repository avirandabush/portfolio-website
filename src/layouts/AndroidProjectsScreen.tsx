import ProjectsView from "../components/ProjectsView"
import MobileProjectCell from "../components/ProjectCell/MobileProjectCell"

const AndroidProjectsScreen = () => (
    <ProjectsView
        projectType="android"
        title="Android"
        CellComponent={MobileProjectCell}
    />
)

export default AndroidProjectsScreen
