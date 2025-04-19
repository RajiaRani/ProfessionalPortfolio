
import "./Education.css";
import lpu from "../../assets/Logo/lpu.jpeg";
import sd from "../../assets/Logo/sd.jpeg";


const educationData = [
    {
        degree: "Master of Science in Computer Science (AI Specialization)",
        university: "University of South Dakota, Vermillion, SD",
        duration: "Aug 2023 – Dec 2024",
        logo:sd,
        gpa: "4.0",
        skills: [
            "Artificial Intelligence & Machine Learning: Generative AI, NLP, Data Processing, Data Modeling",
            "Big Data & Analytics: Data Structures, Algorithms, Databases, Web Scraping, Data Analytics",
            "Mathematical Foundations: Probability & Statistics, Linear Algebra, Calculus, Applied Mathematics",
            "Software Development: Agile, SDLC, Object-Oriented Programming (OOP)",
        ],
    },
    {
        degree: "Bachelor of Science in Computer Science",
        university: "Lovely Professional University, Punjab, India",
        duration: "Aug 2015 – May 2019",
        logo:lpu,
        gpa: "3.5",
        skills: [
            "Programming & Development: Java, C++, Python, R, C, Web Development, Android Development",
            "Software Engineering: SDLC, Agile, Flask, Express.js, Django",
            "Databases: SQL, NoSQL, Database Management",
            "Computer Science Fundamentals: Data Structures & Algorithms (DSA), Object-Oriented Programming (OOP)",
            "Frameworks & Tools: React.js, Node.js, JUnit for Python, REST APIs",
        ],
    },
];

export default function EducationCard() {
    

    return (
        <div className="sub-container">
                 <div className="my-edu">
                    <h1>🎓 Academic</h1>
                     <hr />
                    {educationData.map((edu, index) => (
                        <div key={index} className="education-card">
                            <h2>{edu.degree}</h2>
                            <div className="flex">
                                <img src={edu.logo} />
                                <strong>{edu.university}</strong>
                            </div>
                            <p>{edu.duration}</p>
                            <p>
                                <strong>GPA:</strong> {edu.gpa}
                            </p>
                            <h4>Relevant Coursework & Skills:</h4>
                            <ul>
                                {edu.skills.map((skill, i) => (
                                    <li key={i}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                    ))}



                </div>
        </div>
    );
}
