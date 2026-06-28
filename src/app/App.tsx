import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Outcomes } from "./components/Outcomes";
import { AboutFounder } from "./components/AboutFounder";
import { Services } from "./components/Services";
import { Assessments } from "./components/Assessments";
import { FAQ } from "./components/FAQ";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    /* MARKER-MAKE-KIT-INVOKED */
    <div
      style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        minWidth: "320px",
        overflowX: "hidden",
      }}
    >
      <Navigation />
      <Hero />
      <Outcomes />
      <AboutFounder />
      <Services />
      <Assessments />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
