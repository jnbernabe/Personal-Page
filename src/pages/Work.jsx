import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  Accordion,
} from "react-bootstrap";
import "../App.css";

function Work() {
  return (
    <Container>
      <Row>
        <Col>
          <Card className="text-center bg-dark text-light border-info">
            <Card.Body className="text-center">
              <Card.Title className="text-center">
                <h1 className="text-center">Work</h1>
              </Card.Title>
              <Card.Text className="text-center">
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <b>
                        Software Developer | Aficio AI | Feburary 2024 - June
                        2024
                      </b>
                    </Accordion.Header>
                    <Accordion.Body>
                      <ListGroup>
                        <ListGroup.Item>
                          Designed and optimized unstructured data analytics
                          pipelines using Python and Azure Machine Learning,
                          reducing processing latency by 25% through advanced
                          feature engineering and parallel processing.
                        </ListGroup.Item>
                        <ListGroup.Item>
                          Developed a microservices-based architecture
                          leveraging Azure Machine Learning, improving system
                          scalability and reducing response times by 30%.
                        </ListGroup.Item>
                        <ListGroup.Item>
                          Engineered RESTful APIs integrating AI models (e.g.,
                          NLP and regression-based analytics) for real-time data
                          processing, boosting analysis speed by 25%.
                        </ListGroup.Item>
                        <ListGroup.Item>
                          Led code reviews and pair programming initiatives,
                          reducing bug occurrence by 40% and fostering a
                          collaborative, high-quality development environment.
                        </ListGroup.Item>
                        <ListGroup.Item>
                          Created and deployed intricate data visualization
                          solutions with Elastic Stack, enabling stakeholders to
                          access real-time analytics and trend reporting.
                        </ListGroup.Item>
                      </ListGroup>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <b>
                        Software Automation Tester | Ministry of Children,
                        Community, and Social Services | Toronto, Canada |
                        August 2022 - August 2023
                      </b>
                    </Accordion.Header>
                    <Accordion.Body>
                      <ListGroup>
                        <ListGroup.Item>
                          Developed scalable test automation frameworks with
                          Selenium and Java, decreasing manual testing efforts
                          by 50% and enhancing test coverage.
                        </ListGroup.Item>
                        <ListGroup.Item>
                          Created and optimized over 1,000 Selenium-based test
                          scripts, ensuring 90% test coverage and accelerating
                          regression testing by 70%.
                        </ListGroup.Item>
                        <ListGroup.Item>
                          Devised and executed performance testing strategies
                          using JMeter and JUnit, integrating real-time
                          monitoring dashboards to enhance test result analysis
                          and improve report generation speed by 50%.
                        </ListGroup.Item>
                        <ListGroup.Item>
                          Led migration of the testing framework from Java 8 to
                          Java 17 across multiple teams, optimizing runtime
                          efficiency and increasing test performance by 33%.
                        </ListGroup.Item>
                        <ListGroup.Item>
                          Partnered with developers to diagnose and resolve
                          technical issues, expediting release cycles and
                          enhancing system stability.
                        </ListGroup.Item>
                      </ListGroup>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      <b>
                        System Support Officer | Tribunals Ontario | Toronto,
                        Canada | January 2022 - April 2022
                      </b>
                    </Accordion.Header>
                    <Accordion.Body>
                      <ListGroup>
                        <ListGroup.Item>
                          Deployed and managed automated ticketing systems,
                          reducing response times by 30% and enhancing workflow
                          efficiency.
                        </ListGroup.Item>
                        <ListGroup.Item>
                          Created detailed asset tracking reports using Power BI
                          and Excel, increasing resource allocation accuracy by
                          35%.
                        </ListGroup.Item>
                        <ListGroup.Item>
                          Delivered remote technical support via Microsoft Teams
                          and VPN-based secure access, resolving 95% of issues
                          within SLA timeframes.
                        </ListGroup.Item>
                        <ListGroup.Item>
                          Coordinated cross-functional collaboration sessions
                          using Agile methodology to incorporate new
                          technologies smoothly into current ecosystems.
                        </ListGroup.Item>
                        <ListGroup.Item>
                          Conducted asset audits using Excel and RFID tracking,
                          identifying and optimizing $100,000 worth of
                          misallocated resources.
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

export default Work;
