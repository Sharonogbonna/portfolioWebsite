import logo from './logo.svg';
import './style.css'
import './App.css';
import projectArr from './projects'
import Project from './components/Project';
import Headshot from './components/Headshot';
import AboutMe from './components/AboutMe';
import Nav from './components/Nav';

const projects = projectArr.map((ele, index) =>{
  return <Project
   {...ele}
   key = {index}
   />
})
function App() {
  return (
    <div className="App">
      <Nav/>
     
      <section className='about-me'>
      <div><Headshot/></div>
      <div><AboutMe/></div>
      </section>
      <h3>My projects</h3>
      <section className='projects'>
        {projects}
      </section><a id='projects'></a>
    </div>
  );
}

export default App;
