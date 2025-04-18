import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "./components/Sidebar";
import NavbarMobile from "./components/NavbarMobile";
import Player from "./components/Player";
import News from "./components/News";
import NuoviEpisodiRadio from "./components/NuoviEpisodiRadio";
import NuoveUscite from "./components/NuoveUscite";
import NavbarDesktop from "./components/NavbarDesktop";
import AltroDaEsplorare from "./components/AltroDaEsplorare";
import FooterCustom from "./components/FooterCustom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <>
      <div>
        {/* NAVBAR MOBILE */}
        <div className="d-md-none">
          <NavbarMobile />
        </div>

        <Container fluid className="p-0">
          <Row className="g-0">
            {/* SIDEBAR - solo su desktop */}
            <Col
              md={2}
              className="d-none d-md-block bg-dark text-white vh-100 p-3"
            >
              <Sidebar />
            </Col>

            {/* CONTENUTO PRINCIPALE */}
            <Col md={10}>
              <div className="d-none d-md-block">
                <NavbarDesktop />
              </div>
              <News />
              <NuoviEpisodiRadio />
              <NuoveUscite />
              <AltroDaEsplorare />
              <FooterCustom />
            </Col>
          </Row>
        </Container>

        {/* PLAYER BOTTOM - solo mobile */}
        <div className="d-md-none fixed-bottom">
          <Player position="bottom" />
        </div>
      </div>
    </>
  );
}

export default App;
