import "./Exp.css";
import { useEffect, useState } from "react";
import by from "../../assets/Logo/by.jpeg";

export default function ML() {
    const [showMore, setShowMore] = useState(false);
 const details = [
    "Engineered deep learning models using TensorFlow and PyTorch, achieving a 15% improvement in accuracy on education-related datasets. These models were optimized using a combination of Convolutional Neural Networks (CNNs) and Recurrent Neural Networks (RNNs) to better capture both spatial and temporal patterns in student engagement and learning behavior.",
    " Designed and maintained real-time data pipelines leveraging Apache Spark and Kafka, enabling ingestion and processing of millions of events daily. This architecture led to a 30% reduction in data processing latency, significantly improving the speed of downstream analytics and model responsiveness in production environments.",
    " Deployed trained ML models into production using Flask-based REST APIs, containerized with Docker, and orchestrated via Kubernetes. These deployments ensured a 95% success rate, supporting fault-tolerant, scalable, and secure delivery of ML services for real-time user interactions."
  ];

    return (
        <>

                <div className="experience-card">
                    <div className="experience-header">
                        <div className="experience-meta">
                            <h3>Machine Learning Engineer</h3>
                           <div className="flex">
                           <img src={by} />
                           <h4> Byju's</h4>
                           </div>
                        </div>
                        <div className="experience-title">
                            <p className="location">Hyderabad, Telangana, India</p>
                            <p className="year">Nov 2019 - Jun 2021</p>
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