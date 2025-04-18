import { Row, Col, Button, Form } from "react-bootstrap";
import {
  ArrowLeft,
  PlayFill,
  ArrowRight,
  SpeakerFill,
} from "react-bootstrap-icons";
import logoApple from "../assets/apple.svg";

function NavbarDesktop() {
  return (
    <nav className="bg-dark text-white py-3">
      <Row className="align-items-center g-0 px-3">
        <Col
          md={2}
          className="d-flex align-items-center justify-content-around"
        >
          <ArrowLeft className="text-white" size={20} />
          <PlayFill className="text-white" size={20} />
          <ArrowRight className="text-white" size={20} />
        </Col>

        <Col
          md={5}
          className="d-flex align-items-center justify-content-center bg-secondary py-3"
        >
          <img src={logoApple} alt="Logo Apple" height="24" />
        </Col>

        <Col
          md={4}
          className="d-flex align-items-center justify-content-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-volume-up m-2"
            viewBox="0 0 16 16"
          >
            <path d="M11.536 14.01A8.47 8.47 0 0 0 14.026 8a8.47 8.47 0 0 0-2.49-6.01l-.708.707A7.48 7.48 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303z" />
            <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.48 5.48 0 0 1 11.025 8a5.48 5.48 0 0 1-1.61 3.89z" />
            <path d="M10.025 8a4.5 4.5 0 0 1-1.318 3.182L8 10.475A3.5 3.5 0 0 0 9.025 8c0-.966-.392-1.841-1.025-2.475l.707-.707A4.5 4.5 0 0 1 10.025 8M7 4a.5.5 0 0 0-.812-.39L3.825 5.5H1.5A.5.5 0 0 0 1 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 7 12zM4.312 6.39 6 5.04v5.92L4.312 9.61A.5.5 0 0 0 4 9.5H2v-3h2a.5.5 0 0 0 .312-.11" />
          </svg>
          <Form.Range min={0} max={100} step={1} className="w-25" />
        </Col>

        <Col md={1} className="d-flex justify-content-end">
          <Button variant="danger" size="sm" className="fs-6">
            <svg
              className="m-1"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-person-fill"
              viewBox="0 0 16 16"
            >
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
            </svg>
            Accedi
          </Button>
        </Col>
      </Row>
    </nav>
  );
}

export default NavbarDesktop;
