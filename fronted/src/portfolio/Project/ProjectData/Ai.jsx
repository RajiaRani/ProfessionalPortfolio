// src/pages/Ai.js
import React from "react";
import ai from "../../../assets/Project/ai.jpeg";
import"./comman.css";
export default function Ai() {
    return (
        <div className="project-container">
            <div className="project-detail">
                <h2>AI-Powered Real Estate Matching Application</h2>
                <img src={ai} alt="AI-Powered Real Estate Matching" className="projectImg" />
                <p>
                    The "AI-Powered Real Estate Matching Application" leverages cutting-edge artificial intelligence to revolutionize the real estate experience. By integrating advanced machine learning models like GPT-4, this system automates the generation of property listings and descriptions, offering a personalized experience for each user.
                </p>

                <h4>Technologies and Methods Used</h4>
                <div className="tech-stack">
                    <h5>AI and Natural Language Processing (NLP)</h5>
                    <ul>
                        <li><strong>GPT-4:</strong> Used for automatic generation of property listings and descriptions, reducing turnaround time to under 15 seconds per listing.</li>
                        <li><strong>ChromaDB:</strong> Integrated as the vector database to efficiently store and retrieve property embeddings, enabling high-speed semantic search.</li>
                        <li><strong>NLP-based Preference Parser:</strong> Developed a system to convert user input into structured queries for precise matching of buyer requirements to property listings.</li>
                    </ul>

                    <h5>Tech Stack</h5>
                    <ul>
                        <li><strong>Python:</strong> Utilized for backend development, data processing, and model implementation.</li>
                        <li><strong>PyTorch:</strong> Employed for training and fine-tuning machine learning models to enhance property matching accuracy.</li>
                        <li><strong>Seaborn:</strong> Used for data visualization, helping to interpret trends and performance metrics of the model.</li>
                        <li><strong>OpenAI LLMs:</strong> Leveraged large language models (LLMs) to provide personalized, dynamic content generation for each user based on their preferences.</li>
                    </ul>

                    <h5>Key Features</h5>
                    <ul>
                        <li><strong>Personalized Property Descriptions:</strong> Dynamically adjusts property descriptions based on buyer preferences, enhancing user engagement.</li>
                        <li><strong>Real-Time Property Matching:</strong> Uses natural language understanding (NLU) to match users’ requirements with listings in real-time, improving the accuracy of recommendations.</li>
                        <li><strong>Fast and Efficient Search:</strong> By utilizing vector-based querying and semantic search, the system provides users with quick and accurate results based on their preferences.</li>
                    </ul>

                    <h5>Development Methodology</h5>
                    <ul>
                        <li><strong>DevOps:</strong> Implemented DevOps practices to streamline the deployment process, ensuring smooth integration of new features and updates.</li>
                    </ul>

                    <h5>Impact and Learnings</h5>
                    <ul>
                        <li><strong>Enhanced User Satisfaction:</strong> The use of LLM-driven personalization has led to increased user satisfaction by delivering tailored property suggestions and content.</li>
                        <li><strong>Contextual Augmentation:</strong> Demonstrated the power of context-driven AI to improve user experience through dynamically generated, user-centric content.</li>
                        <li><strong>Advanced Search Capabilities:</strong> Improved the property search experience by using NLP and semantic search to match listings with user needs more effectively.</li>
                    </ul>
                </div>

                <p><strong>Tech Stack:</strong> Python, PyTorch, Seaborn, OpenAI GPT-4, ChromaDB</p>

                <a 
                    href="https://github.com/yourusername/ai-real-estate-matching" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link">
                    View on GitHub
                </a>
            </div>
        </div>
    );
}
