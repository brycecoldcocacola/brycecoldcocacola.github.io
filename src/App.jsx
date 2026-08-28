import "./App.scss";

import Home from "./home/Home";
import ParallelDomain from "./parallel-domain/ParallelDomain";
import Tempo from "./tempo/Tempo";
import Aerospace from "./aerospace/Aerospace";
import Education from "./education/Education";

export default function App() {
  return (
    <main className="app-scroll">
      <Home />
      <ParallelDomain />
      <Tempo />
      <Aerospace />
      <Education />
    </main>
  );
}
