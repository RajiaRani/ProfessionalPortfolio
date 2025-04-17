import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import "./Footer.css";

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <>
            <div className="footer-main-container">
                <div className="footer">
                    <div className="footer-left-side">
                        <p> &copy; {year} C.Mekalathuru</p>
                    </div>
                    <div className="footer-middle-side">
                        <ul>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </div>


                    <div className="footer-right-side">
                        <a href="https://www.linkedin.com/in/iamchenchu/"  target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                        <a href="https://github.com/iamchenchu"  target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                        <a href="https://medium.com/@chenchaiah.mekalathuru"  target="_blank" rel="noopener noreferrer"><FaMedium /></a>
                    </div>
                </div>

            </div>
        </>
    )
}