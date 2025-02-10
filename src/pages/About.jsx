import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "../App.css";

function About() {
  return (
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
          <Card bg="dark">
            <h2 className="h5 text-primary mb-2">Key Skills</h2>
            <ul className="list-unstyled text-light mb-4">
              <li>Python, Java, JavaScript, C#, Node.js</li>
              <li>Flask, AngularJS, React, Selenium, JUnit</li>
              <li>Azure, AWS, Google Cloud</li>
              <li>CI/CD, Jenkins, Git, Automation Testing</li>
            </ul>
          </Card>
        </Col>
        <Col md={6}>
          <h2 className="h5 text-primary mb-2">Education</h2>
          <p className="text-light mb-4">
            Software Engineering Technology (AI) – Centennial College <br />
            Bachelor’s in Biochemistry & Molecular Biology – University of
            Toronto
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
}

export default About;
