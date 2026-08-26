import { Container, Row, Col } from 'react-bootstrap';
import './Aerospace.scss';

export default function Aerospace() {
  return (
    <section id="aerospace" className="aerospace">
      <Container>
        <Row className="align-items-center">
          <Col lg={8}>
            <h3 className="section-title mb-4 fade-in">The Aerospace Corporation</h3>
            
            <div className="role-card fade-right">
              <h5>Web & Graphics Software Developer</h5>
              <p className="role-date">2016 - 2018 • Visualization & Immersive Technology Department</p>
              <p>Built web-based visualization and graphics software for immersive technology applications.</p>
            </div>

            <div className="role-card fade-right">
              <h5>Modeling & Simulation Developer</h5>
              <p className="role-date">2015 - 2019 • Modeling & Simulation Department</p>
              <p>Developed modeling and simulation tools for aerospace systems analysis.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
