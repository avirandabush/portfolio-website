import MobileApps from "../components/mobile/MobileApps/MobileApps";
import { useDevice } from "../context/DeviceContext";
import "./Home.css"

const HomeScreen = () => {
    const { isMobile } = useDevice();

    return (
        <div className={`home-container ${isMobile ? 'mobile' : 'desktop'}`}>
            {isMobile && (
                <div className="mobile-apps-wrapper">
                    <MobileApps />
                </div>
            )}

            <div className="home-text">
                <h1>Aviran Dabush</h1>
                <h2>Front-End Developer</h2>
            </div>
        </div>
    )
}

export default HomeScreen
