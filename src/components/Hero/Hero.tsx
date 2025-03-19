import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-scroll";

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="hero-section">
      <Container>
        <Row className="align-items-center min-vh-100">
          <Col lg={6} className={`hero-content ${isVisible ? "fade-in" : ""}`}>
            <h1 className="display-4 fw-bold mb-0">Mishaal Shariff Kallun</h1>
            <h2 className="text-primary mb-4">Full-stack Web Developer</h2>
            <p className="lead mb-4">
              Crafting digital experiences with modern web technologies and
              cloud solutions. Specialized in React, Vue.js, Python Django, and
              AWS services.
            </p>
            <div className="d-flex gap-3">
              <Button
                variant="outline-dark"
                size="lg"
                className="px-4"
                onClick={() =>
                  window.scrollTo({
                    top: document.getElementById("projects")?.offsetTop || 0,
                  })
                }
              >
                View Projects
              </Button>
              <Button
                variant="outline-dark"
                size="lg"
                className="px-4"
                onClick={() =>
                  window.scrollTo({
                    top: document.getElementById("contact")?.offsetTop || 0,
                  })
                }
              >
                Contact Me
              </Button>
            </div>
          </Col>
          <Col
            lg={6}
            className={`text-center mt-5 mt-lg-0 ${
              isVisible ? "slide-in-right" : ""
            }`}
          >
            <div className="hero-image-container">
              <div className="hero-image">
                <div className="code-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    fill="currentColor"
                    className="bi bi-code-slash"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
                  </svg>
                </div>
                <div className="tech-stack">
                  <span className="tech react">React</span>
                  <span className="tech vue">Vue</span>
                  <span className="tech python">Python</span>
                  <span className="tech aws">AWS</span>
                  <span className="tech typescript">TypeScript</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
