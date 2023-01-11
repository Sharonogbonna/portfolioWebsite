import { Route, Routes } from "react-router-dom"
//css
import './style.css'
// import './colorPalette.css'
//components
import Nav from './components/Nav';
//pages
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="App w3-theme-l4">
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
      </Routes>
    </div>
  );
}

export default App;
