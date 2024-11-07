/*************  ✨ Codeium Command 🌟  *************/
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
} from "react-router-dom";
import { Container, Row, Col, Button, Navbar, Nav } from "react-bootstrap";

// Home Page
// Define a centralized theme or style configuration for consistent styling

const resumeUrl = import.meta.env.VITE_RESUME_URL;
const githubUrl = import.meta.env.VITE_GITHUB_URL;

const Home = () => (
  <Container className="d-flex flex-column justify-content-center h-100 text-left py-4">
    <Row>
      <Col>
        <h1 className="display-4 text-white mb-4">Jamaal Bernabe</h1>
        <h2 className="h4 text-primary mb-4">Software Developer</h2>
        <p className="text-muted mb-4">
          Innovating technology through scalable solutions in software
          development, automation, and cloud integration. Expertise in Python,
          Java, and AI-driven platforms.
        </p>
        <div className="d-flex">
          <Button variant="primary" className="me-2" href="/work">
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
        <div className="mt-4">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary"
          >
            Visit My GitHub Profile
          </a>
        </div>
      </Col>
    </Row>
  </Container>
);
// About Page, Work Page, Projects Page remain unchanged
const About = () => (
  <Container className="flex flex-col items-start justify-center h-screen text-left py-4">
    <h1 className="text-5xl font-bold text-white mb-6">About Me</h1>
    <p className="text-gray-400 max-w-xl mb-8">
      I’m Jamaal Bernabe, a passionate software developer with a focus on
      automation testing, backend development, and cloud services. I bring a
      unique perspective to solving complex challenges in software development
      with a background in biochemistry and a strong dedication to technology.
    </p>
    <h2 className="text-3xl text-blue-500 mb-4">Key Skills</h2>
    <ul className="list-disc list-inside text-gray-400 text-xl mb-8">
      <li>Python, Java, JavaScript, C#, Node.js</li>
      <li>Flask, AngularJS, React, Selenium, JUnit</li>
      <li>Azure, AWS, Google Cloud</li>
      <li>CI/CD, Jenkins, Git, Automation Testing</li>
    </ul>
    <h2 className="text-3xl text-blue-500 mb-4">Education</h2>
    <p className="text-gray-400">
      Software Engineering Technology (AI) – Centennial College <br />
      Bachelor’s in Biochemistry & Molecular Biology – University of Toronto
    </p>
    <div className="mt-8">
      <p className="text-gray-400">Email: jnbernabe@gmail.com</p>
      <p className="text-gray-400">Phone: (647) 402-1724</p>
      <p className="text-gray-400">Location: Toronto, Ontario</p>
      <a
        href="https://linkedin.com/in/jamaalbernabe"
        className="text-blue-500 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn Profile
      </a>
    </div>
  </Container>
);

const Work = () => (
  <Container className="d-flex flex-column justify-content-center h-100 text-left py-4">
    <h1 className="display-4 text-white mb-4">Work Experience</h1>
    <div className="text-muted max-w-xl mb-4">
      <h2 className="h4 text-primary mb-2">Aficio AI (Feb 2024 – Jul 2024)</h2>
      <h3 className="h5 text-primary mb-3">Software Developer</h3>
      <ul className="text-muted mb-4">
        <li>
          Integrated Azure and AWS platforms, streamlining data processing
          pipelines
        </li>
        <li>
          Optimized Azure infrastructure for restful APIs, boosting system
          scalability by 20%
        </li>
        <li>
          Redesigned core application frameworks, reducing code complexity and
          enhancing performance by 30%
        </li>
        <li>
          Integrated OpenAI and Nylas APIs, improving platform functionality by
          30%
        </li>
      </ul>
    </div>
    <div className="text-muted max-w-xl mb-4">
      <h2 className="h4 text-primary mb-2">
        Ministry of Children, Community, and Social Services (Aug 2023 – Aug
        2024)
      </h2>
      <h3 className="h5 text-primary mb-3">
        Junior Software Automation Tester
      </h3>
      <ul className="text-muted mb-4">
        <li>
          Developed automated test scripts with Selenium and JUnit, reducing
          manual testing time by 50%.
        </li>
        <li>
          Migrated testing environments to Java 17, improving system reliability
          by 33%.
        </li>
        <li>
          Implemented CI/CD pipelines for automated testing, reducing manual
          testing time by 50%.
        </li>
        <li>
          Optimized web application performance, increasing user experience by
          50%.
        </li>
      </ul>
    </div>
  </Container>
);
const Projects = () => (
  <Container className="d-flex flex-column justify-content-center h-100 text-left p-4">
    <h1 className="display-4 text-white mb-4">Projects</h1>
    <div className="text-muted mb-4">
      <h2 className="h4 text-primary mb-3">
        Bird Image Classifier – Centennial College
      </h2>
      <ul className="text-muted list-unstyled">
        <li>
          Implemented a Convolutional Neural Network (CNN) to classify images of
          different birds. Achieved 81% accuracy using TensorFlow and Keras.
        </li>
        <li>
          Implemented a user-friendly interface that improved accessibility for
          visually impaired users, increasing engagement by 40%.
        </li>
      </ul>
    </div>
    <div className="text-muted mb-4">
      <h2 className="h4 text-primary mb-3">AWS Polly Translate</h2>
      <ul className="text-muted list-unstyled">
        <li>
          Implemented a user-friendly interface that improved accessibility for
          visually impaired users, increasing engagement by 40%.
        </li>
        <li>
          Participated in the design and implementation of key features, such as
          grade estimation, assignment management, course tracking, and user
          authentication (OAuth 2.0).
        </li>
      </ul>
    </div>
    <div className="text-muted mb-4">
      <h2 className="h4 text-primary mb-3">NaviGrade</h2>
      <ul className="text-muted list-unstyled">
        <li>
          Designed and created a task tracking site aimed towards students,
          utilizing MongoDB, Express, NodeJS, and React.
        </li>
        <li>
          Implemented a user-friendly interface that improved accessibility for
          visually impaired users, increasing engagement by 40%.
        </li>
        <li>
          Participated in the design and implementation of key features, such as
          grade estimation, assignment management, course tracking, and user
          authentication (OAuth 2.0).
        </li>
      </ul>
    </div>
  </Container>
);

const App = () => {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" className="px-4">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Jamaal Bernabe
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/work">
              Work
            </Nav.Link>
            <Nav.Link as={Link} to="/projects">
              Projects
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <main className="flex-1 container mx-auto px-4 flex flex-col items-start justify-center text-left">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/projects" element={<Projects />} />
          {/* Redirect /PersonalSite to Home */}
          <Route path="/PersonalSite" element={<Navigate to="/" />} />

          {/* Handle 404: Redirect any unmatched routes to Home */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>

      <footer className="bg-gray-800 w-full py-4">
        <Container className="flex justify-between text-gray-400">
          <p>© 2024 Jamaal Bernabe. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
          </div>
        </Container>
      </footer>
    </Router>
  );
};

export default App;

/******  d34bcd3e-f908-469b-8912-d7999ce7bc1f  *******/
