import "./Exp.css";
import { useEffect, useState } from "react";
import sd from "../../assets/Logo/sd.jpeg";

export default function President() {
    const [showMore, setShowMore] = useState(false);
 const details = [
    "Worked on Liquid Neural Networks, gained knowledge on multiple research papers (CTRNN, Neural ODE, NPCs) to build models on LNN, also on state-of-the-art architectures in LLM's, NLP, Transformers, Fraud Detection, Generative Al which is resulting in an 80% accuracy in model performance at least.",
    "Contributed to two projects involving Liquid Neural Networks, focusing on building, training, and evaluating models while working on diverse tasks related to mathematical software development. Developed a model for detecting cancer in images of various organs across different modalities, achieving superior results with limited resources. Authored a research paper based on this work and submitted it to CVPR 2025, currently awaiting the review outcome.",
    "Enhanced understanding of machine learning and AI concepts among 10+ undergraduate students by guiding them in resolving their doubts and queries, while efficiently managing lab operations using R for practical demonstrations.",
    "Achieved high user satisfaction by using LLM-driven personalisation, dynamically adjusting property descriptions based on buyer preferences. This demonstrated the impact of contextual augmentation and improved the overall user experience through personalised content generation.",
  ];

    return (
        <>
     
                <div className="experience-card">
                    <div className="experience-header">
                        <div className="experience-meta">
                            <h3>Research Assistant</h3>
                            <div className="flex">
                            <img src={sd}/>
                            <h4>University of South Dakota</h4>
                            </div>
                        </div>
                        <div className="experience-title">
                            <p className="location">University of South Dakota, Vermillion, SD, USA</p>
                            <p className="year">Aug 2023 - Dec 2024</p>
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