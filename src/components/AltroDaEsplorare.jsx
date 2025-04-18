import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ChevronRight } from "react-bootstrap-icons";

function AltroDaEsplorare() {
  const exploreItems = [
    { label: "Esplora per genere" },
    { label: "Worldwide" },
    { label: "Video musicali" },
    { label: "Decenni" },
    { label: "Classifiche" },
    { label: "Nuovi artisti" },
    { label: "Attività e stati d'animo" },
    { label: "Audio spaziale" },
    { label: "Hit del passato" },
  ];

  return (
    <div className="bg-dark py-4">
      <Container>
        <h5 className="text-white mb-3">Altro da esplorare</h5>
        <Row className="g-2">
          {exploreItems.map((item, index) => (
            <Col key={index} xs={12} sm={6} md={4}>
              <div className="bg-dark-secondary rounded-3 p-3 m-2 d-flex justify-content-between align-items-center item-esplora">
                <p className="mb-0 " style={{ color: "#f85769" }}>
                  {item.label}
                </p>
                <ChevronRight color="grey" size={20} />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default AltroDaEsplorare;
