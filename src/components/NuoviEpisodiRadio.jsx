import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import image2a from "../assets/2a.png";
import image2b from "../assets/2b.png";
import image2c from "../assets/2c.png";
import image2d from "../assets/2d.png";
import image2e from "../assets/2e.png";

function NuoviEpisodiRadio() {
  return (
    <div className="bg-dark py-4">
      <Container>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="text-white mb-0">Nuovi episodi radio</h5>
        </div>
        <Row className="g-3 overflow-auto flex-nowrap">
          <Col md={2}>
            <div className="card bg-secondary text-white rounded-3 overflow-hidden card-episodio">
              <img
                src={image2a}
                alt="Prologo con Abuelo"
                className="img-fluid"
              />
            </div>

            <div className="p-2">
              <h3 className="small mb-1" style={{ color: "#d9edf7" }}>
                Prologo con Abuelo
              </h3>
            </div>
          </Col>
          <Col md={2}>
            <div className="card bg-info text-white rounded-3 overflow-hidden card-episodio">
              <img src={image2b} alt="The Wanderer" className="img-fluid" />
            </div>
            <div className="p-2">
              <h3 className="small mb-1" style={{ color: "#d9edf7" }}>
                The Wanderer
              </h3>
            </div>
          </Col>
          <Col md={2}>
            <div className="card bg-light text-dark rounded-3 overflow-hidden card-episodio">
              <img
                src={image2c}
                alt="Michael Bublé & Carly Pearce"
                className="img-fluid"
              />
            </div>
            <div className="p-2">
              <h3 className="small mb-1" style={{ color: "#d9edf7" }}>
                Michael Bublé & Carly Pearce
              </h3>
            </div>
          </Col>
          <Col md={2}>
            <div className="card bg-light text-dark rounded-3 overflow-hidden card-episodio">
              <img
                src={image2d}
                alt="Stephan Moccio: The Zane Lowe Interview"
                className="img-fluid"
              />
            </div>
            <div className="p-2">
              <h3 className="small mb-1" style={{ color: "#d9edf7" }}>
                Stephan Moccio: The Zane Lowe Interview
              </h3>
            </div>
          </Col>
          <Col md={2}>
            <div className="card bg-primary text-white rounded-3 overflow-hidden card-episodio">
              <img
                src={image2e}
                alt="Chart Spotlight: Julia Michaels"
                className="img-fluid"
              />
            </div>
            <div className="p-2">
              <h3 className="small mb-1" style={{ color: "#d9edf7" }}>
                Chart Spotlight: Julia Michaels
              </h3>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default NuoviEpisodiRadio;
