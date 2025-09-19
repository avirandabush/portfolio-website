import "./App.css"
import { useState } from "react"
import { Screen } from "./types/Screen"
import { useDevice } from "./context/DeviceContext"
import TopContactBar from "./components/desktop/contactBar/TopContactBar"
import AppsDock from "./components/desktop/appsDock/AppsDock"
import ContactDock from "./components/mobile/contactDock/ContactDock"
import TopMobileBar from "./components/mobile/TopMobileBar/TopMobileBar"
import HomeScreen from "./layouts/HomeScreen"
import AboutScreen from "./layouts/AboutScreen"
import IosProjectsScreen from "./layouts/IosProjectsScreen"
import AndroidProjectsScreen from "./layouts/AndroidProjectsScreen"
import ReactProjectsScreen from "./layouts/ReactProjectsScreen"
import OtherProjectsScreen from "./layouts/OtherProjectsScreen"

function App() {

  const [activeScreen, setActiveScreen] = useState<Screen>(Screen.Home);
  const { isMobile } = useDevice();

  const TopBar = isMobile 
  ? <TopMobileBar onNavigate={setActiveScreen} />
  : <TopContactBar onNavigate={setActiveScreen} />;

  const BottomBar = isMobile
    ? <ContactDock />
    : <AppsDock activeScreen={activeScreen} onNavigate={setActiveScreen} />;

  return (
    <div className="app">
      <div className="container">
        {TopBar}

        <div className="content">
          {activeScreen === Screen.Home && <HomeScreen />}
          {activeScreen === Screen.About && <AboutScreen onClose={() => setActiveScreen(Screen.Home)} />}
          {activeScreen === Screen.iOS && <IosProjectsScreen />}
          {activeScreen === Screen.Android && <AndroidProjectsScreen />}
          {activeScreen === Screen.React && <ReactProjectsScreen />}
          {activeScreen === Screen.Other && <OtherProjectsScreen />}
        </div>

        {BottomBar}
      </div>
    </div>
  )
}

export default App
