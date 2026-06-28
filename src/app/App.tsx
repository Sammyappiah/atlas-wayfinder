import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Outcomes } from "./components/Outcomes";
import { Services } from "./components/Services";
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
      <Services />
      <Footer />
    </div>
  );
}
