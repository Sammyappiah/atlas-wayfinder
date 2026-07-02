export function Footer() {
  const navLinks = [
    { label: "About", href: "#about" },
    { label: "IELTS", href: "#ielts" },
    { label: "Corporate", href: "#corporate" },
    { label: "Assessments", href: "#assessments" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      label: "Instagram",
      href: "https://instagram.com",
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com",
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
    {
      label: "Facebook",
      href: "https://facebook.com",
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
        </svg>
      ),
    },
  ];

  return (
    <footer style={{ backgroundColor: "#0B1120" }}>
      {/* Top strip */}
      <div
        className="h-px w-full"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(200,165,90,0.4), transparent)",
        }}
      />

      {/* CTA Banner */}
      <div
        className="py-16 px-8 md:px-12 lg:px-16"
        style={{ borderBottom: "1px solid rgba(200, 165, 90, 0.1)" }}
      >
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                color: "#FAF7F0",
                fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)",
                fontWeight: 400,
              }}
            >
              Ready to Open International Doors?
            </h3>
            <p
              className="mt-2 text-sm"
              style={{ color: "rgba(250, 247, 240, 0.5)" }}
            >
              Book your free consultation today. No commitment required.
            </p>
          </div>
          <a
            href="#contact"
            className="px-8 py-4 text-sm uppercase tracking-widest whitespace-nowrap transition-all duration-300 flex-shrink-0"
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
            Book Free Consultation
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-7 h-7 flex items-center justify-center"
                style={{ border: "1px solid #C8A55A" }}
              >
                <svg viewBox="0 0 32 32" fill="none" className="w-4 h-4">
                  <circle cx="16" cy="16" r="10" stroke="#C8A55A" strokeWidth="1" />
                  <path d="M6 16 Q16 8 26 16 Q16 24 6 16Z" stroke="#C8A55A" strokeWidth="1" fill="none" />
                  <line x1="16" y1="6" x2="16" y2="26" stroke="#C8A55A" strokeWidth="0.8" />
                  <line x1="6" y1="16" x2="26" y2="16" stroke="#C8A55A" strokeWidth="0.8" />
                </svg>
              </div>
              <span
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  color: "#FAF7F0",
                  letterSpacing: "0.18em",
                  fontWeight: 600,
                  fontSize: "0.8125rem",
                  textTransform: "uppercase",
                }}
              >
                Atlas Wayfinder
              
              </span>
            </div>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "rgba(250, 247, 240, 0.45)", maxWidth: "280px" }}
            >
              British-led English coaching helping ambitious students and
              professionals access international education and career
              advancement worldwide.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center transition-all duration-200"
                  style={{
                    border: "1px solid rgba(200, 165, 90, 0.2)",
                    color: "rgba(200, 165, 90, 0.5)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "#C8A55A";
                    (e.currentTarget as HTMLElement).style.color = "#C8A55A";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(200,165,90,0.2)";
                    (e.currentTarget as HTMLElement).style.color = "rgba(200,165,90,0.5)";
                  }}
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div
              className="text-xs uppercase tracking-[0.2em] mb-5"
              style={{ color: "#C8A55A" }}
            >
              Navigation
            </div>
            <div className="flex flex-col gap-3">
              {navLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-sm transition-colors duration-200"
                  style={{ color: "rgba(250, 247, 240, 0.5)" }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLElement).style.color = "#FAF7F0")
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLElement).style.color =
                      "rgba(250, 247, 240, 0.5)")
                  }
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Programmes */}
          <div>
            <div
              className="text-xs uppercase tracking-[0.2em] mb-5"
              style={{ color: "#C8A55A" }}
            >
              Programmes
            </div>
            <div className="flex flex-col gap-3">
              {["IELTS Preparation", "Academic English", "University Prep", "Professional English", "Corporate Training"].map((p) => (
                <a
                  key={p}
                  href="#contact"
                  className="text-sm transition-colors duration-200"
                  style={{ color: "rgba(250, 247, 240, 0.5)" }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLElement).style.color = "#FAF7F0")
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLElement).style.color =
                      "rgba(250, 247, 240, 0.5)")
                  }
                >
                  {p}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div
              className="text-xs uppercase tracking-[0.2em] mb-5"
              style={{ color: "#C8A55A" }}
            >
              Contact
            </div>
            <div className="flex flex-col gap-4">
              <a
                href="https://wa.me/447947629518"
                className="text-sm transition-colors duration-200"
                style={{ color: "rgba(250, 247, 240, 0.5)" }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "#FAF7F0")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color =
                    "rgba(250, 247, 240, 0.5)")
                }
              >
                +44 7947 629 518
              </a>
              <a
                href="mailto:hello@atlaswayfinder.com"
                className="text-sm transition-colors duration-200 break-all"
                style={{ color: "rgba(250, 247, 240, 0.5)" }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "#FAF7F0")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color =
                    "rgba(250, 247, 240, 0.5)")
                }
              >
                hello@atlaswayfinder.com
              </a>
              <div
                className="text-xs"
                style={{ color: "rgba(250, 247, 240, 0.35)" }}
              >
                Online · Worldwide
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-16 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid rgba(200, 165, 90, 0.08)" }}
        >
          <div
            className="text-xs"
            style={{ color: "rgba(250, 247, 240, 0.3)" }}
          >
            © {new Date().getFullYear()} Atlas Wayfinder
              . All rights reserved.
          </div>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms of Service"].map((l) => (
              <a
                key={l}
                href="#"
                className="text-xs transition-colors duration-200"
                style={{ color: "rgba(250, 247, 240, 0.3)" }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color =
                    "rgba(250, 247, 240, 0.7)")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color =
                    "rgba(250, 247, 240, 0.3)")
                }
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
