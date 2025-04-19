import "./Exp.css";
import { useEffect, useState } from "react";
import by from "../../assets/Logo/by.jpeg";

export default function Byjus() {
    const [showMore, setShowMore] = useState(false);
 const details = [
    "Developed BYJU's Q&A search system using neural search techniques by fine-tuning a pre-trained BERT model on an in-house Q/A dataset with contrastive loss for similarity, building an ML pipeline with ElasticSearch and Annoy Indexes, and exposing Flask APIs for similar questions, achieving an SSR of 80% with 2 million monthly hits and boosting revenue generation to $600k/month in sales leads.",
    "Trending Content: built universal recommendations using a statistical model, Used chi-square to detect trends in chapters and subtopics using 10M interaction of data and deployed on production for all Byju's users..",
    "Elevated AI capabilities for educational applications to 13% accuracy on GSM8k datasets, meeting business objectives by fine-tuning LLaMA and Falcon LLMs.",
    "Scalability and Agile Development: Managed product feature launches that resulted in a 40% revenue increase within three months,reflecting your skills in scaling solutions critical in AI system deployment and scaling AI/ML pipelines.",
    "Built a cGAN-based model for watermark removal from solution images, aiding Byjus dB data ingestion. Utilized OpenCV, U-Net with pre-trained ResNet-101, PatchCNN.",
    "Enhanced classroom engagement tracking by accomplishing a mAP50-95 score of 0.922 as measured by real-time monitoring accuracy in classrooms by fine-tuning YOLOv5 models on annotated data to detect upper body objects effectively.",
    "Developed revenue forecasting models using ARIMA, Prophet, and LSTM, leveraging regional appointment and demo data to predict trends and drive strategic decisions as part of risk management.",
  ];

    return (
        <>

                <div className="experience-card">
                    <div className="experience-header">
                        <div className="experience-meta">
                            <h3>Senior Machine Learning Engineer</h3>
                           <div className="flex">
                           <img src={by} />
                           <h4> Byju's</h4>
                           </div>
                        </div>
                        <div className="experience-title">
                            <p className="location">Hyderabad, Telangana, India</p>
                            <p className="year">Jul 2021 - Jun 2023</p>
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