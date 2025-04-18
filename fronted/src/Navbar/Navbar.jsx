import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { MdDisabledByDefault } from "react-icons/md";
import "./Navbar.css";
export default function Navbar(){

    return(
        <>
      <header>
      <div className="main-navbar-container">
            <div className="navbar">
              <div className="left-side">
                <p><Link to="/">Chenchiah Mekalathuru</Link></p>
              </div>
              <div className="middle-side">
              <ul className="nav-menu">
                <li className="nav-item">
                  <Link to="/about" className="nav-link">About</Link>
                  </li>
                <li className="nav-item">
                  <Link to="/projects" className="nav-link">Projects</Link> 
                  </li>
                <li className="nav-item">
                  <Link to="/skills" className="nav-link">Skills</Link>
                  </li>
                <li className="nav-item">
                  <Link to="/education" className="nav-link">Academic</Link>
                  </li>
                <li className="nav-item">
                  <Link to="/experience" className="nav-link">Experience</Link>
                  </li>
                <li className="nav-item">
                  <Link to="/certificates" className="nav-link">Certificates</Link>
                  </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link">Contact</Link>
                  </li>
                <li className="nav-item">
                  <Link to="/resume" className="nav-link">Resume</Link>
                  </li>
              </ul>
              <div className="icon">
              <FaBars />
              </div>
              <div className="close">
              <MdDisabledByDefault />
              </div>
              </div>
            
              <div className="right-side">
               <a href="https://www.linkedin.com/in/iamchenchu/"  target="_blank" rel="noopener noreferrer"><FaLinkedin/></a> 
               <a href="https://github.com/iamchenchu"  target="_blank" rel="noopener noreferrer">  <FaGithub/></a>
              <a href="https://medium.com/@chenchaiah.mekalathuru"  target="_blank" rel="noopener noreferrer"><FaMedium/></a>  
              </div>
            </div>
        </div>
      </header>
        </>
    )

}