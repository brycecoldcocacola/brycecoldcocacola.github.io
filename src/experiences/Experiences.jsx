import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { MdWork } from 'react-icons/md';
import './Experiences.scss';
import SatelliteOrbit from './SatelliteOrbit';

export default function Experiences() {
  return (
    <section id="experience" className="experiences-section">
      {/* Three.js sticky background */}
      <div className="orbit-background">
        <SatelliteOrbit />
      </div>

      <Container className="experiences-content">
        <h3 className="timeline-header mb-4">Experience</h3>

        <Row className="g-4">
          {/* Aerospace Corporation - Modeling & Simulation */}
          <Col xs={12}>
            <Card className="experience-card timeline-card">
              <Card.Body className="d-flex flex-column flex-md-row gap-3 align-items-start">
                <div className="icon-circle work">
                  <MdWork />
                </div>
                <div className="flex-grow-1">
                  <Card.Title className="mb-1">Modeling & Simulation Developer</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    The Aerospace Corporation &mdash; Modeling &amp; Simulation Department
                  </Card.Subtitle>
                  <Card.Text className="exp-date mb-3">2015 - 2019</Card.Text>
                  <Card.Text>{'Developed modeling and simulation tools for aerospace systems analysis.'}</Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Aerospace Corporation - Web & Graphics */}
          <Col xs={12}>
            <Card className="experience-card timeline-card">
              <Card.Body className="d-flex flex-column flex-md-row gap-3 align-items-start">
                <div className="icon-circle work">
                  <MdWork />
                </div>
                <div className="flex-grow-1">
                  <Card.Title className="mb-1">Web &amp; Graphics Software Developer</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    The Aerospace Corporation &mdash; Visualization &amp; Immersive Technology Department
                  </Card.Subtitle>
                  <Card.Text className="exp-date mb-3">2016 - 2018</Card.Text>
                  <Card.Text>{'Built web-based visualization and graphics software for immersive technology.'}</Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
