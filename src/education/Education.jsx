import { Container, Row, Col, Card } from 'react-bootstrap';
import { SiPython, SiJavascript } from 'react-icons/si';
import { FaDatabase, FaCogs } from 'react-icons/fa';
import Section from '../components/Section';
import RoleCard from '../components/RoleCard';
import './Education.scss';

const DEGREES = [
  {
    degree: "Master's Degree",
    date: '2016 - 2018 · University of California, Los Angeles',
    field: 'Aerospace Engineering & System Controls',
  },
  {
    degree: "Bachelor's Degree",
    date: '2011 - 2015 · University of California, Davis',
    field: 'Mechanical Engineering & Technology Management',
  },
];

const SKILLS = [
  { Icon: SiPython, name: 'Python', color: 'python', stack: 'Flask, Django, SQLAlchemy' },
  { Icon: SiJavascript, name: 'JavaScript', color: 'javascript', stack: 'React, Vue, jQuery' },
  { Icon: FaDatabase, name: 'Database', color: 'database', stack: 'PostgreSQL, Neo4j, MongoDB' },
  { Icon: FaCogs, name: 'Other', color: 'other', stack: 'Git, Agile, DevOps' },
];

export default function Education() {
  return (
    <>
      <Section id="education" className="education" title="Education">
        {DEGREES.map(({ degree, date, field }) => (
          <RoleCard key={degree} role={degree} date={date}>
            {field}
          </RoleCard>
        ))}
      </Section>

      <section id="skills" className="resume-section skills">
        <Container>
          <Row className="align-items-center justify-content-center g-4">
            <Col lg={8}>
              <h3 className="section-title fade-in">Skills</h3>
              <Row className="g-3">
                {SKILLS.map(({ Icon, name, color, stack }) => (
                  <Col key={name} xs={6} lg={3}>
                    <Card className="text-center h-100 skill-card fade-right">
                      <Card.Body>
                        <div className={`skill-icon skill-icon--${color}`}>
                          <Icon />
                        </div>
                        <Card.Title className="fs-5">{name}</Card.Title>
                        <Card.Text className="text-body-secondary">{stack}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
