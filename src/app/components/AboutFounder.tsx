import { motion } from "motion/react";

const FOUNDER_IMG =
  "https://images.unsplash.com/photo-1680001370835-14091dcc05f3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&w=800&h=1000&auto=format";

const credentials = [
  { label: "Qualification", value: "Founder & Director" },
  { label: "Specialisation", value: "Specialist Learning Support" },
  { label: "Background", value: "Therapist & Counsellor" },
  { label: "Language", value: "Native British English" },
];

export function AboutFounder() {
  return (
    <section
      className="py-28 md:py-36 overflow-hidden"
      style={{ backgroundColor: "#0F172A" }}
    >
      <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-28 items-center">
          {/* Left — Image */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Background text */}
            <div
              className="absolute -left-4 top-1/2 -translate-y-1/2 select-none pointer-events-none"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(6rem, 12vw, 14rem)",
                fontWeight: 300,
                color: "rgba(200, 165, 90, 0.06)",
                lineHeight: 1,
                letterSpacing: "-0.05em",
                zIndex: 0,
              }}
            >
              ATLAS
            </div>

            <div className="relative" style={{ zIndex: 1 }}>
              {/* Decorative lines */}
              <div
                className="absolute -top-4 -left-4 w-24 h-24"
                style={{
                  borderTop: "1px solid rgba(200, 165, 90, 0.4)",
                  borderLeft: "1px solid rgba(200, 165, 90, 0.4)",
                }}
              />

              <div
                className="overflow-hidden"
                style={{
                  border: "1px solid rgba(200, 165, 90, 0.2)",
                  padding: "10px",
                }}
              >
                <div style={{ aspectRatio: "4/5", overflow: "hidden" }}>
                  <img
                    src={FOUNDER_IMG}
                    alt="Founder of Atlas Wayfinder"
                    className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(15,23,42,0.4) 0%, transparent 50%)",
                    }}
                  />
                </div>
              </div>

              <div
                className="absolute -bottom-4 -right-4 w-24 h-24"
                style={{
                  borderBottom: "1px solid rgba(200, 165, 90, 0.4)",
                  borderRight: "1px solid rgba(200, 165, 90, 0.4)",
                }}
              />
            </div>

            {/* Stats card */}
            <div
              className="absolute bottom-8 -right-6 hidden lg:block p-5 min-w-[160px]"
              style={{
                backgroundColor: "#C8A55A",
                zIndex: 2,
              }}
            >
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "2.25rem",
                  fontWeight: 400,
                  color: "#0F172A",
                  lineHeight: 1,
                }}
              >
                10+
              </div>
              <div
                className="text-xs mt-1 uppercase tracking-widest"
                style={{ color: "#0F172A", opacity: 0.7, letterSpacing: "0.15em" }}
              >
                Years teaching
              </div>
            </div>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div
                className="w-10 h-px"
                style={{ backgroundColor: "#C8A55A" }}
              />
              <span
                className="text-xs uppercase tracking-[0.22em]"
                style={{ color: "#C8A55A" }}
              >
                Meet Your Coach
              </span>
            </div>

            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 400,
                color: "#FAF7F0",
                fontSize: "clamp(2.25rem, 3.5vw, 3.5rem)",
                lineHeight: 1.1,
              }}
            >
              British Expertise,
              <br />
              <em style={{ color: "#C8A55A" }}>International Vision</em>
            </h2>

            <p
              className="mt-6 mb-8 leading-relaxed"
              style={{
                color: "rgba(250, 247, 240, 0.65)",
                fontSize: "1.0625rem",
                fontWeight: 400,
              }}
            >
              Sammy is a qualified British educator, therapist and Specialist
              Learning Support Practitioner with over a decade of experience
              helping students and professionals from around the world achieve
              their English language goals.
            </p>

            <p
              className="mb-10 leading-relaxed"
              style={{
                color: "rgba(250, 247, 240, 0.65)",
                fontSize: "1.0625rem",
                fontWeight: 400,
              }}
            >
              With a deep understanding of how people learn languages — and the
              psychological barriers that hold them back — Sammy combines
              academic rigour with genuine warmth to create transformative
              results for every client.
            </p>

            {/* Credentials grid */}
            <div
              className="grid grid-cols-2 gap-4 mb-10 pt-8"
              style={{ borderTop: "1px solid rgba(200, 165, 90, 0.15)" }}
            >
              {credentials.map((c) => (
                <div key={c.label}>
                  <div
                    className="text-xs uppercase tracking-widest mb-1"
                    style={{ color: "#C8A55A", letterSpacing: "0.15em" }}
                  >
                    {c.label}
                  </div>
                  <div
                    className="text-sm"
                    style={{ color: "#FAF7F0", fontWeight: 500 }}
                  >
                    {c.value}
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 text-sm uppercase tracking-widest transition-all duration-300"
              style={{
                border: "1px solid rgba(200, 165, 90, 0.5)",
                color: "#FAF7F0",
                letterSpacing: "0.12em",
                fontWeight: 500,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  "rgba(200, 165, 90, 0.1)";
                (e.currentTarget as HTMLElement).style.borderColor = "#C8A55A";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  "transparent";
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(200, 165, 90, 0.5)";
              }}
            >
              Book a Consultation
              <svg
                className="w-4 h-4"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
