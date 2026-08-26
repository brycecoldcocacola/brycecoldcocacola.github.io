import { Container, Row, Col } from 'react-bootstrap';
import './ParallelDomain.scss';

export default function ParallelDomain() {
  return (
    <section id="parallel-domain" className="parallel-domain">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <h3 className="section-title mb-4 fade-in">Parallel Domain</h3>
            <p className="lead fade-right">Web & Software Developer</p>
            <p className="text-muted mb-4 fade-right">2019 - 2021</p>
            <p className="fade-right">
              {/* TODO: Add your Parallel Domain project description here */}
              Worked on immersive visual effects and real-time rendering pipelines for feature films.
              Built web-based tools for production workflow optimization.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
