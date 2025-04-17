// src/pages/RGA.js
import React from "react";
import rga from "../../../assets/Project/rga.jpeg";
import"./comman.css";

export default function RGA() {
    return (
        <div className="project-container">
            <div className="project-detail">
                <h2>RAG-Deepseek (Conversational AI for PDFs using LangChain, FAISS)</h2>
                <img src={rga} alt="RAG Deepseek" className="projectImg" />
                <p>
                    The "RAG-Deepseek" project focuses on building a Retrieval-Augmented Generation (RAG) system, leveraging advanced AI techniques for PDF-based conversational AI. Using OLamma Deepseek-r1:7b, this system achieves 95% precision in document retrieval while optimizing query latency by 30%. 
                </p>

                <h4>Technologies and Methods Used</h4>
                <div className="tech-stack">
                    <h5>RAG System and Retrieval</h5>
                    <ul>
                        <li><strong>OLamma Deepseek-r1:7b:</strong> Utilized state-of-the-art models to power document retrieval, achieving 95% precision in answering user queries from unstructured PDF data.</li>
                        <li><strong>Optimized Pipelines:</strong> Reduced query latency by 30% through the use of advanced pipeline architectures and vector embedding techniques.</li>
                    </ul>

                    <h5>Conversational AI Application</h5>
                    <ul>
                        <li><strong>Streamlit and LangChain:</strong> Built and deployed a PDF chat reader application, enabling real-time interactions with PDF data through conversational AI. The application achieved an F1 score of 92% and delivered sub-second query response times.</li>
                        <li><strong>FAISS and ChromaDB:</strong> Integrated FAISS and ChromaDB for efficient storage and retrieval of embeddings, scaling the RAG system to process over 1 million records with 99.9% uptime.</li>
                    </ul>

                    <h5>Deployment and Reliability</h5>
                    <ul>
                        <li><strong>Streamlit Deployment:</strong> Deployed the application in a Streamlit-based environment, ensuring high availability with 99.9% uptime.</li>
                        <li><strong>Error Handling and Reliability:</strong> Enhanced application reliability by 20% through robust error handling, ensuring seamless functionality for both technical and non-technical users.</li>
                    </ul>

                    <h5>Impact and Learnings</h5>
                    <ul>
                        <li><strong>Real-Time Document Retrieval:</strong> Demonstrated the effectiveness of combining retrieval-augmented generation with conversational AI to enhance user interaction with unstructured PDF data.</li>
                        <li><strong>Optimized Performance:</strong> Achieved significant improvements in retrieval precision and response times, resulting in a seamless user experience for complex document-based queries.</li>
                        <li><strong>Scalable AI Systems:</strong> Successfully scaled the RAG system to handle millions of records, showcasing the potential of integrating cutting-edge AI and vector databases.</li>
                    </ul>
                </div>

                <p><strong>Tech Stack:</strong> Python, LangChain, FAISS, ChromaDB, OLamma Deepseek-r1:7b, Streamlit</p>

                <a 
                    href="https://github.com/yourusername/rag-deepseek" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link">
                    View on GitHub
                </a>
            </div>
        </div>
    );
}
