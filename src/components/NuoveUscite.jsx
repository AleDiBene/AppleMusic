import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MusicNote } from "react-bootstrap-icons";

function NuoveUscite() {
  const numberOfItems = 10;

  return (
    <div className="bg-dark py-4">
      <Container>
        <div className="d-flex justify-content-between align-items-center mb-3a">
          <h5 className="text-white mb-0">Nuove uscite</h5>
        </div>
        <Row className="g-3">
          {Array.from({ length: numberOfItems }).map((_, index) => (
            <Col key={index} xs={6} sm={4} md={3} lg={3}>
              <div className="card bg-secondary text-white rounded-3 overflow-hidden card-uscita ">
                <div
                  className="d-flex justify-content-center align-items-center bg-dark-secondary"
                  style={{ height: "200px" }}
                >
                  <MusicNote size={48} color="grey" />
                </div>
              </div>
              <div className="p-2">
                <p className="small mb-0 text-white">Song Placeholder</p>
                <p className="small mb-0 text-white">Artist Placeholder</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default NuoveUscite;
