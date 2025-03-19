import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";

const Contact: React.FC = () => {
  const [validated, setValidated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    event.preventDefault();

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      // In a real application, you would send the form data to a server here
      console.log("Form submitted:", formData);
      setShowAlert(true);

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setValidated(false);

      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowAlert(false);
      }, 5000);

      return;
    }

    setValidated(true);
  };

  return (
    <section id="contact" className="contact-section py-5">
      <Container>
        <div className="text-center mb-5">
          <h2 className="section-title text-white">Get In Touch</h2>
          <div className="section-divider bg-white mx-auto"></div>
          <p className="section-subtitle text-white">
            Have a project in mind? Let's discuss it!
          </p>
        </div>

        <Row className="justify-content-center">
          <Col lg={8}>
            {showAlert && (
              <Alert
                variant="success"
                onClose={() => setShowAlert(false)}
                dismissible
              >
                Thank you for your message! I'll get back to you soon.
              </Alert>
            )}

            <div className="contact-form">
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group controlId="name">
                      <Form.Label>Your Name</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide your name.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group controlId="email">
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid email address.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3" controlId="subject">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a subject.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-4" controlId="message">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    required
                    as="textarea"
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="I'd like to discuss a project..."
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a message.
                  </Form.Control.Feedback>
                </Form.Group>
                <div className="d-grid">
                  <Button variant="primary" type="submit" size="lg">
                    Send Message
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col md={4} className="mb-4 mb-md-0">
            <div className="contact-info-item">
              <div className="contact-icon">
                <i className="bi bi-envelope"></i>
              </div>
              <div>
                <h5 className="mb-1">Email</h5>
                <p className="mb-0">kallunmishaal@gmail.com</p>
              </div>
            </div>
          </Col>
          <Col md={4} className="mb-4 mb-md-0">
            <div className="contact-info-item">
              <div className="contact-icon">
                <i className="bi bi-telephone"></i>
              </div>
              <div>
                <h5 className="mb-1">Phone</h5>
                <p className="mb-0">(+63)936 496 4867</p>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="contact-info-item">
              <div className="contact-icon">
                <i className="bi bi-geo-alt"></i>
              </div>
              <div>
                <h5 className="mb-1">Location</h5>
                <p className="mb-0">Philippines</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
