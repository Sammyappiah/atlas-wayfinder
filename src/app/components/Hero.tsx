import { motion } from "motion/react";

const HERO_IMAGE =
  "/images/placeholder.jpg";

const CAMBRIDGE_IMG =
  "/images/placeholder.jpg";

const trustIndicators = [

  "Study Abroad",

  "Career Development",

  "IELTS Success",

  "British Coaching",

];

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: "#0F172A" }}
    >
      {/* Background texture — subtle Cambridge image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={CAMBRIDGE_IMG}
          alt=""
          className="w-full h-full object-cover opacity-[0.06]"
          style={{ objectPosition: "center 30%" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #0F172A 0%, rgba(15,23,42,0.85) 60%, rgba(15,23,42,0.95) 100%)",
          }}
        />
      </div>

      {/* Gold line accent top */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ backgroundColor: "rgba(200, 165, 90, 0.3)" }}
      />

      <div className="relative max-w-[1440px] mx-auto px-8 md:px-12 lg:px-16 w-full pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Overline */}
            <div className="flex items-center gap-4 mb-8">
              <div
                className="w-12 h-px"
                style={{ backgroundColor: "#C8A55A" }}
              />
              <span
                className="text-xs uppercase tracking-[0.25em]"
                style={{ color: "#C8A55A" }}
              >
                Study • Work • Explore Abroad
              </span>
            </div>

            <h1
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 400,
                lineHeight: 1.08,
                color: "#FAF7F0",
                fontSize: "clamp(3rem, 5.5vw, 5.5rem)",
              }}
            >
              Navigate international study,
              <br />
              work and travel
              <br />
              <em style={{ color: "#C8A55A", fontStyle: "italic" }}>
                with British guidance
              </em>
            </h1>

            <p
              className="mt-8 mb-10 leading-relaxed"
              style={{
                color: "rgba(250, 247, 240, 0.65)",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "1.0625rem",
                maxWidth: "480px",
                fontWeight: 400,
              }}
            >
              Atlas Wayfinder helps students and professionals study, work and
              explore abroad through English, combining British coaching,
              IELTS success planning and personalised international support.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#contact"
                className="px-8 py-4 text-sm uppercase tracking-widest text-center transition-all duration-300 group"
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
                Plan Your Global Path
              </a>
              <a
                href="#assessments"
                className="px-8 py-4 text-sm uppercase tracking-widest text-center transition-all duration-300"
                style={{
                  border: "1px solid rgba(200, 165, 90, 0.5)",
                  color: "#FAF7F0",
                  letterSpacing: "0.12em",
                  fontWeight: 500,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#C8A55A";
                  (e.currentTarget as HTMLElement).style.color = "#C8A55A";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(200, 165, 90, 0.5)";
                  (e.currentTarget as HTMLElement).style.color = "#FAF7F0";
                }}
              >
                Secure IELTS Success
              </a>
            </div>

            {/* Trust indicators */}
            <div
              className="pt-8 border-t"
              style={{ borderColor: "rgba(200, 165, 90, 0.15)" }}
            >
              <div className="grid grid-cols-2 gap-3">
                {trustIndicators.map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <div
                      className="w-4 h-4 flex items-center justify-center flex-shrink-0 rounded-full"
                      style={{
                        backgroundColor: "rgba(200, 165, 90, 0.15)",
                        border: "1px solid rgba(200, 165, 90, 0.4)",
                      }}
                    >
                      <svg
                        className="w-2.5 h-2.5"
                        viewBox="0 0 10 10"
                        fill="none"
                      >
                        <path
                          d="M2 5l2 2 4-4"
                          stroke="#C8A55A"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span
                      className="text-sm"
                      style={{
                        color: "rgba(250, 247, 240, 0.7)",
                        fontWeight: 400,
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Founder portrait */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="relative hidden lg:block"
          >
            {/* Globe decorative SVG */}
            <div
              className="absolute -top-8 -right-8 w-64 h-64 opacity-10"
              style={{ zIndex: 0 }}
            >
              <svg viewBox="0 0 200 200" fill="none">
                <circle
                  cx="100"
                  cy="100"
                  r="90"
                  stroke="#C8A55A"
                  strokeWidth="1"
                />
                <ellipse
                  cx="100"
                  cy="100"
                  rx="55"
                  ry="90"
                  stroke="#C8A55A"
                  strokeWidth="0.8"
                />
                <ellipse
                  cx="100"
                  cy="100"
                  rx="90"
                  ry="30"
                  stroke="#C8A55A"
                  strokeWidth="0.8"
                />
                <ellipse
                  cx="100"
                  cy="100"
                  rx="90"
                  ry="55"
                  stroke="#C8A55A"
                  strokeWidth="0.5"
                />
                <line
                  x1="10"
                  y1="100"
                  x2="190"
                  y2="100"
                  stroke="#C8A55A"
                  strokeWidth="0.5"
                />
                <line
                  x1="100"
                  y1="10"
                  x2="100"
                  y2="190"
                  stroke="#C8A55A"
                  strokeWidth="0.5"
                />
              </svg>
            </div>

            {/* Photo frame */}
            <div
              className="relative"
              style={{
                border: "1px solid rgba(200, 165, 90, 0.25)",
                padding: "12px",
              }}
            >
              <div className="overflow-hidden" style={{ aspectRatio: "4/5" }}>
                <img
                  src={HERO_IMAGE}
                  alt="Sammy — Founder & Director and English Coach"
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                />
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(15,23,42,0.5) 0%, transparent 50%)",
                  }}
                />
              </div>

              {/* Caption card */}
              <div
                className="absolute bottom-6 left-6 right-6 p-4"
                style={{ backgroundColor: "rgba(15, 23, 42, 0.92)" }}
              >
                <div
                  className="text-xs uppercase tracking-widest mb-1"
                  style={{ color: "#C8A55A", letterSpacing: "0.18em" }}
                >
                  Your Coach
                </div>
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    color: "#FAF7F0",
                    fontSize: "1.25rem",
                    fontWeight: 400,
                  }}
                >
                  Sammy
                </div>
                <div
                  className="text-xs mt-0.5"
                  style={{ color: "rgba(250,247,240,0.6)" }}
                >
                 British Educator • Therapist • International Learning Specialist
                </div>
              </div>

              {/* Corner accent */}
              <div
                className="absolute top-3 right-3 w-6 h-6"
                style={{
                  borderTop: "2px solid #C8A55A",
                  borderRight: "2px solid #C8A55A",
                }}
              />
              <div
                className="absolute bottom-3 left-3 w-6 h-6"
                style={{
                  borderBottom: "2px solid #C8A55A",
                  borderLeft: "2px solid #C8A55A",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2">
        <span
          className="text-xs uppercase tracking-widest"
          style={{ color: "rgba(200, 165, 90, 0.5)", letterSpacing: "0.2em" }}
        >
          Explore
        </span>
        <div
          className="w-px h-12"
          style={{
            background:
              "linear-gradient(to bottom, #C8A55A, transparent)",
            opacity: 0.4,
          }}
        />
      </div>
    </section>
  );
}
