import React from "react";
import Slider from "react-slick";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import "./Project.css";
import bitcoin from "../../assets/Project/bitcoin.jpg";
import wonderlust from "../../assets/Project/wonderlust.png";
import ai from "../../assets/Project/ai.jpeg";
import gpt from "../../assets/Project/gpt.png";
import rga from "../../assets/Project/rga.jpeg";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Custom Next Arrow Component
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div 
      className={className} 
      style={{ ...style, display: "block", right: "10px", zIndex: 2 }}
      onClick={onClick}
    >
      &#62;
    </div>
  );
};

// Custom Prev Arrow Component
const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div 
      className={className} 
      style={{ ...style, display: "block", left: "10px", zIndex: 2 }}
      onClick={onClick}
    >
      &#60;
    </div>
  );
};

const cardsData = [
    {
        id:"bitcoin",
        image: bitcoin,
        title: "Bitcoin Predict - Time Series Forecasting",
        description: "Built a deep learning model using TensorFlow for Bitcoin price prediction.",
        techStack: ["Python", "TensorFlow", "Pandas", "Matplotlib"],
        liveLink: "#",
        github: "#",
        page:"/project/bitcoin",
    },
    {
        id:"ai-powered",
        image: ai,
        title: "AI-Powered Real Estate Matching",
        description: "Implemented GPT-4 for auto-generating property descriptions with high accuracy.",
        techStack: ["Python", "PyTorch", "OpenAI", "LLMs", "Seaborn"],
        liveLink: "#",
        github: "#",
        page:"/project/ai",
    },
    {
        id:"gpt",
        image: gpt,
        title: "GPT From Scratch – Personal Assistant and Classifier ",
        description: "Implemented GPT-4 for auto-generating property descriptions with high accuracy.",
        techStack: ["Python", "PyTorch"],
        liveLink: "#",
        github: "#",
        page:"/project/gpt",
    },
    {
        id:"rga",
        image: rga,
        title: " RAG-Deepseek  ",
        description: "Implemented GPT-4 for auto-generating property descriptions with high accuracy.",
        techStack: ["Python", "PyTorch"],
        liveLink: "#",
        github: "#",
        page:"/project/rga",
    },
    {
        id:"wonderlust",
        image: wonderlust,
        title: "Wonderlust - Full Stack Travel Platform",
        description: "Developed a full-stack MERN travel booking system with real-time updates.",
        techStack: ["React", "Node.js", "MongoDB", "Express"],
        liveLink: "https://miniwonderlust-project.onrender.com/listings",
        github: "#",
       page:"/project/wonderlust",
    },


];

export default function Project() {
  // Updated slider settings with autoplay and custom arrows
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000, // slide changes every 3 seconds
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="sub-container">
      <div className="project-head">
        <h2>Projects</h2>
        <Link to="/projects">
          Learn more <HiOutlineArrowNarrowRight />
        </Link>
      </div>
      <hr />
      <Slider {...settings} className="project-slider">
        {cardsData.map((card, index) => (
          <div className="card-wrapper" key={index}>
            <div className="card">
              <div className="card-header">
                <img src={card.image} alt={card.title} />
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <div className="tech-stack">
                  {card.techStack.map((tech, idx) => (
                    <span key={idx}>{tech}</span>
                  ))}
                </div>
              </div>
              <div className="card-links">
                <a href={card.page} className="read-more">
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
