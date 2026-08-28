import { useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Avatar from './avatar-removebg-min.png';
import './Home.scss';

export default function Home() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Container className="home">
      <Row className="align-items-bottom h-100">
        <Col xs={12} lg={6} className="d-flex flex-column align-items-center align-items-lg-start align-self-center mt-5 mb-2">
          <h1>Hello, I&apos;m Bryce</h1>
          <p>Web &amp; Software Developer</p>
          <p className="scroll-hint">Scroll to explore ↓</p>
        </Col>
        <Col xs={12} lg={6} className="h-100 overflow-hidden">
          <div className="fade-right">
            <Image
              fluid
              src={Avatar}
              alt="Bryce Anglin"
              style={{ visibility: imageLoaded ? 'visible' : 'hidden' }}
              onLoad={() => setImageLoaded(true)}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
