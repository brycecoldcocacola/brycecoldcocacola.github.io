import React, { Suspense } from "react";
import "./App.scss";

import Home from "./home/Home";
const About = React.lazy(() => import('./about/About'));
const Experiences = React.lazy(() => import('./experiences/Experiences'));

export default function App() {
  return (
    <>
      <div className="app-scroll">
        <Home />
        <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
          <About />
        </Suspense>
        <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
          <Experiences />
        </Suspense>
      </div>
    </>
  );
}
