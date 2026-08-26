import { Container, Row, Col, Card } from 'react-bootstrap';
import { SiPython, SiJavascript } from "react-icons/si";
import { FaDatabase, FaEllipsisH } from "react-icons/fa";
import './Education.scss';

export default function Education() {
  return (
    <section id="education" className="education">
      <Container>
        <Row className="align-items-center">
          <Col lg={8}>
            <h3 className="section-title mb-4 fade-in">Education</h3>

            <div className="degree-card fade-right">
              <h5>Master's Degree</h5>
              <p className="degree-date">2016 - 2018 • University of California, Los Angeles</p>
              <p className="degree-field">Aerospace Engineering & System Controls</p>
            </div>

            <div className="degree-card fade-right">
              <h5>Bachelor's Degree</h5>
              <p className="degree-date">2011 - 2015 • University of California, Davis</p>
              <p className="degree-field">Mechanical Engineering & Technology Management</p>
            </div>

            <div className="skills-section fade-right">
              <h4>Skills</h4>
              <Row>
                <Col xs={6} lg={3}>
                  <Card className="text-center h-100">
                    <Card.Body>
                      <Card.Title className="d-flex justify-content-center logo py"><div><SiPython/></div></Card.Title>
                      <Card.Title>Python</Card.Title>
                      <Card.Text>Flask, Django, SQLAlchemy</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={6} lg={3}>
                  <Card className="text-center h-100">
                    <Card.Body>
                      <Card.Title className="d-flex justify-content-center logo js"><div><SiJavascript/></div></Card.Title>
                      <Card.Title>JavaScript</Card.Title>
                      <Card.Text>React, Vue, jQuery</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={6} lg={3}>
                  <Card className="text-center h-100">
                    <Card.Body>
                      <Card.Title className="d-flex justify-content-center logo db"><div><FaDatabase/></div></Card.Title>
                      <Card.Title>Database</Card.Title>
                      <Card.Text>PostgreSQL, Neo4j, MongoDB</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={6} lg={3}>
                  <Card className="text-center h-100">
                    <Card.Body>
                      <Card.Title className="d-flex justify-content-center logo other"><div><FaEllipsisH/></div></Card.Title>
                      <Card.Title>Other</Card.Title>
                      <Card.Text>Git, Agile, DevOps</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
