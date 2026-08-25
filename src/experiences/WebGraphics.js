import { Container, Row, Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import './ExperiencePost.scss';

export default function WebGraphics() {
  return (
    <Container className="experience-post">
      <Fade>
        <h2>Web & Graphics Software Developer</h2>
        <p className="exp-meta">
          The Aerospace Corporation &mdash; Visualization &amp; Immersive Technology Department
          <br />
          2016 - 2018
        </p>
      </Fade>

      {/* VISUAL: add images, diagrams, or screenshots here */}
      <div className="visual-slot" />

      <Fade>
        <div className="exp-body">
          {/* Add bullet points, descriptions, etc. */}
        </div>
      </Fade>
    </Container>
  );
}
