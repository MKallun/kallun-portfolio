import React from "react";
import { Container, Card } from "react-bootstrap";
import { Education as EducationType } from "../../types";

const Education: React.FC = () => {
  const education: EducationType = {
    institution: "STI Academic Center",
    location: "Las Piñas City",
    degree: "Bachelor of Science in Information Technology",
    achievements: [
      "Achieved Runner-up status for Best Thesis",
      "Feature Editor for Beyond Horizon (STI's bi-annual magazine) SY 2013 - 2014",
    ],
  };

  return (
    <section id="education" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5">Education</h2>
        <Card className="shadow-sm">
          <Card.Body>
            <h4>{education.institution}</h4>
            <h5 className="text-primary">{education.degree}</h5>
            <p className="text-muted">{education.location}</p>
            <h6>Achievements:</h6>
            <ul>
              {education.achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
};

export default Education;
