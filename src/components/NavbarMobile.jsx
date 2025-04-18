import { Row, Col } from "react-bootstrap";
import logoApple from "../assets/music.svg";
import dropDown from "../assets/list.svg";

function NavbarMobile() {
  return (
    <nav className="bg-dark text-white py-2 border-bottom">
      <Row className="text-center align-items-center g-0">
        <Col xs={4}>
          <div>
            <img src={dropDown} alt="Dropdown" className="dropdown-icon" />
          </div>
        </Col>
        <Col xs={4}>
          <div>
            <img src={logoApple} alt="Logo Apple" className="logo-apple" />
          </div>
        </Col>
        <Col xs={4}>
          <div>
            <h1 className="text-orange">Accedi</h1>
          </div>
        </Col>
      </Row>
    </nav>
  );
}

export default NavbarMobile;
