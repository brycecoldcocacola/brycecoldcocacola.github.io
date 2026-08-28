import { lazy, Suspense } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import RoleCard from '../components/RoleCard';
import Skills from '../components/Skills';
import './Aerospace.scss';

// The Three.js scene is heavy (~500 kB) and purely decorative, so load it on demand.
const SatelliteOrbit = lazy(() => import('./SatelliteOrbit'));

const SKILLS = ['TypeScript', 'JavaScript', 'Python', 'MATLAB'];

export default function Aerospace() {
  return (
    <section id="aerospace" className="aerospace resume-section">
      <div className="orbit-background">
        <Suspense fallback={null}>
          <SatelliteOrbit />
        </Suspense>
      </div>

      <Container className="aerospace-content">
        <Row className="justify-content-center">
          <Col lg={8}>
            <h3 className="section-title fade-in">The Aerospace Corporation</h3>

            <RoleCard
              role="Sr. Web & Graphics Software Developer"
              date="Jun 2019 - Apr 2021 · Los Angeles, CA"
            >
              Built web-based visualization and propagation tools for real-time
              satellite constellations. Built APIs and databases to consolidate and
              enable authoritative sources of truth for satellite information. Led
              various technical projects focused on web-based tooling.
            </RoleCard>

            <RoleCard
              role="Space Systems Engineer"
              date="Jul 2015 - Jun 2019 · Los Angeles, CA"
            >
              Leveraged Python to extend existing state-of-the-art satellite
              communications analysis tools. Built internal tooling and automation to
              support various analysis efforts and frameworks. Led corporate L&D for
              Python.
            </RoleCard>

            <Skills skills={SKILLS} />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
