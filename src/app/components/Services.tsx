import { motion } from "motion/react";

const services = [
  {
    title: "IELTS Preparation",
    subtitle: "Score attainment",
    description:
      "Helping students achieve the scores required for university, work and migration.",
    tag: "Most Popular",
  },
  {
    title: "English for Professionals",
    subtitle: "Career fluency",
    description:
      "Advanced English coaching for interviews, presentations, workplace communication and career progression.",
    tag: null,
  },
  {
    title: "University Preparation",
    subtitle: "Academic readiness",
    description:
      "Support with applications, academic English, interviews and confidence before studying abroad.",
    tag: null,
  },
  {
    title: "Study Abroad Guidance",
    subtitle: "Global entry",
    description:
      "Helping students prepare linguistically and academically for international education.",
    tag: null,
  },
  {
    title: "Specialist Learning Support",
    subtitle: "Structured strategies",
    description:
      "Evidence-based support for learners with dyslexia, ADHD and other learning differences.",
    tag: null,
  },
  {
    title: "International Coaching",
    subtitle: "Mobility planning",
    description:
      "Personalised coaching for people planning to study, work or relocate abroad.",
    tag: null,
  },
];

export function Services() {
  return (
    <section
      id="ielts"
      className="py-28 md:py-36"
      style={{ backgroundColor: "#FAF7F0" }}
    >
      <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-16">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-4 mb-6">
              <div
                className="w-10 h-px"
                style={{ backgroundColor: "#C8A55A" }}
              />
              <span
                className="text-xs uppercase tracking-[0.22em]"
                style={{ color: "#C8A55A" }}
              >
                Our Programmes
              </span>
            </div>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 400,
                color: "#0F172A",
              }}
            >
              International Programmes
              <br />
              <em>designed for study, work and relocation</em>
            </h2>
          </div>
          <p
            className="max-w-sm leading-relaxed text-sm"
            style={{ color: "#6B7280", fontWeight: 400 }}
          >
            Each service is designed for students and professionals preparing to
            study, work and relocate abroad.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative p-8 flex flex-col transition-all duration-400"
              style={{
                backgroundColor: i === 0 ? "#0F172A" : "#FFFFFF",
                border: `1px solid ${i === 0 ? "transparent" : "rgba(15, 23, 42, 0.08)"}`,
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                if (i !== 0) {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(200, 165, 90, 0.35)";
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 8px 40px rgba(200, 165, 90, 0.06)";
                }
              }}
              onMouseLeave={(e) => {
                if (i !== 0) {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(15, 23, 42, 0.08)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }
              }}
            >
              {/* Tag */}
              {s.tag && (
                <div
                  className="absolute top-6 right-6 px-3 py-1 text-xs uppercase tracking-widest"
                  style={{
                    backgroundColor: "rgba(200, 165, 90, 0.15)",
                    color: "#C8A55A",
                    letterSpacing: "0.12em",
                  }}
                >
                  {s.tag}
                </div>
              )}

              {/* Number */}
              <div
                className="text-xs tracking-widest mb-4"
                style={{
                  color:
                    i === 0
                      ? "rgba(200, 165, 90, 0.5)"
                      : "rgba(200, 165, 90, 0.4)",
                  fontWeight: 600,
                }}
              >
                0{i + 1}
              </div>

              {/* Gold line */}
              <div
                className="w-8 h-px mb-5 transition-all duration-300 group-hover:w-14"
                style={{ backgroundColor: "#C8A55A" }}
              />

              <h3
                className="mb-1"
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  color: i === 0 ? "#FAF7F0" : "#0F172A",
                  fontSize: "1.375rem",
                  fontWeight: 500,
                }}
              >
                {s.title}
              </h3>

              <div
                className="text-xs uppercase tracking-widest mb-4"
                style={{
                  color: "#C8A55A",
                  letterSpacing: "0.15em",
                }}
              >
                {s.subtitle}
              </div>

              <p
                className="leading-relaxed text-sm flex-1"
                style={{
                  color:
                    i === 0
                      ? "rgba(250, 247, 240, 0.6)"
                      : "#6B7280",
                  fontWeight: 400,
                }}
              >
                {s.description}
              </p>

              <div className="mt-6 pt-5" style={{ borderTop: `1px solid ${i === 0 ? "rgba(200,165,90,0.15)" : "rgba(15,23,42,0.07)"}` }}>
                <a
                  href="#contact"
                  className="flex items-center gap-2 text-xs uppercase tracking-widest transition-colors duration-200"
                  style={{
                    color: "#C8A55A",
                    letterSpacing: "0.15em",
                    fontWeight: 600,
                  }}
                >
                  Start Your Global Plan
                  <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2 6h8M7 3l3 3-3 3"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p
            className="max-w-2xl leading-relaxed text-sm"
            style={{ color: "#6B7280", fontWeight: 400 }}
          >
            Discuss your international goals with our team and explore the pathway
            that suits your study, work or relocation plans.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 text-sm uppercase tracking-widest transition-all duration-300"
            style={{
              backgroundColor: "#C8A55A",
              color: "#0F172A",
              letterSpacing: "0.12em",
              fontWeight: 600,
            }}
          >
            Discuss your international goals
          </a>
        </div>
      </div>
    </section>
  );
}
