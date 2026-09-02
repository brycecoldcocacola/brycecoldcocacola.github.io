import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Education from "./components/Education";

export default function App() {
  return (
    <>
      <div className="ambient" aria-hidden="true" />
      <main>
        <Hero />
        <Experience />
        <Education />
      </main>
    </>
  );
}
