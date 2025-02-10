import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import "../App.css";
const githubUrl = import.meta.env.VITE_GITHUB_URL;

function Home() {
  return (
    <Container className=" min-vh-100 text-left py-5">
      <Row className="w-100">
        <Col className="mx-auto text-center">
          <h1 className="display-4 text-light mb-3 font-bold">
            Jamaal Bernabe
          </h1>
          <Card bg="dark" className="mx-auto p-4">
            <h2 className="h4 text-primary mb-4">Software Developer</h2>
            <Card.Body className="text-light lead mb-4">
              Passionate Software Developer seeking to leverage 3+ years of
              expertise in building scalable and robust server-side applications
              using Python, Node.js, and Java. Skilled in designing RESTful
              APIs, optimizing database performance with SQL and NoSQL
              solutions, and deploying applications on cloud platforms such as
              AWS and Azure. Adept at solving complex technical challenges,
              implementing CI/CD pipelines, and ensuring system reliability
              through automated testing and clean, maintainable code.
            </Card.Body>
          </Card>
          <Row>
            <Col>
              <Card bg="dark" className="mx-auto p-4">
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
              </Card>
            </Col>
            <Col>
              <Card bg="dark" className="mx-auto p-4">
                <h2 className="h5 text-primary mb-2">Education</h2>
                <p className="text-light mb-4">
                  <h5>
                    Software Engineering Technology Artificial Intelligence
                  </h5>
                  <h5>Centennial College</h5>
                  <Button
                    as={Link}
                    to="https://www.centennialcollege.ca/programs-courses/full-time/artificial-intelligence-fast-track-online/"
                    target="_blank"
                    className="text-primary hover-underline text-light"
                  >
                    {" "}
                    View Program
                  </Button>
                </p>
                <br />
                <p className="text-light mb-4">
                  <h5>Biotechnology</h5>
                  <h5>Centennial College</h5>
                  <Button
                    as={Link}
                    to="https://www.centennialcollege.ca/"
                    target="_blank"
                    className="text-primary hover-underline text-light"
                  >
                    {" "}
                    Visit Website
                  </Button>
                </p>
                <p className="text-light mb-4">
                  Bachelor’s in Biochemistry & Molecular Biology – University of
                  Toronto
                </p>
              </Card>
            </Col>
            <Col>
              <Card bg="dark" className="mx-auto p-4">
                <h2 className="h5 text-primary mb-2">Contact Information</h2>
                <p className="text-light">
                  Email: jnbernabe@gmail.com <br />
                  Phone: (647) 402-1724 <br />
                  Location: Toronto, Ontario
                </p>

                <Container>
                  <Row>
                    <Button
                      href="https://linkedin.com/in/jamaalbernabe"
                      className="text-primary hover-underline text-light"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn Profile
                    </Button>
                  </Row>
                  <br />
                  <Row>
                    <Button
                      href="assets/Jamaal Bernabe - Resume-DRkezgX2.pdf"
                      variant="primary"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary text-light"
                    >
                      Download Resume
                    </Button>
                  </Row>
                  <br />
                  <Row>
                    <Button
                      href={githubUrl}
                      variant="info"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary text-light"
                    >
                      Visit My GitHub Profile
                    </Button>
                  </Row>
                </Container>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
