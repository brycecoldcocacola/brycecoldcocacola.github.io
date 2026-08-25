import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import SatelliteOrbit from './SatelliteOrbit';

export default function ModelingSimulation() {
  return (
    <Container className="experience-post">
      <Fade>
        <h2>Modeling & Simulation Developer</h2>
        <p className="exp-meta">
          The Aerospace Corporation &mdash; Modeling & Simulation Department
          <br />
          2015 - 2019
        </p>
      </Fade>

      <SatelliteOrbit />

      <Fade>
        <div className="exp-body">
          {/* Add bullet points, descriptions, etc. */}
        </div>
      </Fade>
    </Container>
  );
}
