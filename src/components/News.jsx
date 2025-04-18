import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import image1a from "../assets/1a.png";
import image1b from "../assets/1b.png";

function NovitaSection() {
  return (
    <div className="bg-dark py-5">
      <Container>
        <h2 className="text-white mb-4 fs-1">Novità</h2>
        <hr className="text-white"></hr>

        <Row className="g-4">
          <Col md={6}>
            <div className="p-3">
              <p className="small mb-1" style={{ color: "#d9edf7" }}>
                NUOVA STAZIONE RADIO
              </p>
              <h3
                className="small mb-1"
                style={{ color: "#d9edf7", fontWeight: "bold" }}
              >
                Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill
              </h3>
            </div>
            <div
              className="card text-white rounded-3 overflow-hidden"
              style={{ backgroundColor: "#198cf6" }}
            >
              <img
                src={image1a}
                alt="Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill"
                className="img-fluid"
                style={{ opacity: 0.8 }}
              />
            </div>
          </Col>
          <Col md={6}>
            <div className="p-3">
              <p className="small mb-1" style={{ color: "#f5a6c5" }}>
                NUOVA STAZIONE RADIO
              </p>
              <h3
                className="small mb-1"
                style={{ color: "#d9edf7", fontWeight: "bold" }}
              >
                Ecco la nuova casa della musica latina
              </h3>
            </div>
            <div
              className="card text-white rounded-3 overflow-hidden"
              style={{ backgroundColor: "#e84a8d" }}
            >
              <img
                src={image1b}
                alt="Ecco la nuova casa della musica latina"
                className="img-fluid"
                style={{ opacity: 0.8 }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default NovitaSection;
