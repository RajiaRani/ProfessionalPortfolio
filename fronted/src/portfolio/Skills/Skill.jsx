import Project from "../Project/project";
import "./skill.css";
import SkillCard from "./SkillCard";


export default function Skills() {
    return (
        <>
        <div className="main-container">
             <SkillCard/>
            <br />
            <h3>My Projects using the above skills</h3>
            <Project />
        </div>
        </>
    );
}
