import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../../assets/logo.png";

const navLinks = [
  "Home",
  "Services",
  "About",
  "Assessments",
  "FAQ",
  "Contact",
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (e: any, hash: string) => {
    e.preventDefault?.();
    const id = hash.startsWith("#") ? hash.slice(1) : hash;
    const el = document.getElementById(id);
    if (el) {
      const nav = document.querySelector("nav");
      const offset = (nav?.clientHeight ?? 80) + 12;
      const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled ? "rgba(15, 23, 42, 0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(200, 165, 90, 0.15)" : "none",
      }}
    >
      <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-16">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="flex items-center gap-3" onClick={(e) => handleNavClick(e, "#home")}>
            <img src={Logo} alt="Atlas Wayfinder" className="h-12 w-auto" />
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
                  fontSize: "0.65rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                }}
              >
                Study • Work • Explore Abroad
              </div>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-10">
            <ul className="flex items-center gap-10" aria-label="Primary navigation">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="transition-colors duration-200 text-sm uppercase tracking-widest"
                    style={{
                      color: "rgba(250, 247, 240, 0.75)",
                      fontWeight: 500,
                    }}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLElement).style.color = "#C8A55A")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLElement).style.color =
                        "rgba(250, 247, 240, 0.75)")
                    }
                    onClick={(e) => handleNavClick(e, `#${link.toLowerCase()}`)}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
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
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  "#D4B472";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  "#C8A55A";
              }}
            >
              Start Your Global Plan
            </a>
          </div>

          <button
            type="button"
            className="lg:hidden p-2"
            style={{ color: "#FAF7F0" }}
            onClick={() => setMobileOpen((open) => !open)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {mobileOpen && (
          <div
            id="mobile-menu"
            className="lg:hidden py-6 border-t"
            style={{ borderColor: "rgba(200, 165, 90, 0.2)" }}
          >
            <ul className="flex flex-col gap-5" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm uppercase tracking-widest"
                    style={{
                      color: "rgba(250, 247, 240, 0.85)",
                      letterSpacing: "0.12em",
                      fontWeight: 500,
                    }}
                    onClick={(e) => handleNavClick(e, `#${link.toLowerCase()}`)}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="mt-4 inline-flex w-full justify-center px-6 py-3 text-center text-sm uppercase tracking-widest"
              style={{
                backgroundColor: "#C8A55A",
                color: "#0F172A",
                letterSpacing: "0.12em",
                fontWeight: 600,
              }}
              onClick={() => setMobileOpen(false)}
            >
              Start Your Global Plan
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
