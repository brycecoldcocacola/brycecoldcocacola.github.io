import React, { Suspense, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./App.scss";

import Home from "./home/Home";
const About = React.lazy(() => import('./about/About'));
const Blog = React.lazy(() => import('./blog/Blog'));
const Experiences = React.lazy(() => import('./experiences/Experiences'));

export default function App() {
  const [cls, setClass] = useState("");

  const handleScroll = () => {
    setClass(window.pageYOffset > 10 ? "border-bottom" : "");
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Navbar collapseOnSelect expand="sm" fixed="top" className={`bg-white ${cls}`}>
        <Navbar.Brand onClick={() => scrollTo('home')}>Bryce Anglin</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link onClick={() => scrollTo('home')}>Home</Nav.Link>
            <Nav.Link onClick={() => scrollTo('about')}>About</Nav.Link>
            <Nav.Link onClick={() => scrollTo('blog')}>Blog</Nav.Link>
            <Nav.Link onClick={() => scrollTo('experience')}>Experience</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div style={{ paddingTop: '56px' }}>
        <div id="home">
          <Home />
        </div>
        <Suspense fallback={<div className="p-4">Loading...</div>}>
          <div id="about"><About /></div>
        </Suspense>
        <Suspense fallback={<div className="p-4">Loading...</div>}>
          <div id="blog"><Blog /></div>
        </Suspense>
        <Suspense fallback={<div className="p-4">Loading...</div>}>
          <div id="experience"><Experiences /></div>
        </Suspense>
      </div>
    </>
  );
}
