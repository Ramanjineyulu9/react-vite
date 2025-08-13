import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "Business Sales Dashboard",
    image: "/images/project1.jpg",
    description: "An interactive sales analytics dashboard for tracking KPIs."
  },
  {
    title: "Restaurant Website",
    image: "/images/project2.jpg",
    description: "A modern responsive restaurant website with online ordering."
  },
  {
    title: "AI Chatbots",
    image: "/images/project3.jpg",
    description: "Intelligent conversational AI chatbots for customer support."
  },
  {
    title: "Data Science Projects",
    image: "/images/project4.jpg",
    description: "Predictive analytics and machine learning solutions."
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        Our <span className="text-primary">Projects</span>
      </h1>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div className="flip-card" key={index}>
            <div className="flip-card-inner">
              
              {/* FRONT SIDE — Description */}
              <div className="flip-card-front">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>

              {/* BACK SIDE — Image */}
              <div className="flip-card-back">
                <img src={project.image} alt={project.title} />
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
