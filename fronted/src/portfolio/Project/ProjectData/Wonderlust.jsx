// src/pages/BitcoinPredict.js
import React from "react";
import wonderlust from "../../../assets/Project/wonderlust.png";
import"./comman.css";
import Project from "../project";

export default function Wonderlust() {
    return (
        <div className="project-container">
            <div className="project-detail">
                <h2>Wonderlust - Full Stack</h2>
                <p className="inline-image-text">
                 The "Bitcoin Predict" project is a deep learning-based application aimed at forecasting Bitcoin prices using time series data. It showcases my journey into data science, where I applied machine learning models to analyze historical data and predict future price trends.
                </p>
                <img src={wonderlust} alt="wonderlust-image" className="projectImg"  />
                <h3>Technologies and Methods Used</h3>
                <div className="">
                    <h4>Frontend Development</h4>
                    <ul>
                        <li>HTML: Used for structuring the content of the website.</li>
                        <li>CSS: Styled the user interface to create an engaging visual experience.</li>
                        <li>JavaScript: Implemented interactivity and dynamic behavior within the application.</li>
                    </ul>

                    <h4>Backend Development</h4>
                    <ul>
                        <li>Node.js: Developed the server-side functionality and API routes.</li>
                        <li>Express: Managed server-side logic and routing for seamless communication between the frontend and backend.</li>
                    </ul>

                    

                    <h4>Database</h4>
                    <ul>
                        <li>MongoDB: Managed and stored large datasets, including historical Bitcoin price data.</li>
                    </ul>

                    <h4>APIs</h4>
                    <ul>
                        <li>Integrated various external APIs to fetch real-time data for the model's predictions.</li>
                    </ul>

                    <h4>Key Features</h4>
                    <ul>
                        <li>User Authentication: Secure user sign-up, login, and logout functionality.</li>
                        <li>Price Forecasting: Predicted Bitcoin prices based on historical trends using deep learning models.</li>
                        <li>Real-Time Data Integration: Fetch live Bitcoin data for real-time price updates.</li>
                    </ul>

                    <h4>Development Methodology</h4>
                    <ul>
                        <li>MVC Architecture: Followed the Model-View-Controller pattern for scalable and maintainable code.</li>
                        <li>Responsive Design: Ensured a seamless user experience across devices, including desktops, tablets, and mobile phones.</li>
                        <li>RESTful APIs: Designed and developed RESTful endpoints to interact with the backend.</li>
                        <li>Error Handling: Implemented comprehensive error handling for robust, error-free functionality.</li>
                    </ul>

                    <h4>Skills and Learnings Acquired</h4>
                    <ul>
                        <li>Deep Learning: Gained practical experience in time series forecasting using deep learning techniques.</li>
                        <li>Machine Learning Models: Developed and fine-tuned models for accuracy and precision in price predictions.</li>
                        <li>Full Stack Development: Enhanced my skills in both frontend and backend development, with a focus on data-driven applications.</li>
                        <li>Data Handling: Improved my proficiency in data wrangling, cleaning, and analysis with Python libraries like Pandas and Matplotlib.</li>
                    </ul>
                </div>

                <p><strong>Tech Stack:</strong> Python, TensorFlow, Pandas, Matplotlib, Node.js, Express, MongoDB</p>

                <a 
                    href="https://github.com/yourusername/bitcoin-predict" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link">
                    View on GitHub
                </a>
            </div>
            <Project/>
        </div>
    );
}
