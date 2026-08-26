import { Container, Row, Col } from 'react-bootstrap';
import './Tempo.scss';

export default function Tempo() {
  return (
    <section id="tempo" className="tempo">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <h3 className="section-title mb-4 fade-in">Tempo</h3>
            <p className="lead fade-right">Software Developer</p>
            <p className="text-muted mb-4 fade-right">2021 - 2023</p>
            <p className="fade-right">
              {/* TODO: Add your Tempo project description here */}
              Developed full-stack web applications and data visualization tools.
              Built scalable microservices architecture for real-time analytics platforms.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
