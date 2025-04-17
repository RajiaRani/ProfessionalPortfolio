import "./Exp.css";
import { useEffect, useState } from "react";
import sd from "../../assets/Logo/sd.jpeg";

export default function President() {
    const [showMore, setShowMore] = useState(false);
 const details = [
        "Elevated club membership by 50% compared to the prior year by introducing agendas that focused on real-world applications of AI and coding workshops, equipped members with skills necessary for successful careers in the tech industry.",
        "Led and organized weekly interactive sessions on AI topics, including building Large Language Models (LLMs) and coding practical AI models from scratch.",
        "Collaborated with faculty advisors and leading industry experts to design a series of 10 engaging workshops, enhancing members understanding of AI research and career opportunities in advanced technology sectors.",
        "Developed and delivered technical lectures on AI concepts such as GPT models, transformers, and neural networks, fostering peer learning and hands-on coding experiences",
        "Implemented agile methodologies by utilizing Scrum to streamline project management of club activities and workshops, ensuring timely delivery and high engagement.",
    ];

    return (
        <>

                <div className="experience-card">
                    <div className="experience-header">
                        <div className="experience-meta">
                            <h3>Applied Artificial Intelligence Club (President)</h3>
                            <div className="flex">
                            <img src={sd}/>
                            <h4>University of South Dakota</h4>
                            </div>
                        </div>
                        <div className="experience-title">
                            <p className="location">University of South Dakota, Vermillion, SD, USA</p>
                            <p className="year">Aug 2024 - Dec 2024</p>
                        </div>
                    </div>
                    <ul>
                        {details.map((detail, idx) => (
                            <li key={idx}>{detail}</li>
                        ))}
                    </ul>
                  
    
            </div>
        </>
    )
}