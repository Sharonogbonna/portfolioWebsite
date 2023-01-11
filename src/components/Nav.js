import { Link } from "react-router-dom"
export default function Nav(){
    return(
        <div className="nav-bar">
                <Link to='/'>
                    <div>Home</div>
                </Link>
                <Link to='/projects'>
                    <div>Projects</div>
                </Link>
                <a href="../Ogbonna_Sharon_Resume_Jan23.pdf" target="_blank">Resume</a>
                <a href="https://www.linkedin.com/in/sharogbo/" target="_blank"><img src="../linkedin-icon.png" alt="linkedin icon" height="20" width="20"></img></a>
                <a href="https://github.com/Sharonogbonna" target="_blank"><img src="../githubIcon.png" alt="github icon" height="20" width="20"></img></a>
        </div>
    )
}