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
  const [menuVisible, setMenuVisible] = useState(false);
  const [active, setActive] = useState<string>("home");

  const handleNavClick = (e: any, hash: string) => {
    e?.preventDefault?.();
    const id = hash.startsWith("#") ? hash.slice(1) : hash;
    const el = document.getElementById(id);

    const doScroll = () => {
      if (!el) return;
      const nav = document.querySelector("nav");
      const offset = (nav?.clientHeight ?? 80) + 16; // extra breathing room
      const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: "smooth" });

      // after scrolling starts, move focus to the section for keyboard users
      // set a short timeout to allow smooth scroll to begin
      setTimeout(() => {
        try {
          el.setAttribute("tabindex", "-1");
          el.focus({ preventScroll: true } as any);
          // apply a temporary focus outline
          const prevOutline = el.style.outline;
          const prevBoxShadow = el.style.boxShadow;
          el.style.boxShadow = "0 0 0 4px rgba(200,165,90,0.12)";
          setTimeout(() => {
            el.style.boxShadow = prevBoxShadow || "";
            if (prevOutline) el.style.outline = prevOutline;
          }, 900);
        } catch (err) {
          /* ignore focus errors */
        }
      }, 380);
    };

    if (mobileOpen) {
      // close menu first, then scroll after transition
      setMobileOpen(false);
      setTimeout(() => doScroll(), 240);
    } else {
      doScroll();
    }
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Manage mount/unmount for menu to allow transition out
  useEffect(() => {
    if (mobileOpen) setMenuVisible(true);
    else {
      const t = setTimeout(() => setMenuVisible(false), 260);
      return () => clearTimeout(t);
    }
  }, [mobileOpen]);

  // Lock body scroll when mobile menu is open and restore when closed
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Update active nav item on scroll
  useEffect(() => {
    const ids = ["home", "services", "about", "assessments", "faq", "contact"];
    const handler = () => {
      const nav = document.querySelector("nav");
      const offset = (nav?.clientHeight ?? 80) + 16;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
        if (window.pageYOffset >= top - 8) {
          current = id;
        }
      }
      setActive(current);
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
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
                      color: active === link.toLowerCase() ? "#C8A55A" : "rgba(250, 247, 240, 0.75)",
                      fontWeight: active === link.toLowerCase() ? 700 : 500,
                    }}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLElement).style.color = "#C8A55A")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLElement).style.color =
                        active === link.toLowerCase() ? "#C8A55A" : "rgba(250, 247, 240, 0.75)")
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

        {menuVisible && (
          <div
            id="mobile-menu"
            className="lg:hidden"
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: "100%",
              backgroundColor: "#0F172A",
              borderTop: "1px solid rgba(200, 165, 90, 0.12)",
              boxShadow: "0 10px 40px rgba(2,6,23,0.6)",
              padding: "12px",
              zIndex: 60,
              transition: "opacity 260ms ease, transform 260ms ease",
              transform: mobileOpen ? "translateY(0)" : "translateY(-8px)",
              opacity: mobileOpen ? 1 : 0,
            }}
          >
            <ul className="flex flex-col gap-6" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm uppercase tracking-widest block py-3"
                    style={{
                      color: active === link.toLowerCase() ? "#C8A55A" : "rgba(250, 247, 240, 0.95)",
                      letterSpacing: "0.12em",
                      fontWeight: 700,
                      paddingLeft: 12,
                      paddingRight: 12,
                    }}
                    onClick={(e) => handleNavClick(e, `#${link.toLowerCase()}`)}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
            <div style={{ marginTop: 32, paddingLeft: 12, paddingRight: 12 }}>
              <a
                href="#contact"
                className="inline-flex w-full justify-center px-6 py-3 text-center text-sm uppercase tracking-widest"
                style={{
                  backgroundColor: "#C8A55A",
                  color: "#0F172A",
                  letterSpacing: "0.12em",
                  fontWeight: 600,
                }}
                onClick={(e) => handleNavClick(e, "#contact")}
              >
                Start Your Global Plan
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
