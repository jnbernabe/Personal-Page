import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
} from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Button,
  Navbar,
  Nav,
  Card,
} from "react-bootstrap";

const resumeUrl = import.meta.env.VITE_RESUME_URL;
const githubUrl = import.meta.env.VITE_GITHUB_URL;

const Home = () => (
  <Container className=" min-vh-100 text-left py-5">
    <Row className="w-100">
      <Col md={8} lg={6} className="mx-auto text-center">
        <h1 className="display-4 text-light mb-3">Jamaal Bernabe</h1>
        <h2 className="h4 text-primary mb-4">Software Developer</h2>
        <p className="text-light lead mb-4">
          Innovating technology through scalable solutions in software
          development, automation, and cloud integration.
        </p>
        <div className="d-flex justify-content-center mb-4">
          <Button variant="primary" className="me-3" href="/work">
            Explore My Work
          </Button>
          <Button
            variant="secondary"
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            View My Resume
          </Button>
        </div>
        <Button
          href={githubUrl}
          variant="info"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary text-light"
        >
          Visit My GitHub Profile
        </Button>
      </Col>
    </Row>
  </Container>
);

const About = () => (
  <Container className=" text-left p-lg-5 p-4">
    <Row className="justify-content-md-center">
      <Col md="auto" className="d-flex justify-content-center">
        <h1 className="display-4 text-light mb-3 ">About Me</h1>
      </Col>
    </Row>
    <p className="text-light lead mb-4">
      I’m Jamaal Bernabe, a passionate software developer focusing on
      automation, backend development, and cloud services.
    </p>
    <br />
    <Row className="w-100">
      <Col md={6}>
        <h2 className="h5 text-primary mb-2">Key Skills</h2>
        <ul className="list-unstyled text-light mb-4">
          <li>Python, Java, JavaScript, C#, Node.js</li>
          <li>Flask, AngularJS, React, Selenium, JUnit</li>
          <li>Azure, AWS, Google Cloud</li>
          <li>CI/CD, Jenkins, Git, Automation Testing</li>
        </ul>
      </Col>
      <Col md={6}>
        <h2 className="h5 text-primary mb-2">Education</h2>
        <p className="text-light mb-4">
          Software Engineering Technology (AI) – Centennial College <br />
          Bachelor’s in Biochemistry & Molecular Biology – University of Toronto
        </p>
        <h2 className="h5 text-primary mb-2">Contact Information</h2>
        <p className="text-light">
          Email: jnbernabe@gmail.com <br />
          Phone: (647) 402-1724 <br />
          Location: Toronto, Ontario
        </p>
        <Button
          href="https://linkedin.com/in/jamaalbernabe"
          className="text-primary hover-underline text-light"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn Profile
        </Button>
      </Col>
    </Row>
  </Container>
);

const Work = () => (
  <Container className="d-flex flex-column justify-content-center min-vh-50 text-left py-5">
    <Row className="justify-content-md-center">
      <Col md="auto" className="d-flex justify-content-center">
        <h1 className="display-4 text-light mb-3 ">Work Experience</h1>
      </Col>
    </Row>
    <br />
    <div className="border-bottom border-secondary mb-4 pb-3">
      <h2 className="h5 text-primary">Aficio AI (Feb 2024 – Jul 2024)</h2>
      <h3 className="h6 text-light">Software Developer</h3>
      <ul className="text-light small list-unstyled mt-2">
        <li>Integrated Azure and AWS platforms to streamline pipelines.</li>
        <li>Optimized Azure infrastructure for restful APIs.</li>
        <li>Redesigned core frameworks to enhance performance.</li>
        <li>Integrated OpenAI and Nylas APIs for added functionality.</li>
      </ul>
    </div>
    <div className="border-bottom border-secondary mb-4 pb-3">
      <h2 className="h5 text-primary">
        Ministry of Children (Aug 2023 – Aug 2024)
      </h2>
      <h3 className="h6 text-light">Junior Software Automation Tester</h3>
      <ul className="text-light small list-unstyled mt-2">
        <li>Developed automated scripts with Selenium and JUnit.</li>
        <li>Improved reliability by migrating to Java 17.</li>
        <li>Reduced testing time with CI/CD pipelines.</li>
      </ul>
    </div>
  </Container>
);

const Projects = () => (
  <Container className="d-lg-flex flex-column justify-content-center min-vh-50 text-left align-content-center">
    <Row className="justify-content-md-center">
      <Col md="auto" className="d-flex justify-content-center">
        <h1 className="display-4 text-light mb-3 ">Projects</h1>
      </Col>
    </Row>
    <br />
    <Container className="d-lg-flex align-content-center justify-content-center">
      <Card bg="dark">
        <h2 className="h5 text-primary text-center">Bird Image Classifier</h2>
        <ul className="text-light small mt-2">
          <li>Achieved 81% accuracy with TensorFlow and Keras.</li>
          <li>Improved accessibility for visually impaired users.</li>
        </ul>
      </Card>
      <Card bg="dark">
        <h2 className="h5 text-primary text-center">AWS Polly Translate</h2>
        <ul className="text-light small mt-2">
          <li>Utilize AWS to read and translate text in images</li>
          <li>Implemented AWS Translate for multi-language support</li>
          <li>Translated text read aloud using AWS Polly</li>
        </ul>
      </Card>
      <Card bg="dark">
        <h2 className="h5 text-primary text-center">NaviGrade</h2>
        <ul className="text-light small mt-2">
          <li>Student focused Task Tracking App</li>
          <li>Worked on features such as grade estimation, cou.</li>
        </ul>
        <Button>
          <a
            href="https://navigrade-ee7efdf3e932.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light"
          >
            NaviGrade on Heroku
          </a>
        </Button>
      </Card>
    </Container>
  </Container>
);

const App = () => {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg" className="px-4 shadow ">
        <Container>
          <Navbar.Brand
            as={Link}
            to="/"
            className="text-light font-weight-bold"
          >
            Jamaal Bernabe
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="mx-auto ">
            <Nav
              fill
              className="ms-auto navbar-expand-lg navbar-light "
              variant="underline"
              defaultActiveKey="/home"
            >
              <Nav.Item>
                <Nav.Link as={Link} to="/" className="text-light">
                  Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/about" className="text-light">
                  About
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/work" className="text-light">
                  Work
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/projects" className="text-light">
                  Projects
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container fluid className="bg-dark text-light p-0 min-vh-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Container>
      <footer className="bg-secondary text-center py-3">
        <Container>
          <p className="mb-0 text-light small">
            © 2024 Jamaal Bernabe. All rights reserved.
          </p>
        </Container>
      </footer>
    </Router>
  );
};

export default App;
