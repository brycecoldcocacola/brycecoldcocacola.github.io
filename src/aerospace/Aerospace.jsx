import SatelliteOrbit from './SatelliteOrbit';
import './Aerospace.scss';

export default function Aerospace() {
  return (
    <section id="aerospace" className="aerospace">
      {/* Fixed Three.js background */}
      <div className="orbit-background">
        <SatelliteOrbit />
      </div>

      {/* Scrolling content overlay */}
      <div className="aerospace-content">
        <h3 className="section-title fade-in">The Aerospace Corporation</h3>

        <div className="role-card fade-right">
          <h5>Sr. Web & Graphics Software Developer</h5>
          <p className="role-date">Jun 2019 - Apr 2021 · Los Angeles, CA</p>
          <p>Built web-based visualization and propagation tools for real-time satellite constellations. Built APIs and databases to consolidate and enable authoritative sources of truth for satellite information. Led various technical projects focused on web-based tooling.</p>
        </div>

        <div className="role-card fade-right">
          <h5>Space Systems Engineer</h5>
          <p className="role-date">Jul 2015 - Jun 2019 · Los Angeles, CA</p>
          <p>Leveraged Python to extend existing state-of-the-art satellite communications analysis tools. Built internal tooling and automation to support various analysis efforts and frameworks. Led corporate L&D for Python.</p>
        </div>

        <div className="skills-tags fade-right">
          <span className="skill-tag">TypeScript</span>
          <span className="skill-tag">JavaScript</span>
          <span className="skill-tag">Python</span>
          <span className="skill-tag">MATLAB</span>
        </div>
      </div>
    </section>
  );
}
