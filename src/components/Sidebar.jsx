import { Nav, Form, InputGroup } from "react-bootstrap";
import { HouseFill, Search, Broadcast, Grid } from "react-bootstrap-icons";
import "../App.css";

function Sidebar() {
  return (
    <Nav
      defaultActiveKey="/home"
      className="flex-column bg-dark text-white vh-100 p-3"
    >
      <img
        src="src/assets/music.svg"
        className="py-3 img-fluid align-self-start logo-white w-50"
        alt="Logo"
      />

      <Form className="d-flex mb-3 search-bar">
        <InputGroup>
          <InputGroup.Text className="icon-color">
            <Search />
          </InputGroup.Text>
          <Form.Control
            type="text"
            placeholder="Cerca"
            aria-label="Cerca"
            className="border-0 rounded-0"
          />
        </InputGroup>
      </Form>

      <Nav.Link href="/home" className="text-white">
        <HouseFill className="icon-color me-2 fs-4" /> Home
      </Nav.Link>
      <Nav.Link href="/search" className="text-white">
        <Grid className="icon-color me-2 fs-4" /> Novità
      </Nav.Link>
      <Nav.Link href="/library" className="text-white">
        <Broadcast className="icon-color me-2 fs-4" /> Radio
      </Nav.Link>
    </Nav>
  );
}

export default Sidebar;
