import ProjectsView from "../components/ProjectsView"
import MobileProjectCell from "../components/ProjectCell/MobileProjectCell"

const OtherProjectsScreen = () => (
    <ProjectsView
        projectType="other"
        title="Other Programing Languages"
        CellComponent={MobileProjectCell}
    />
)

export default OtherProjectsScreen
