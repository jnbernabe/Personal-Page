import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  CardFooter,
  Card,
} from "react-bootstrap";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <Router>
      <div className="main">
        <Navbar
          bg="dark"
          variant="dark"
          expand="lg"
          className="px-4 shadow"
          sticky="top"
        >
          <Navbar.Brand href="#home" className="text-light font-weight-bold">
            Jamaal Bernabe
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="mx-auto">
            <Nav
              fill
              className="ms-auto navbar-expand-lg navbar-light"
              variant="underline"
            >
              <Nav.Item>
                <Nav.Link href="#home" className="text-light">
                  Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#about" className="text-light">
                  Skills & Education
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#work" className="text-light">
                  Work
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#projects" className="text-light">
                  Projects
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#contact" className="text-light">
                  Contact
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Container>
          <Row>
            <Col>
              <section id="home">
                <Home />
              </section>
              <section id="about">
                <About />
              </section>
              <section id="work">
                <Work />
              </section>
              <section id="projects">
                <Projects />
              </section>
              <section id="contact">
                <Contact />
              </section>
            </Col>
          </Row>
        </Container>

        <CardFooter className="text-center bg-dark">
          <p className="mb-0 text-light small">
            © 2025 Jamaal Bernabe. All rights reserved.
          </p>
        </CardFooter>
      </div>
    </Router>
  );
};

export default App;
