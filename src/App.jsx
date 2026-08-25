import React, { Suspense, useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "./App.scss";

import Home from "./home/Home";
const About = React.lazy(() => import('./about/About'));
const Blog = React.lazy(() => import('./blog/Blog'));
const Experiences = React.lazy(() => import('./experiences/Experiences'));

export default function App() {
  const [cls, setClass] = useState("");

  useEffect(() => {
    window.onscroll = () => {
      setClass(window.pageYOffset ? "border-bottom" : "");
    };
  }, []);

  return (
    <BrowserRouter>
      <Navbar collapseOnSelect expand="sm" fixed="top" className={`bg-white ${cls}`}>
        <Navbar.Brand as={Link} to="/">Bryce Anglin</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
            <Nav.Link as={Link} to="/experience">Experience</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes>
        <Route path="/about" element={
          <Suspense fallback={<div className="p-4">Loading...</div>}>
            <About />
          </Suspense>
        } />
        <Route path="/blog/*" element={
          <Suspense fallback={<div className="p-4">Loading...</div>}>
            <Blog />
          </Suspense>
        } />
        <Route path="/experience/*" element={
          <Suspense fallback={<div className="p-4">Loading...</div>}>
            <Experiences />
          </Suspense>
        } />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
