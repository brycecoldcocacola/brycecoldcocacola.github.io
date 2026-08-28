import { Container, Row, Col } from 'react-bootstrap';

export default function Section({ id, title, className = '', children }) {
  return (
    <section id={id} className={`resume-section ${className}`.trim()}>
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col lg={8}>
            <h3 className="section-title fade-in">{title}</h3>
            {children}
          </Col>
        </Row>
      </Container>
    </section>
  );
}
