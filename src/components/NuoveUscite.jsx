import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MusicNote } from "react-bootstrap-icons";

function NuoveUscite() {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=pop")
      .then((response) => response.json())
      .then((data) => {
        setTracks(data.data.slice(0, 10));
      })
      .catch((error) => {
        console.error("Errore nel recupero dei dati:", error);
      });
  }, []);

  return (
    <div className="bg-dark py-4">
      <Container>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="text-white mb-0">Nuove uscite</h5>
        </div>
        <Row className="g-3">
          {tracks.map((track, index) => (
            <Col key={index} xs={6} sm={4} md={3} lg={2}>
              <div className="card bg-secondary text-white rounded-3 overflow-hidden card-uscita">
                <div className="d-flex justify-content-center align-items-center bg-dark-secondary">
                  <img
                    src={track.album.cover_medium}
                    alt={track.title}
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="p-2">
                <p className="small mb-0 text-white">{track.title}</p>
                <p className="small mb-0 text-white">{track.artist.name}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default NuoveUscite;
