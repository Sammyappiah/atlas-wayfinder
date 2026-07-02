import { SITE } from "../../config/site";

export function Footer() {
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

      {/* Main footer */}
      <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-16 py-20">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-14 lg:gap-20">
          {/* Column 1 */}
          <div>
            <div className="mb-5">
              <div
                className="text-xs uppercase tracking-[0.22em] mb-3"
                style={{ color: "#C8A55A" }}
              >
                {SITE.name}
              </div>
              <div
                className="text-[0.95rem] leading-snug"
                style={{ color: "#FAF7F0", maxWidth: "320px" }}
              >
                {SITE.tagline}
              </div>
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "rgba(250, 247, 240, 0.68)", maxWidth: "380px" }}
            >
              Helping students and professionals unlock international opportunities through expert English coaching,
              international education guidance and personalised support.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <div
              className="text-xs uppercase tracking-[0.22em] mb-5"
              style={{ color: "#C8A55A" }}
            >
              Services
            </div>
            <div className="flex flex-col gap-3">
              {[
                "IELTS Preparation",
                "Professional English",
                "University Preparation",
                "Study Abroad Guidance",
                "Specialist Learning Support",
                "International Coaching",
              ].map((service) => (
                <span
                  key={service}
                  className="text-sm leading-6"
                  style={{ color: "rgba(250, 247, 240, 0.68)" }}
                >
                  {service}
                </span>
              ))}
            </div>
          </div>

          {/* Column 3 */}
          <div>
            <div
              className="text-xs uppercase tracking-[0.22em] mb-5"
              style={{ color: "#C8A55A" }}
            >
              Contact
            </div>
            <div className="flex flex-col gap-4 text-sm">
              <a
                href={`mailto:${SITE.email}`}
                className="transition-colors duration-200"
                style={{ color: "rgba(250, 247, 240, 0.68)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#FAF7F0";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "rgba(250, 247, 240, 0.68)";
                }}
              >
                {SITE.email}
              </a>
              <a
                href={`https://wa.me/${SITE.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200"
                style={{ color: "rgba(250, 247, 240, 0.68)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#FAF7F0";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "rgba(250, 247, 240, 0.68)";
                }}
              >
                +{SITE.whatsapp}
              </a>
              {SITE.youtube ? (
                <a
                  href={SITE.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-200"
                  style={{ color: "rgba(250, 247, 240, 0.68)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#FAF7F0";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "rgba(250, 247, 240, 0.68)";
                  }}
                >
                  YouTube
                </a>
              ) : null}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-16 pt-6"
          style={{ borderTop: "1px solid rgba(200, 165, 90, 0.08)" }}
        >
          <div
            className="text-xs"
            style={{ color: "rgba(250, 247, 240, 0.35)" }}
          >
            © {SITE.name}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
