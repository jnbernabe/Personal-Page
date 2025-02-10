import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Button,
  Navbar,
  Nav,
  Card,
  CardFooter,
} from "react-bootstrap";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Projects from "./pages/Projects";

const App = () => {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg" className="px-4 shadow ">
        <Container>
          <Navbar.Brand
            as={Link}
            to="/Portfolio"
            className="text-light font-weight-bold"
          >
            Jamaal Bernabe
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="mx-auto ">
            <Nav
              fill
              className="ms-auto navbar-expand-lg navbar-light"
              variant="underline"
              defaultActiveKey="/home"
            >
              <Nav.Item>
                <Nav.Link as={Link} to="/Portfolio" className="text-light">
                  Home
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link as={Link} to="/Portfolio/work" className="text-light">
                  Work
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/Portfolio/projects"
                  className="text-light"
                >
                  Projects
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container fluid className="bg-dark text-light p-0 min-vh-100">
        <Routes>
          <Route path="/Portfolio" element={<Home />} />
          <Route path="/Portfolio/work" element={<Work />} />
          <Route path="/Portfolio/projects" element={<Projects />} />
        </Routes>
      </Container>
      <Container fluid className="bg-dark text-light p-0">
        <Row className="d-flex justify-content-center py-3">
          <Col className="text-center">
            <Work />
            <Projects />
          </Col>
        </Row>
      </Container>
      <CardFooter className="bg-secondary text-center py-3">
        <p className="mb-0 text-light small">
          © 2024 Jamaal Bernabe. All rights reserved.
        </p>
      </CardFooter>
    </Router>
  );
};

export default App;
