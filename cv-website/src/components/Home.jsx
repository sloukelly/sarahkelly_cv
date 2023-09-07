import { Col, Container, Row } from "react-bootstrap";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import './Home.css';

export default function Home() {
  return (
    <Container>
      <Row>
        <Col className="text-center">
          <h5>Web Developer | Teacher and Tutor | Continuous Learner</h5>
        </Col>
      </Row>
      <div className="headings">
        <h6>TECHNICAL SKILLS</h6>
        <hr className="left-line"/>
        <Skills />

        <h6>PROFESSIONAL EXPERIENCE</h6>
        <hr className="left-line"/>
        <Experience />
        
        <h6>EDUCATION</h6>
        <hr className="left-line"/>
        <Education />
      </div>
    </Container>
  );
}
