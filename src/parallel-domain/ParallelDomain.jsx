import { Container, Row, Col } from 'react-bootstrap';
import './ParallelDomain.scss';

export default function ParallelDomain() {
  return (
    <section id="parallel-domain" className="parallel-domain">
      <Container>
        <Row className="align-items-center">
          <Col lg={8}>
            <h3 className="section-title mb-4 fade-in">Parallel Domain</h3>

            <div className="role-card fade-right">
              <h5>Principal Software Developer</h5>
              <p className="role-date">Mar 2026 - Present · 6 mos · San Francisco, CA (Hybrid)</p>
            </div>

            <div className="role-card fade-right">
              <h5>Senior Software Developer</h5>
              <p className="role-date">Sep 2024 - Mar 2026 · 1 yr 7 mos</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
