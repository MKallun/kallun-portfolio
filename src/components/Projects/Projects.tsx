import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

import image1 from "../../assets/images/RBX-icon.png";
import image2 from "../../assets/images/Sino-icon.jpg";
import image3 from "../../assets/images/SinoPY-icon.png";
import image4 from "../../assets/images/BON.jpg";

interface Project {
  id: number;
  name: string;
  description: string;
  role: string;
  technologies: string[];
  icon: string;
  link: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      name: "Rice in a Block",
      description:
        "A blockchain web application for real-time tracking of rice supplies across regions in the Philippines. Implemented supply chain tracking with blockchain for transparency and security.",
      role: "Lead Developer",
      technologies: ["Python", "Plotly", "Dash", "Web3", "Pandas", "Solidity"],
      icon: image1,
      link: "",
    },
    {
      id: 2,
      name: "MassDestruction Guild Site",
      description:
        "Website made for fun using python for my guildmates in a mobile game called Sinoalice.",
      role: "Lead Developer",
      technologies: ["Python"],
      icon: image2,
      link: "https://mkallun.github.io/",
    },
    {
      id: 3,
      name: "MassDestruction Guild Site (Legacy)",
      description:
        "The legacy website made for fun using python for my guildmates in a mobile game called Sinoalice.",
      role: "Lead Developer",
      technologies: ["HTML", "CSS", "JavaScript"],
      icon: image3,
      link: "https://mkallun.github.io/legacy",
    },
    {
      id: 4,
      name: "Beast of Norwind",
      description:
        "A cross-platform online trading card game (TCG/CCG). Initially developed using Game Maker Studio, then transitioned to web technologies for broader accessibility.",
      role: "Lead Developer",
      technologies: ["Game Maker Studio", "HTML", "CSS", "JavaScript"],
      icon: image4,
      link: "",
    },
  ];

  return (
    <section id="projects" className="py-5">
      <Container>
        <div className="text-center mb-5">
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-divider mx-auto"></div>
          <p className="section-subtitle">
            Showcasing my best work and technical implementations
          </p>
        </div>

        <Row>
          {projects.map((project) => (
            <Col md={6} key={project.id} className="mb-4">
              <Card className="project-card h-100 d-flex flex-row align-items-start ">
                <Card.Img
                  variant="top"
                  src={project.icon}
                  className="w-25 h-auto m-auto"
                />
                <Card.Body className="flex-grow-1">
                  <Card.Title>{project.name}</Card.Title>
                  {project.link !== "" && (
                    <Card.Subtitle className="mb-2 text-muted">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Link
                      </a>
                    </Card.Subtitle>
                  )}
                  <Card.Subtitle className="mb-2 text-muted">
                    {project.role}
                  </Card.Subtitle>
                  <Card.Text>{project.description}</Card.Text>
                  <div className="mt-3">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="project-tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
