import { useDevice } from "../context/DeviceContext";
import "./Home.css"

const HomeScreen = () => {
    const { isMobile } = useDevice();
    return (
        <div className={`home-container ${isMobile ? 'mobile' : 'desktop'}`}>
            <h1>Aviran Dabush</h1>
            <h2>Front-End Developer</h2>
        </div>
    )
}

export default HomeScreen
