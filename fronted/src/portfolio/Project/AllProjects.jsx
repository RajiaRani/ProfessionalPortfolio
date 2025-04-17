import React from "react";
import "./project.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";



// Import Project Images
import bitcoin from "../../assets/Project/bitcoin.jpg";
import wonderlust from "../../assets/Project/wonderlust.png";
import ai from "../../assets/Project/ai.jpeg";
import gpt from "../../assets/Project/gpt.png";
import rga from "../../assets/Project/rga.jpeg";
import { Link } from "react-router-dom";

const projectsData = [
    {
        id:"bitcoin",
        image: bitcoin,
        title: "Bitcoin Predict - Time Series Forecasting",
        description: "Built a deep learning model using TensorFlow for Bitcoin price prediction.",
        techStack: ["Python", "TensorFlow", "Pandas", "Matplotlib"],
        liveLink: "#",
        github: "#",
        page:"/project/bitcoin",
    },
    {
        id:"ai-powered",
        image: ai,
        title: "AI-Powered Real Estate Matching",
        description: "Implemented GPT-4 for auto-generating property descriptions with high accuracy.",
        techStack: ["Python", "PyTorch", "OpenAI", "LLMs", "Seaborn"],
        liveLink: "#",
        github: "#",
        page:"/project/ai",
    },
    {
        id:"gpt",
        image: gpt,
        title: "GPT From Scratch – Personal Assistant and Classifier ",
        description: "Implemented GPT-4 for auto-generating property descriptions with high accuracy.",
        techStack: ["Python", "PyTorch"],
        liveLink: "#",
        github: "#",
        page:"/project/gpt",
    },
    {
        id:"rga",
        image: rga,
        title: " RAG-Deepseek  ",
        description: "Implemented GPT-4 for auto-generating property descriptions with high accuracy.",
        techStack: ["Python", "PyTorch"],
        liveLink: "#",
        github: "#",
        page:"/project/rga",
    },
    {
        id:"wonderlust",
        image: wonderlust,
        title: "Wonderlust - Full Stack Travel Platform",
        description: "Developed a full-stack MERN travel booking system with real-time updates.",
        techStack: ["React", "Node.js", "MongoDB", "Express"],
        liveLink: "https://miniwonderlust-project.onrender.com/listings",
        github: "#",
       page:"/project/wonderlust",
    },


];

export default function Projects() {
    return (
        <div className="project-container">
            <h2>🚀 My Projects</h2>
            <div className="projects-list">
                {projectsData.map((project, index) => (
                    <div key={index} className="project-item">
                        <img src={project.image} alt={project.title} className="project-image" />

                        <div className="project-details">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>

                            <div className="tech-stack">
                                {project.techStack.map((tech, idx) => (
                                    <span key={idx} className="tech-badge">{tech}</span>
                                ))}
                            </div>

                            {/* <div className="project-links">
                                <a href={project.github} target="_blank" rel="noopener noreferrer">
                                    <FaGithub /> GitHub
                                </a>
                            </div> */}
                            <Link to={project.page}  className="project-link">See Details</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
