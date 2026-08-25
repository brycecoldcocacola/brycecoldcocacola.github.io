import React, { Suspense } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from 'react-router-dom';
import { MdWork } from 'react-icons/md';
import './Experiences.scss';
import { experiences } from './data';

export default function Experiences() {
  let match = useRouteMatch();

  return (
    <Container className="experiences">
      <h3 className="timeline-header mb-4">Experience</h3>
      <Row>
        {Object.entries(experiences).map(([slug, exp]) => (
          <Col xs={12} md={6} key={slug} className="mb-4">
            <Fade right duration={500}>
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
                  <Link to={`${match.url}/${slug}`}>
                    <Button variant="outline-primary" size="sm">
                      View Details
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </Fade>
          </Col>
        ))}
      </Row>

      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path={`${match.path}/:expId`}>
            <FetchExperience />
          </Route>
        </Switch>
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
