import React, { useState, Suspense } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { MdWork } from 'react-icons/md';
import './Experiences.scss';
import { experiences } from './data';

export default function Experiences() {
  const [selectedExp, setSelectedExp] = useState(null);

  return (
    <Container className="experiences">
      <h3 className="timeline-header mb-4">Experience</h3>
      {selectedExp ? (
        <>
          <Button variant="outline-secondary" size="sm" className="mb-3" onClick={() => setSelectedExp(null)}>
            &larr; Back to experiences
          </Button>
          <Suspense fallback={<div>Loading...</div>}>
            {experiences[selectedExp]?.article && React.createElement(experiences[selectedExp].article)}
          </Suspense>
        </>
      ) : (
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
                    <Button variant="outline-primary" size="sm" onClick={() => setSelectedExp(slug)}>
                      View Details
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}
