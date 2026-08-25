import { Suspense } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import {
  Routes,
  Route,
  Link,
  useParams,
} from 'react-router-dom';
import { MdWork } from 'react-icons/md';
import './Experiences.scss';
import { experiences } from './data';

export default function Experiences() {
  return (
    <Container className="experiences">
      <h3 className="timeline-header mb-4">Experience</h3>
      <Row>
        {Object.entries(experiences).map(([slug, exp]) => (
          <Col xs={12} md={6} key={slug} className="mb-4">
            <div className="fade-in">
              <Card className="experience-card h-100">
                <Card.Body>
                  <Card.Title className="d-flex align-items-center gap-2">
                    <div className="icon-circle work">
                      <MdWork />
                    </div>
                    <span>{exp.name}</span>
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {exp.org} &mdash; {exp.dept}
                  </Card.Subtitle>
                  <Card.Text className="exp-date">{exp.date}</Card.Text>
                  <Card.Text>{exp.description}</Card.Text>
                  <Link to={slug}>
                    <Button variant="outline-primary" size="sm">
                      View Details
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
          </Col>
        ))}
      </Row>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path=":expId" element={<FetchExperience />} />
        </Routes>
      </Suspense>
    </Container>
  );
}

function FetchExperience() {
  const { expId } = useParams();
  const Experience = experiences[expId]?.article;
  if (!Experience) return <p>Experience not found.</p>;
  return <Experience />;
}
