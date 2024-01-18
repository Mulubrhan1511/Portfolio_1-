import React, { useEffect } from 'react'; // Add useEffect for loadFull
import { Container, Row, Col } from "react-bootstrap";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export const Blogs = () => {
  useEffect(() => {
    // Load particles configuration if needed (assuming a particles container)
    const particlesContainer = document.getElementById("connect");
    if (particlesContainer) {
      loadFull(particlesContainer);
    }
  }, []);

  return (
    <section className="contact" id="connect">
      <Container>
        <Row>
          <Col size={12}>
            <h1>Blogs</h1>
            <p>Explore my latest thoughts and insights.</p>
          </Col>
        </Row>

        <Row>
          {/* Blog posts will be rendered here */}
          <Col md={4}>
            <article className="blog-post">
              <h2>Blog Post Title 1</h2>
              <p>Brief excerpt of the blog post content...</p>
              <a href="#">Read More</a>
            </article>
          </Col>
          <Col md={4}>
            <article className="blog-post">
              <h2>Blog Post Title 2</h2>
              <p>Another blog post excerpt...</p>
              <a href="#">Read More</a>
            </article>
          </Col>
          <Col md={4}>
            <article className="blog-post">
              <h2>Blog Post Title 3</h2>
              <p>Yet another blog post excerpt...</p>
              <a href="#">Read More</a>
            </article>
          </Col>
        </Row>
      </Container>

      <Particles
        params={{
          // ... your particle configuration
        }}
      />
    </section>
  );
};
