import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import "./Blog.scss";

const posts = {
  'python-units-1': {
    name: "Physical Units in Python: Part 1 - Emulating Python Primitives",
    date: "Dec 17 2020",
    tags: ["python"],
    description:
      `One problem that comes up when using computer programming to solve
      physical problems is that the numbers you are using are not just numbers.
      They have units. In this post, I will show you how to create something
      that acts like a primitive Python type.`,
    article: React.lazy(() => import('./posts/python-units-1/Post'))
  },
  'python-import': {
    name: "How Python Imports Packages",
    date: "Dec 12 2020",
    tags: ["python"],
    description:
    `Understanding the import system in Python can be confusing at times, especially
    when you start running into import errors. In this post, I will explain how
    to fix that import error.`,
    article: React.lazy(() => import('./posts/python-import/Post'))
  },
  'python-venv': {
    name: "Python Virtual Environments",
    date: "Dec 11 2020",
    tags: ["python"],
    description:
      `Python virtual environments are a great way to manage and share dependencies
      across projects. In this post, I will show you how to get started with them
      to start using them today.`,
    article: React.lazy(() => import('./posts/python-venv/Post'))
  },
};

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <Container className="Blog">
      {selectedPost ? (
        <>
          <button className="btn btn-sm btn-outline-secondary mb-3" onClick={() => setSelectedPost(null)}>
            &larr; Back to posts
          </button>
          <Suspense fallback={<div>Loading...</div>}>
            {posts[selectedPost]?.article && React.createElement(posts[selectedPost].article)}
          </Suspense>
        </>
      ) : (
        <>
          <Row>
            <Col>
              <h3>Posts</h3>
            </Col>
          </Row>
          <div className="fade-in">
            <div>
              {Object.keys(posts).map((key) => (
                <Row key={key} className='mb-3'>
                  <Col>
                    <Card>
                      <Card.Body>
                        <Card.Title onClick={() => setSelectedPost(key)} style={{ cursor: 'pointer' }}>
                          {posts[key].name}
                        </Card.Title>
                        <Card.Subtitle>
                          {posts[key].date}
                        </Card.Subtitle>
                        <Card.Text>
                          {posts[key].description}
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer>
                        {posts[key].tags.map((tag) => (
                          <small key={tag} className="text-muted">#{tag}</small>
                        ))}
                      </Card.Footer>
                    </Card>
                  </Col>
                </Row>
              ))}
            </div>
          </div>
        </>
      )}
    </Container>
  );
}
