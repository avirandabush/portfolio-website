import "./App.css"
import { useState } from "react"
import { Screen } from "./types/Screen"
import TopBar from "./components/TopBar"
import BottomDock from "./components/BottomDock"

function App() {

  const [activeScreen, setActiveScreen] = useState<Screen>(Screen.Home)

  return (
    <div className="app">
      <div className="container">
        <TopBar
          onNavigate={setActiveScreen}
        />

        <div className="content">
          {activeScreen === Screen.Home && <h1>Home</h1>}
          {activeScreen === Screen.About && <h1>About</h1>}
          {activeScreen === Screen.iOS && <h1>iOS</h1>}
          {activeScreen === Screen.Android && <h1>Android</h1>}
          {activeScreen === Screen.React && <h1>React</h1>}
        </div>

        <BottomDock activeScreen={activeScreen} />
      </div>
    </div>
  )
}

export default App
