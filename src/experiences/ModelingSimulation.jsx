import { Container } from 'react-bootstrap';
import SatelliteOrbit from './SatelliteOrbit';
import './ExperiencePost.scss';

export default function ModelingSimulation() {
  return (
    <Container className="experience-post">
      <div className="fade-in">
        <h2>Modeling & Simulation Developer</h2>
        <p className="exp-meta">
          The Aerospace Corporation &mdash; Modeling & Simulation Department
          <br />
          2015 - 2019
        </p>
      </div>

      <SatelliteOrbit />

      <div className="fade-in">
        <div className="exp-body">
          {/* Add bullet points, descriptions, etc. */}
        </div>
      </div>
    </Container>
  );
}
