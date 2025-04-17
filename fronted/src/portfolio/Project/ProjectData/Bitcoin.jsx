// src/pages/BitcoinPredict.js
import React from "react";
import"./comman.css";
import bitcoinImage from "../../../assets/Project/bitcoin.jpg";

export default function BitcoinPredict() {
    return (
        <div className="project-container">
            <div className="project-detail">
                <h2>Bitcoin Predict - Time Series Forecasting</h2>
                <img src={bitcoinImage} alt="Bitcoin Predict" className="projectImg" />
                
                <p>
                    Built a deep learning model using TensorFlow for predicting Bitcoin prices, leveraging time series forecasting techniques. The model processes historical price data to predict future trends, providing users with insights into potential Bitcoin price movements.
                </p>

                <h4>Approach and Methodology</h4>
                <div className=" ">
                    <ul>
                        <li><strong>Data Processing:</strong> Utilized Pandas for data manipulation and cleaning, ensuring accurate training data from historical Bitcoin price datasets.</li>
                        <li><strong>Model Architecture:</strong> Developed a sequential neural network using TensorFlow, implementing LSTM (Long Short-Term Memory) layers to capture sequential dependencies in the time series data.</li>
                        <li><strong>Visualization:</strong> Used Matplotlib for visualizing price predictions and comparing them against historical data, helping users assess model performance visually.</li>
                    </ul>
                </div>

                <h4>Key Achievements</h4>
                <ul>
                    <li><strong>Prediction Accuracy:</strong> Achieved an impressive prediction accuracy with reduced Mean Squared Error (MSE) over various time windows, offering reliable Bitcoin price forecasting.</li>
                    <li><strong>Real-time Insights:</strong> Provided real-time predictions and insights into future Bitcoin price trends, enabling better decision-making for investors.</li>
                </ul>

                <p><strong>Tech Stack:</strong> Python, TensorFlow, Pandas, Matplotlib, LSTM</p>

                <a 
                    href="https://github.com/yourusername/bitcoin-predict" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link">
                    View on GitHub
                </a>
            </div>
        </div>
    );
}
