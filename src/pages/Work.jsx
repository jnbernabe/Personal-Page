import { Container, Row, Col } from "react-bootstrap";
import "../App.css";

function Work() {
  return (
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
              and solving root causes of issues, enhancing operational
              efficiency and user satisfaction across the organization
            </li>
          </ul>
        </div>
      </Row>
    </Container>
  );
}

export default Work;
