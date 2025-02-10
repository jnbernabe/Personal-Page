import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "../App.css";

function Projects() {
  return (
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
}

export default Projects;
