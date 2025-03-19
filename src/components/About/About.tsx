import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const About: React.FC = () => {
  return (
    <section id="about" className="py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={8}>
            <h1>Mishaal Shariff Kallun P.</h1>
            <h3 className="text-primary mb-4">Full-stack Web Developer</h3>
            <p className="lead">
              Experienced Full-stack Web Developer with expertise in React,
              Vue.js, Python, and AWS cloud services. Passionate about building
              responsive, user-friendly web applications and automating
              processes to improve efficiency.
            </p>
            <div className="contact-info mt-4">
              <p>
                <FontAwesomeIcon icon={faEnvelope} className="me-2" />{" "}
                kallunmishaal@gmail.com
              </p>
              <p>
                <FontAwesomeIcon icon={faPhone} className="me-2" /> (+63)936 496
                4867
              </p>
            </div>
          </Col>
          <Col md={4} className="text-center">
            <div
              className="bg-light p-4 rounded-circle mx-auto"
              style={{ width: "200px", height: "200px" }}
            >
              {/* Replace with actual profile image */}
              <h2 className="initial-avatar">MK</h2>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
