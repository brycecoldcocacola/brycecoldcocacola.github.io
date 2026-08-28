import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <div className="ambient" aria-hidden="true" />
      <Nav />
      <main>
        <Hero />
        <Experience />
        <Education />
        <Skills />
      </main>
      <Footer />
    </>
  );
}
