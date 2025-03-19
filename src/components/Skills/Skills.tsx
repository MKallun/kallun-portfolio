import React from "react";
import { Container, Row, Col } from "react-bootstrap";

interface SkillCategory {
  name: string;
  skills: string[];
  colorClass: string;
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      name: "Frontend",
      skills: [
        "HTML/CSS",
        "Javascript",
        "React",
        "Vue.js",
        "Nuxt.js",
        "Next.js",
      ],
      colorClass: "frontend-skill",
    },
    {
      name: "Backend",
      skills: ["Python", "Django", "Node.js", "Express.js"],
      colorClass: "backend-skill",
    },
    {
      name: "Databases",
      skills: ["MySQL", "MongoDB"],
      colorClass: "database-skill",
    },
    {
      name: "DevOps",
      skills: [
        "AWS CLI",
        "AWS Lambda",
        "AWS API Gateway",
        "AWS EC2",
        "AWS S3",
        "AWS Codecommit",
      ],
      colorClass: "devops-skill",
    },
    {
      name: "Version Control",
      skills: ["Git", "AWS Elastic Beanstalk"],
      colorClass: "devops-skill",
    },
    {
      name: "Scripting",
      skills: ["Bash", "Google Apps script"],
      colorClass: "tools-skill",
    },
    {
      name: "Tools",
      skills: [
        "MySQL Workbench",
        "Source Tree",
        "VS Code",
        "Pycharm",
        "Google Workspace (G Suite)",
      ],
      colorClass: "tools-skill",
    },
  ];

  return (
    <section id="skills" className="skills-section py-5">
      <Container>
        <div className="text-center mb-5">
          <h2 className="section-title">Technical Skills</h2>
          <div className="section-divider mx-auto"></div>
          <p className="section-subtitle">My technical expertise and toolset</p>
        </div>

        <Row>
          {skillCategories.map((category, index) => (
            <Col md={6} lg={4} key={index} className="mb-4">
              <div className="skill-category">
                <h3 className="h5 mb-3">{category.name}</h3>
                <div>
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className={`skill-badge ${category.colorClass}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
