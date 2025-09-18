import "./App.css"
import { useState } from "react"
import { Screen } from "./types/Screen"
import TopBar from "./components/TopBar"
import BottomDock from "./components/BottomDock"
import HomeScreen from "./layouts/HomeScreen"
import AboutScreen from "./layouts/AboutScreen"
import IosProjectsScreen from "./layouts/IosProjectsScreen"
import AndroidProjectsScreen from "./layouts/AndroidProjectsScreen"
import ReactProjectsScreen from "./layouts/ReactProjectsScreen"
import OtherProjectsScreen from "./layouts/OtherProjectsScreen"

function App() {

  const [activeScreen, setActiveScreen] = useState<Screen>(Screen.Home)

  return (
    <div className="app">
      <div className="container">
        <TopBar
          onNavigate={setActiveScreen}
        />

        <div className="content">
          {activeScreen === Screen.Home && <HomeScreen />}
          {activeScreen === Screen.About && <AboutScreen />}
          {activeScreen === Screen.iOS && <IosProjectsScreen />}
          {activeScreen === Screen.Android && <AndroidProjectsScreen />}
          {activeScreen === Screen.React && <ReactProjectsScreen />}
          {activeScreen === Screen.Other && <OtherProjectsScreen />}
        </div>

        <BottomDock activeScreen={activeScreen} onNavigate={setActiveScreen} />
      </div>
    </div>
  )
}

export default App
