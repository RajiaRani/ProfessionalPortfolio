// src/pages/Chatgpt.js
import React from "react";
import gpt from "../../../assets/Project/gpt.png";
import"./comman.css";

export default function Chatgpt() {
    return (
        <div className="project-container">
            <div className="project-detail">
                <h2>GPT From Scratch – Personal Assistant and Classifier</h2>
                <img src={gpt} alt="GPT From Scratch" className="projectImg" />
                <p>
                    The "GPT From Scratch – Personal Assistant and Classifier" project focuses on developing an advanced GPT-based model from the ground up. With 124 million parameters, this custom-built model integrates key elements like Transformer decoder blocks and multi-head self-attention layers, offering robust performance for classification and instruction-based tasks.
                </p>

                <h4>Technologies and Methods Used</h4>
                <div className="tech-stack">
                    <h5>Model Architecture and Design</h5>
                    <ul>
                        <li><strong>GPT Model (124 million parameters):</strong> Built entirely from scratch without relying on pre-defined code blocks, utilizing 12 Transformer decoder blocks and 24 multi-head self-attention (MHA) layers per block.</li>
                        <li><strong>Pre-trained GPT-2 Weights:</strong> Integrated GPT-2's pre-trained weights to enhance model performance and fine-tune it for specific tasks.</li>
                        <li><strong>Fine-tuning for Classification:</strong> The model was fine-tuned for tasks such as email classification and active-passive sentence transformation, improving accuracy with domain-specific datasets.</li>
                    </ul>

                    <h5>Tokenization and Data Processing</h5>
                    <ul>
                        <li><strong>Bit Pair Encoding (BPE):</strong> Developed an efficient tokenization pipeline using BPE to preprocess raw text into numerical representations, optimizing the model for Transformer-based architectures.</li>
                    </ul>

                    <h5>Key Features</h5>
                    <ul>
                        <li><strong>End-to-End Model Development:</strong> From scratch model creation using Python and PyTorch, allowing complete control over the architecture and fine-tuning process.</li>
                        <li><strong>Scalable and Efficient:</strong> Employed advanced techniques like multi-head self-attention (MHA) and layer normalization to optimize the training process, leading to improved computational efficiency.</li>
                        <li><strong>Wide Range of Applications:</strong> Adapted for various classification tasks, including text classification and language transformations, enhancing the model’s flexibility and real-world utility.</li>
                    </ul>

                    <h5>Development Methodology</h5>
                    <ul>
                        <li><strong>Data Preprocessing:</strong> Employed rigorous preprocessing techniques to ensure high-quality input data for training, increasing the model’s performance on task-specific datasets.</li>
                    </ul>

                    <h5>Impact and Learnings</h5>
                    <ul>
                        <li><strong>Model Performance:</strong> Achieved high task accuracy for classification tasks through meticulous fine-tuning and custom dataset integration.</li>
                        <li><strong>Practical Applications:</strong> Demonstrated the effectiveness of building large-scale, specialized models from scratch, showcasing the power of a tailored approach to NLP tasks.</li>
                        <li><strong>Advanced NLP Techniques:</strong> Gained hands-on experience in applying state-of-the-art NLP methods to real-world problems, significantly improving model output and efficiency.</li>
                    </ul>
                </div>

                <p><strong>Tech Stack:</strong> Python, PyTorch, Transformer Models, Bit Pair Encoding (BPE)</p>

                <a 
                    href="https://github.com/yourusername/gpt-from-scratch" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link">
                    View on GitHub
                </a>
            </div>
        </div>
    );
}
