import Project from "../Project/project";
import "./skill.css";

const skillsData = {
    "Deep Learning": [
        "CNNs", "RNNs", "LSTMs", "VANs", "GANs", "MLPs", "Autoencoders", 
        "Deep Q-Networks", "DDPG", "Transformers", "Federated Learning", 
        "Fine Tuning", "Image Captioning"
    ],
    "NLP": [
        "Text Preprocessing", "Text Classification", "NER", "Text Summarization", 
        "NLTK/SpaCy", "Language Modeling (Seq2Seq, Transformers)", "Word2Vec", 
        "Hugging Face", "Python NLTK", "SpaCy", "Bag of Words"
    ],
    "Tools & Libraries": [
        "PyTorch", "Keras", "TensorFlow", "Scikit-learn", "OpenCV", 
        "Databases (MySQL/MongoDB)", "BI (PowerBI/Tableau)", "Flask", "Django", 
        "AWS", "Microsoft Azure", "Docker", "Kubernetes", "REST APIs", "Google Cloud Platform (GCP)", 
        "Hugging Face", "Hadoop", "Apache Kafka", "Databricks", "Command Line", 
        "Apache Spark", "Ollama", "LlamaIndex", "LangChain", "LangGraph", "LangSmith", 
        "LangFlow", "Snowflake", "Streamlit", "gRPC", "MongoDB", "DynamoDB", "FastAPI", 
        "Airflow", "Terraform", "Kubeflow", "ETL", "BigQuery"
    ],
    "Programming Languages": [
        "Python", "Java", "R", "C/C++", "JavaScript", "CUDA", "Julia", "Rust", 
        "XML", "Go", "Scala", "HTML/CSS", "React", "AngularJS", "Node.js"
    ],
    "Machine Learning": [
        "Dimensionality Reduction Algorithms", "Matplotlib", "Seaborn", 
        "Logistic Regression", "Decision Trees", "Random Forest", "SVM", 
        "Pandas", "K-Nearest Neighbors (KNN)", "Naive Bayes", "K-Means Clustering", 
        "Gradient Boosting", "AdaBoosting", "NumPy", "RL", "GPU", "Active Learning"
    ]
};

export default function SkillCard() {
    return (
        <>

            <div className="skills-container">
                <h2>💡 My Technical Skills</h2>
                <hr />
                <table className="skills-table">
                    <tbody>
                        {Object.entries(skillsData).map(([category, skills], index) => (
                            <tr key={index}>
                                <td className="category">{category}</td>
                                <td className="skills-list">{skills.join(", ")}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        
        </>
    );
}
