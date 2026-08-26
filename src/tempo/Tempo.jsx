import { Container, Row, Col } from 'react-bootstrap';
import './Tempo.scss';

export default function Tempo() {
  return (
    <section id="tempo" className="tempo">
      <Container>
        <Row className="align-items-center">
          <Col lg={8}>
            <h3 className="section-title mb-4 fade-in">Tempo</h3>

            <div className="role-card fade-right">
              <h5>Tech Lead Manager</h5>
              <p className="role-date">Mar 2024 - Sep 2024 · San Francisco Bay Area (Hybrid)</p>
              <p>Led technical direction of computer vision and machine learning at Tempo.</p>
            </div>

            <div className="role-card fade-right">
              <h5>Senior Full Stack Developer</h5>
              <p className="role-date">Apr 2023 - Mar 2024 · San Francisco Bay Area (Hybrid)</p>
              <p>Continued ownership of all machine learning tooling, infrastructure, data labeling, and data analysis. Individual contributor on the ML team with an emphasis on automating CV configurations per exercise and driving improvements to in-house ML models.</p>
            </div>

            <div className="role-card fade-right">
              <h5>Full Stack Developer</h5>
              <p className="role-date">Apr 2021 - Apr 2023 · San Francisco, CA</p>
              <p>Built end-to-end tooling for the machine learning team: data collection, exploration, labeling, truth data management, ML development workflows, cloud compute infrastructure for model training, model management and deployment, production monitoring, and data analysis.</p>
            </div>

            <div className="skills-tags fade-right">
              <span className="skill-tag">Python</span>
              <span className="skill-tag">AWS</span>
              <span className="skill-tag">S3</span>
              <span className="skill-tag">Machine Learning</span>
              <span className="skill-tag">Computer Vision</span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
