import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../../assets/logo.png";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

const navLinks = [
  "About",
  "IELTS",
  "Corporate",
  "Resources",
  "YouTube",
  "Contact",
];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled ? "rgba(15, 23, 42, 0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(200, 165, 90, 0.15)" : "none",
      }}
    >
      <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-16">
        <div className="flex items-center justify-between h-20">
{/* Logo */}
<a href="#" className="flex items-center gap-4">
<img
  src={Logo}
  alt="Atlas Wayfinder"
  className="h-12 w-auto"
/>
  <div>
    <div
      style={{
        color: "#FAF7F0",
        fontWeight: 700,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        fontSize: "0.9rem",
      }}
    >
      Atlas Wayfinder
              
    </div>

    <div
      style={{
        color: "#C8A55A",
        fontSize: "0.7rem",
        letterSpacing: "0.18em",
        textTransform: "uppercase",
      }}
    >
      English That Opens International Doors
    </div>
  </div>
</a>
          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link}
href={
  link === "YouTube"
    ? "https://youtube.com/@atlaswayfinderHQ"
    : `#${link.toLowerCase()}`
}
target={link === "YouTube" ? "_blank" : undefined}
rel={link === "YouTube" ? "noopener noreferrer" : undefined}
                className="transition-colors duration-200 text-sm uppercase tracking-widest"
                style={{
                  color: "rgba(250, 247, 240, 0.7)",
                  letterSpacing: "0.12em",
                  fontWeight: 500,
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "#C8A55A")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color =
                    "rgba(250, 247, 240, 0.7)")
                }
              >
                {link}
              </a>
            ))}
            <a
              href="#contact"
              className="px-6 py-2.5 text-sm uppercase tracking-widest transition-all duration-300"
              style={{
                backgroundColor: "#C8A55A",
                color: "#0F172A",
                letterSpacing: "0.12em",
                fontWeight: 600,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "#D4B472";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "#C8A55A";
              }}
            >
              Book Consultation
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2"
            style={{ color: "#FAF7F0" }}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div
            className="lg:hidden py-6 border-t"
            style={{ borderColor: "rgba(200, 165, 90, 0.2)" }}
          >
            <div className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-sm uppercase tracking-widest"
                  style={{
                    color: "rgba(250, 247, 240, 0.8)",
                    letterSpacing: "0.12em",
                    fontWeight: 500,
                  }}
                  onClick={() => setMobileOpen(false)}
                >
                  {link}
                </a>
              ))}
              <a
                href="#contact"
                className="px-6 py-3 text-center text-sm uppercase tracking-widest mt-2"
                style={{
                  backgroundColor: "#C8A55A",
                  color: "#0F172A",
                  letterSpacing: "0.12em",
                  fontWeight: 600,
                }}
                onClick={() => setMobileOpen(false)}
              >
                Book Consultation
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
