import Project from "../Project/project";
import "./skill.css";
import SkillCard from "./SkillCard";


export default function Skills() {
    return (
        <>
        <div className="main-container">
             <SkillCard/>
            <br />
            <h2>My Projects using the above skills</h2>
            <Project />
        </div>
        </>
    );
}
