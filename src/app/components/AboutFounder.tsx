import { motion } from "motion/react";

const highlights = [
  "British-led education specialists",
  "10+ years international teaching experience",
  "Specialist learning support expertise",
  "IELTS and university preparation",
  "Hundreds of learners supported internationally",
];

export function AboutFounder() {
  return (
    <section
      className="py-28 md:py-36 overflow-hidden"
      style={{ backgroundColor: "#0F172A" }}
    >
      <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-16">
        <div className="relative">
          <div
            className="absolute left-0 top-1/2 -translate-y-1/2 select-none pointer-events-none"
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

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ position: "relative", zIndex: 1 }}
          >
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-10 h-px"
                  style={{ backgroundColor: "#C8A55A" }}
                />
                <span
                  className="text-xs uppercase tracking-[0.22em]"
                  style={{ color: "#C8A55A" }}
                >
                  Why Atlas Wayfinder?
                </span>
              </div>

              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontWeight: 400,
                  color: "#FAF7F0",
                  fontSize: "clamp(2rem, 3.2vw, 3rem)",
                  lineHeight: 1.08,
                }}
              >
                Why Atlas Wayfinder?
              </h2>

              <p
                className="mt-6 mb-8 leading-relaxed"
                style={{
                  color: "rgba(250, 247, 240, 0.75)",
                  fontSize: "1.0625rem",
                  fontWeight: 400,
                }}
              >
                Atlas Wayfinder helps ambitious students and professionals access international opportunities through expert English coaching, strategic guidance and personalised learning pathways. Our approach combines British educational standards with practical international experience to help clients achieve real-world outcomes.
              </p>
            </div>

            {/* Credibility cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
              {highlights.map((h, idx) => (
                <motion.div
                  key={h}
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.06 }}
                  className="p-5"
                  style={{
                    background: idx === 0 ? "linear-gradient(180deg, rgba(200,165,90,0.06), transparent)" : "transparent",
                    border: "1px solid rgba(250,247,240,0.04)",
                    borderRadius: 8,
                  }}
                >
                  <div
                    className="text-xs uppercase tracking-widest mb-2"
                    style={{ color: "#C8A55A", letterSpacing: "0.12em" }}
                  >
                    {h.split(" ").slice(0,3).join(" ")}
                  </div>
                  <div className="text-sm" style={{ color: "#FAF7F0", fontWeight: 600 }}>
                    {h}
                  </div>
                </motion.div>
              ))}
            </div>

            <p
              className="mb-10 leading-relaxed max-w-2xl"
              style={{
                color: "rgba(250, 247, 240, 0.68)",
                fontSize: "1rem",
                fontWeight: 400,
              }}
            >
              Whether your goal is university admission, career progression or greater confidence communicating internationally, Atlas Wayfinder provides structured guidance designed around your ambitions.
            </p>

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
              Start Your Global Plan
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
