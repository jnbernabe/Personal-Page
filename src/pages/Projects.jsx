import { Container, Row, Col, Card, Button, CardGroup } from "react-bootstrap";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Projects() {
  return (
    <Container>
      <Row>
        <Col>
          <Card className="text-center bg-dark text-light" cardStyle>
            <Card.Body className="text-center">
              <Card.Title className="text-center">
                <h1 className="text-center">Projects</h1>
              </Card.Title>
              <Card.Text className="text-center">
                <CardGroup>
                  <Card className="text-center bg-primary text-dark">
                    <Card.Header>
                      {" "}
                      <a
                        href="https://github.com/jnbernabe/NaviGrade"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-dark"
                      >
                        <b>
                          <h1>NaviGrade </h1>
                        </b>
                      </a>
                    </Card.Header>
                    <Card.Body>
                      <Card.Text>
                        {" "}
                        <b>React</b> | <b>Node.js</b> | <b>MongoDB</b>
                        <p>
                          {" "}
                          A full-stack web application that allows users to
                          create and manage their own courses and assignments,
                          as well as view their grades and predict their final
                          grade.
                        </p>
                        <Button
                          href="https://navigrade-ee7efdf3e932.herokuapp.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="dark"
                        >
                          Visit NaviGrade on Heroku
                        </Button>
                      </Card.Text>
                    </Card.Body>
                  </Card>

                  <Card className="text-center bg-primary text-dark">
                    <Card.Header>
                      {" "}
                      <a
                        href="https://github.com/jnbernabe/nlp-group1-amzFashion"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-dark"
                      >
                        <b>
                          <h1>Amazon Fashion NLP</h1>
                        </b>
                      </a>
                    </Card.Header>
                    <Card.Body>
                      <Card.Text>
                        {" "}
                        <b>Python</b> | <b>TensorFlow</b> | <b>Scikit-learn</b>
                        <p>
                          {" "}
                          A natural language processing project that analyzes
                          Amazon fashion reviews to predict the sentiment of the
                          review and classify the review's rating.
                        </p>
                      </Card.Text>
                    </Card.Body>
                  </Card>

                  <Card className="text-center bg-primary text-dark">
                    <Card.Header>
                      {" "}
                      <a
                        href="https://github.com/jnbernabe/AWS-Translate-polly"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-dark"
                      >
                        <b>
                          <h1>AWS Image Translate</h1>
                        </b>
                      </a>
                    </Card.Header>
                    <Card.Body>
                      <Card.Text>
                        {" "}
                        <b>Python</b> | <b>AWS Translate</b> | <b>AWS Polly</b>
                        <p>
                          {" "}
                          A natural language processing project that uses AWS
                          Translate to translate text in an image from one
                          language to another and uses AWS Polly to convert the
                          translated text to speech.
                        </p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </CardGroup>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Projects;
