import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

interface CategoryContent {
  title: string;
  items: string[];
}

interface Experience {
  id: number;
  company: string;
  position: string;
  period: string;
  location: string;
  categories?: CategoryContent[];
  contributions?: string[];
}

const Experience: React.FC = () => {
  const experiences: Experience[] = [
    {
      id: 1,
      company: "Zuitt technologies Inc",
      position: "Junior Full-stack Web Developer",
      period: "2021 - 2025",
      location: "Quezon City",
      categories: [
        {
          title: "Technical Contributions",
          items: [
            "Collaborated with senior developers on full-stack web application development projects",
            "Implemented responsive UIs using HTML, CSS, Nuxt.js, and Buefy",
            "Developed Python-based applications leveraging Django framework",
            "Utilized Python libraries like Pandas for data manipulation and analysis",
            "Employed Selenium for web scraping tasks",
          ],
        },
        {
          title: "Cloud Development Expertise",
          items: [
            "Designed and deployed serverless applications on AWS Lambda",
            "Integrated various AWS services including S3, CodeCommit, EC2, and API Gateway",
          ],
        },
        {
          title: "Educational Content Creation",
          items: [
            "Authored beginner and intermediate courses for bootcampers covering AWS technologies, enhancing the learning experience of over 200 students and counting",
            "Topics included AWS Lambda, DynamoDB, S3, CodeCommit, EC2, and API Gateway",
          ],
        },
        {
          title: "Project Leadership",
          items: [
            "Led solo projects focused on automating existing processes and developing new product features reducing manual labor by upwards of 80 man-days per month",
            "Collaborated closely with stakeholders throughout project lifecycles",
          ],
        },
        {
          title: "Training and Development",
          items: [
            "Trained collections team members on enhancing customer service quality",
            "Implemented strategies aimed at improving customer collection efforts that improved collection results by 40%",
          ],
        },
      ],
    },
    {
      id: 2,
      company: "UBX Philippines",
      position: "Blockchain Developer",
      period: "2020 - 2020",
      location: "Taguig City",
      contributions: [
        "Collaborated with UBX team on an innovative blockchain integration project",
        "Developed a web application leveraging blockchain principles",
        "Gained hands-on experience with blockchain development methodologies and best practices",
      ],
    },
    {
      id: 3,
      company: "Genpact Philippines",
      position: "Process Associate",
      period: "2016 - 2018",
      location: "Muntinlupa City",
      contributions: [
        "Provided exceptional customer service via telephone, addressing various inquiries and concerns",
        "Managed both pre-process and post-process issues including collections-related matters, payment processing problems, and general service information",
      ],
    },
  ];

  return (
    <section id="experience" className="py-5">
      <Container>
        <div className="text-center mb-5">
          <h2 className="section-title">Work Experience</h2>
          <div className="section-divider mx-auto"></div>
          <p className="section-subtitle">
            My professional journey and contributions
          </p>
        </div>

        <div className="timeline">
          {experiences.map((exp) => (
            <Card key={exp.id} className="experience-card">
              <Card.Body>
                <Row>
                  <Col lg={4} className="mb-3 mb-lg-0">
                    <h3 className="h5 mb-1">{exp.company}</h3>
                    <div className="text-primary fw-bold mb-2">
                      {exp.position}
                    </div>
                    <div className="text-muted mb-2">{exp.location}</div>
                    <div className="experience-period">{exp.period}</div>
                  </Col>
                  <Col lg={8}>
                    {exp.categories ? (
                      <>
                        {exp.categories.map((category, index) => (
                          <div key={index} className="mb-3">
                            <h4 className="h6 fw-bold text-secondary">
                              {category.title}
                            </h4>
                            <ul className="mb-3">
                              {category.items.map((item, i) => (
                                <li key={i}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </>
                    ) : (
                      <ul>
                        {exp.contributions?.map((contribution, i) => (
                          <li key={i}>{contribution}</li>
                        ))}
                      </ul>
                    )}
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Experience;
