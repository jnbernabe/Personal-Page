import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Button,
  Navbar,
  Nav,
  Card,
} from "react-bootstrap";

const githubUrl = import.meta.env.VITE_GITHUB_URL;

const Home = () => (
  <Container className=" min-vh-100 text-left py-5">
    <Row className="w-100">
      <Col className="mx-auto text-center">
        <h1 className="display-4 text-light mb-3">Jamaal Bernabe</h1>
        <h2 className="h4 text-primary mb-4">Software Developer</h2>
        <p className="text-light lead mb-4">
          I’m Jamaal Bernabe, a passionate software developer focused on
          automation, full-stack development, and cloud services.
        </p>

        <Row>
          <Col md={12}>
            <h2 className="h5 text-primary mb-2">Key Skills</h2>
            <ul className="list-unstyled text-light mb-4">
              <li>
                <h5>Front-end Skills</h5> HTML/CSS, JavaScript, Angular,
                ReactJS, Selenium, JUnit, JMeter
              </li>
              <br />
              <li>
                <h5>Back-end Skills</h5> Python, C#, Java, Node.js, Next.js,
                MongoDB, SQL, MySQL, NoSQL, ElasticSearch
              </li>
              <br />
              <li>
                <h5>Technical Skills</h5> Agile, Scrum, SDLC, CI/CD, Unit
                Testing, Integration Testing, Database Management, Web
                Development, JIRA, Atlassian, Jenkins, Git, Github
              </li>
              <br />
              <li>
                <h5>Machine Learning Skills</h5> NumPy, Pandas, Machine
                Learning, Natural Language Processing, Data Visualization,
                Keras, Sci-kit Learn, Data Modelling, Statistics
              </li>
            </ul>
          </Col>
          <Col>
            <h2 className="h5 text-primary mb-2">Education</h2>
            <p className="text-light mb-4">
              Software Engineering Technology (AI) – Centennial College <br />
              Bachelor’s in Biochemistry & Molecular Biology – University of
              Toronto
            </p>
          </Col>
          <Col>
            <h2 className="h5 text-primary mb-2">Contact Information</h2>
            <p className="text-light">
              Email: jnbernabe@gmail.com <br />
              Phone: (647) 402-1724 <br />
              Location: Toronto, Ontario
            </p>

            <div>
              <Button
                href="https://linkedin.com/in/jamaalbernabe"
                className="text-primary hover-underline text-light"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn Profile
              </Button>
            </div>
          </Col>
          <br />
        </Row>
        <br />
        <Row>
          <Col>
            <div className="d-flex justify-content-center mb-4">
              <Button
                href="assets/Jamaal Bernabe - Resume-DRkezgX2.pdf"
                variant="primary"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary text-light"
              >
                Download Resume
              </Button>
            </div>
            <div>
              <Button
                href={githubUrl}
                variant="info"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary text-light"
              >
                Visit My GitHub Profile
              </Button>
            </div>
          </Col>
        </Row>
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
    <Row>
      <div className="border-bottom border-secondary mb-4 pb-3">
        <h2 className="h5 text-primary">
          Aficio AI (Feburary 2024 – July 2024)
        </h2>
        <h3 className="h6 text-light">Software Developer</h3>
        <ul className="text-light small list-unstyled mt-2">
          <li>Integrated Azure and AWS platforms to streamline pipelines.</li>
          <li>Optimized Azure infrastructure for restful APIs.</li>
          <li>Redesigned core frameworks to enhance performance.</li>
          <li>Integrated OpenAI and Nylas APIs for added functionality.</li>
        </ul>
      </div>
    </Row>
    <Row>
      <div className="border-bottom border-secondary mb-4 pb-3">
        <h2 className="h5 text-primary">
          Ministry of Children, Community, and Social Services (August 2022 –
          August 2023)
        </h2>
        <h3 className="h6 text-light">Junior Software Automation Tester</h3>
        <ul className="text-light small list-unstyled mt-2">
          <li>Developed automated scripts with Selenium and JUnit.</li>
          <li>Improved reliability by migrating to Java 17.</li>
          <li>Reduced testing time with CI/CD pipelines.</li>
        </ul>
      </div>
    </Row>
    <Row>
      <div className="border-bottom border-secondary mb-4 pb-3">
        <h2 className="h5 text-primary">
          Tribunals Ontario (January 2022 – April 2022)
        </h2>
        <h3 className="h6 text-light">Software Developer Intern</h3>
        <ul className="text-light small list-unstyled mt-2">
          <li>
            Generated detailed reports on asset status using data analysis
            tools, improving allocation accuracy by 35%.
          </li>
          <li>
            Utilized technical background to provide superb assistance to
            adjudicators.
          </li>
          <li>
            Exercised problem-solving skills in assisting staff by identifying
            and solving root causes of issues, enhancing operational efficiency
            and user satisfaction across the organization
          </li>
        </ul>
      </div>
    </Row>
  </Container>
);

const Projects = () => (
  <Container className="d-flex flex-column justify-content-center min-vh-50 text-left py-5">
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
            to="/Portfolio"
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
