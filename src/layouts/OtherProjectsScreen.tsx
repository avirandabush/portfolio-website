import ProjectsView from "../components/desktop/projectsView/ProjectsView"
import MobileProjectCell from "../components/desktop/projectCell/MobileProjectCell"

const OtherProjectsScreen = () => (
    <ProjectsView
        projectType="other"
        title="Other Programing Languages"
        CellComponent={MobileProjectCell}
    />
)

export default OtherProjectsScreen
