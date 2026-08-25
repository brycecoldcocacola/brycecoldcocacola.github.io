import { Container } from 'react-bootstrap';
import './ExperiencePost.scss';

export default function WebGraphics() {
  return (
    <Container className="experience-post">
      <div className="fade-in">
        <h2>Web & Graphics Software Developer</h2>
        <p className="exp-meta">
          The Aerospace Corporation &mdash; Visualization &amp; Immersive Technology Department
          <br />
          2016 - 2018
        </p>
      </div>

      {/* VISUAL: add images, diagrams, or screenshots here */}
      <div className="visual-slot" />

      <div className="fade-in">
        <div className="exp-body">
          {/* Add bullet points, descriptions, etc. */}
        </div>
      </div>
    </Container>
  );
}
