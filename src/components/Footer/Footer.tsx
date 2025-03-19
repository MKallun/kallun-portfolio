import React from "react";
import { Container } from "react-bootstrap";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-4">
      <Container className="text-center">
        <p className="mb-0">
          © {currentYear} Mishaal Shariff Kallun. All rights reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
