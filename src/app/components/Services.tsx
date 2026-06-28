import { motion } from "motion/react";

const services = [
  {
    title: "IELTS Preparation",
    subtitle: "Band 6.5 – 8.5",
    description:
      "Structured coaching across all four IELTS components with targeted exam strategy, timed practice and personalised feedback from a specialist coach.",
    tag: "Most Popular",
  },
  {
    title: "Academic English",
    subtitle: "University Level",
    description:
      "Essay writing, critical analysis, research skills and academic register for students preparing to study at British and international universities.",
    tag: null,
  },
  {
    title: "University Preparation",
    subtitle: "Admissions Support",
    description:
      "Personal statement coaching, interview preparation and English language development tailored to specific university admission requirements.",
    tag: null,
  },
  {
    title: "Professional English",
    subtitle: "Career Development",
    description:
      "Business writing, presentation skills, email communication and workplace English for professionals in international environments.",
    tag: null,
  },
  {
    title: "Corporate Training",
    subtitle: "Team & Group",
    description:
      "Bespoke English training programmes for international teams and businesses — delivered online or in-house across time zones worldwide.",
    tag: null,
  },
  {
    title: "Interview Preparation",
    subtitle: "Job & University",
    description:
      "Mock interviews, spoken English coaching and confidence-building for high-stakes university and professional interview situations.",
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
              Premium English
              <br />
              <em>Programmes</em>
            </h2>
          </div>
          <p
            className="max-w-sm leading-relaxed text-sm"
            style={{ color: "#6B7280", fontWeight: 400 }}
          >
            Every programme is tailored to the individual student or
            professional, delivered online and available worldwide.
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
                  Enquire
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
      </div>
    </section>
  );
}
