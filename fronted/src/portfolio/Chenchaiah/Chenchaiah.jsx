
import "./Chenchaiah.css";
import chenchu from "../../assets/chenchu2.png";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Project from "../Project/project.jsx";
import Skill from "../Skills/Skill.jsx"
import { FaCheckCircle } from "react-icons/fa";


import { Link } from "react-router-dom";
import Education from "../Education/Education.jsx";
import EducationCard from "../Education/EducationCard.jsx";
import SkillCard from "../Skills/SkillCard.jsx";


const skillsData = {
    "Deep Learning": ["CNNs", "RNNs", "LSTMs", "GANs", "MLPs", "Autoencoders", "Deep Q-Networks", "DDPG", "Transformers"],
    "NLP": ["Text Preprocessing", "Text Classification", "NER", "Text Summarization", "Seq2Seq", "Transformers", "Word2Vec", "SpaCy", "NLTK"],
    "Tools & Libraries": ["PyTorch", "Keras", "TensorFlow", "NumPy", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn", "OpenCV", "Flask", "Django", "AWS", "Docker", "Kubernetes"],
    "Programming Languages": ["Python", "Java", "C++", "Cuda", "Go", "Julia", "Scala", "Rust", "JavaScript", "R"],
    "Machine Learning": ["Dimensionality Reduction", "Logistic Regression", "Decision Trees", "Random Forest", "SVM", "Hadoop", "Apache Kafka", "Databricks"],
};


export default function Chenchaiah() {



    return (
        <>

            <div className="me-container">

                <div className="my-bg-image">
                    <div className="me-para" >

                        <p> I am a passionate AI/ML Engineer with expertise in
                            <br /><FaCheckCircle style={{ color: "green", fontSize: "24px" }} /> Deep Learning (DL),
                            <br /> <FaCheckCircle style={{ color: "green", fontSize: "24px" }} /> Machine Learning(ML),
                            <br /> <FaCheckCircle style={{ color: "green", fontSize: "24px" }} /> Natural Language Processing (NLP),
                            <br /><FaCheckCircle style={{ color: "green", fontSize: "24px" }} /> Large Language Models (LLMs),
                            <br /> <FaCheckCircle style={{ color: "green", fontSize: "24px" }} />  Generative AI.
                        </p>
                    </div>
                </div>

            </div>

            <div className="about-main-container">
                <div className="intro">
                    <h1>About Me</h1>
                    <hr />
                    <p>
                        Hi, I am Chenchaiah Mekalathuru. <br />
                        I am a passionate AI/ML Engineer with expertise in Deep Learning, Natural Language Processing (NLP),  Large Language Models (LLMs),Generative AI.
                        My work revolves around building intelligent AI systems, leveraging Transformers and advanced data processing techniques to create impactful solutions.<br />
                        With a strong foundation in Artificial Intelligence and Data Science, I love transforming complex data into actionable insights and innovative applications.
                    </p> <br />
                    <ul className="about-my-skills">
                        <li>🛠 Hands-on Experience in Deep Learning, NLP, LLMs, and Generative AI.</li>
                        <li>🎓 Academic Background in AI/ML with coursework and projects.</li>
                        <li>📁 Projects Portfolio showcasing work in NLP, Computer Vision, and LLMs.</li>
                    </ul>
                    <br />
                    <ul>
                        <p>Check out <a href="/resume">my CV</a> and other pages:</p>
                        <li></li>
                    </ul>
                    <p>Contact Me:</p>
                    <p><a href="mailto:mekalathuru.chenchaiah@gmail.com">mekalathuru.chenchaiah@gmail.com</a></p>

                    <Link to="/about">Learn more <HiOutlineArrowNarrowRight /> </Link> <br />
                </div>

                <SkillCard />
                <EducationCard />
                <Project />
            </div>


        </>
    )
}