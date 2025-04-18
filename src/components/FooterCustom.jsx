import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-dark text-secondary py-3">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-start">
            <p className="mb-1 small">Italia</p>
            <p className="mb-0 small">English (UK)</p>
          </Col>
          <Col md={6} className="text-end">
            <p className="mb-1 small">
              Copyright © 2024 Apple Inc. Tutti i diritti riservati.
            </p>
            <ul className="list-inline mb-0 small">
              <li className="list-inline-item">
                <a href="#" className="text-secondary text-decoration-none">
                  Condizioni dei servizi internet
                </a>
              </li>
              <li className="list-inline-item ms-3">
                <a href="#" className="text-secondary text-decoration-none">
                  Apple Music e privacy
                </a>
              </li>
              <li className="list-inline-item ms-3">
                <a href="#" className="text-secondary text-decoration-none">
                  Avviso sui cookie
                </a>
              </li>
              <li className="list-inline-item ms-3">
                <a href="#" className="text-secondary text-decoration-none">
                  Supporto
                </a>
              </li>
              <li className="list-inline-item ms-3">
                <a href="#" className="text-secondary text-decoration-none">
                  Feedback
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
