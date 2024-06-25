import './App.css'
import Toolbar from "./components/Toolbar/Toolbar";
import {Route, Routes} from "react-router-dom";
import AboutMe from "./containers/AboutMe/AboutMe";

const App = () => {
  return (
    <>
      <header>
        <Toolbar/>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<AboutMe/>}/>
        </Routes>
      </main>
    </>
  )
};

export default App
