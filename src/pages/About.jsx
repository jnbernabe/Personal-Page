import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Accordion,
  ListGroup,
} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "../App.css";

function About() {
  return (
    <Container>
      <Row>
        <Col>
          <Card className="text-center bg-success text-light border-dark">
            <Card.Body className="text-center">
              <Card.Title className="text-center">
                <h1 className="text-center">Skills</h1>
              </Card.Title>

              <Card.Text className="text-center">
                <Accordion className="text-left">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <b>Programming Languages</b>
                    </Accordion.Header>

                    <Accordion.Body>
                      <ListGroup>
                        <ListGroup.Item>
                          <b>Python</b>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <b>Java</b>
                        </ListGroup.Item>

                        <ListGroup.Item>
                          <b>React</b>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <b>Angular</b>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <b>JavaScript</b>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <b>C#</b>
                        </ListGroup.Item>
                      </ListGroup>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <b>Backend & Databases</b>
                    </Accordion.Header>

                    <Accordion.Body>
                      <ListGroup>
                        <ListGroup.Item>
                          <b>Node.js</b>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <b>SQL (PostgreSQL, MySQL)</b>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <b>NoSQL (MongoDB, Firebase)</b>
                        </ListGroup.Item>
                      </ListGroup>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      <b>DevOps & Cloud</b>
                    </Accordion.Header>

                    <Accordion.Body>
                      <ListGroup>
                        <ListGroup.Item>
                          <b>Azure</b>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <b>AWS (Lambda, S3, EC2)</b>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <b>CI/CD (Jenkins, GitHub Actions)</b>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <b>Version Control (Git, GitHub)</b>
                        </ListGroup.Item>
                      </ListGroup>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>
                      <b>Machine Learning</b>
                    </Accordion.Header>

                    <Accordion.Body>
                      <ListGroup>
                        <ListGroup.Item>
                          <b>TensorFlow</b>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <b>Scikit-learn</b>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <b>Deep Learning</b>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <b>Natural Language Processing</b>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <b>Python (Pandas, NumPy, Matplotlib)</b>
                        </ListGroup.Item>
                      </ListGroup>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className=" bg-success text-light border-dark">
            <Card.Body className="text-center">
              <Card.Title className="text-center">
                <h1 className="text-center">Education</h1>
              </Card.Title>

              <Card.Text className="text-center">
                <Accordion className="text-left">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <b>
                        Software Engineering Technology - Artifical Intelligence
                        | Centennial College | 2024
                      </b>
                    </Accordion.Header>

                    <Accordion.Body>
                      <ListGroup>
                        <ListGroup.Item>
                          Developed robust AI-powered applications using Python,
                          TensorFlow, and Scikit-learn, gaining hands-on
                          experience in machine learning, deep learning, and
                          natural language processing.
                        </ListGroup.Item>
                        <ListGroup.Item>
                          Mastered software development practices including
                          Agile methodologies, version control (Git), and
                          full-stack development with proficiency in Python,
                          Java, and C#.
                        </ListGroup.Item>
                        <ListGroup.Item>
                          Collaborated on capstone projects integrating AI
                          models into cloud-based platforms (Azure, AWS),
                          showcasing strong skills in software deployment, API
                          development, and data processing.
                        </ListGroup.Item>
                        <ListGroup.Item>
                          Designed responsive and functional sites utilizing
                          React, Angular, HTML/CSS, and JavaScript.
                        </ListGroup.Item>
                      </ListGroup>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <b>Biotechnology | Centennial College | 2020</b>
                    </Accordion.Header>
                    <Accordion.Body>
                      <ListGroup>
                        <ListGroup.Item>
                          Isolate, enumerate and identify microorganisms from
                          many types of samples (water, soil, air, the body,
                          food, and pharmaceutical and cosmetic products)
                        </ListGroup.Item>
                      </ListGroup>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      <b>
                        Bachelor's Degree in Biochemistry & Molecular Biology |
                        University of Toronto | 2018
                      </b>
                    </Accordion.Header>
                    <Accordion.Body>
                      <ListGroup>
                        <ListGroup.Item>
                          Graduated with a comprehensive understanding of
                          biochemistry and molecular biology, complementing
                          technical skills with a strong scientific background.
                        </ListGroup.Item>
                      </ListGroup>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
