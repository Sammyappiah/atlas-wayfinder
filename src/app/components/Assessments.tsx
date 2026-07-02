import { motion } from "motion/react";

const assessments = [
  {
    icon: (
      <svg viewBox="0 0 36 36" fill="none" className="w-7 h-7">
        <circle cx="18" cy="18" r="13" stroke="#C8A55A" strokeWidth="1.2" />
        <path d="M12 18l4 4 8-8" stroke="#C8A55A" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "IELTS Readiness Assessment",
    description:
      "Evaluate your current English level and estimate the pathway to the required IELTS score.",
    cta: "Begin assessment",
    duration: "20 minutes",
  },
  {
    icon: (
      <svg viewBox="0 0 36 36" fill="none" className="w-7 h-7">
        <rect x="7" y="9" width="22" height="18" rx="1" stroke="#C8A55A" strokeWidth="1.2" />
        <path d="M12 15h12M12 19h8M12 23h6" stroke="#C8A55A" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
    title: "Study Abroad Readiness",
    description:
      "Assess language, academic preparation and confidence for studying internationally.",
    cta: "Begin assessment",
    duration: "25 minutes",
  },
  {
    icon: (
      <svg viewBox="0 0 36 36" fill="none" className="w-7 h-7">
        <path d="M18 6l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" stroke="#C8A55A" strokeWidth="1.2" strokeLinejoin="round" />
      </svg>
    ),
    title: "Professional English Assessment",
    description:
      "Evaluate communication skills for interviews, presentations and international workplaces.",
    cta: "Begin assessment",
    duration: "20 minutes",
  },
  {
    icon: (
      <svg viewBox="0 0 36 36" fill="none" className="w-7 h-7">
        <rect x="8" y="12" width="20" height="14" rx="1" stroke="#C8A55A" strokeWidth="1.2" />
        <path d="M13 12V9a2 2 0 012-2h6a2 2 0 012 2v3" stroke="#C8A55A" strokeWidth="1.2" />
        <path d="M18 17v4M16 19h4" stroke="#C8A55A" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
    title: "Learning Profile Assessment",
    description:
      "Identify learning strengths, challenges and evidence-based strategies for dyslexia, ADHD and other differences.",
    cta: "Begin assessment",
    duration: "30 minutes",
  },
];

export function Assessments() {
  return (
    <section
      id="assessments"
      className="py-28 md:py-36 overflow-hidden"
      style={{ backgroundColor: "#0F172A" }}
    >
      <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-16">
        {/* Header */}
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-10 h-px" style={{ backgroundColor: "#C8A55A" }} />
            <span
              className="text-xs uppercase tracking-[0.22em]"
              style={{ color: "#C8A55A" }}
            >
              Assessment First
            </span>
            <div className="w-10 h-px" style={{ backgroundColor: "#C8A55A" }} />
          </div>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 400,
              color: "#FAF7F0",
            }}
          >
            Choose the right pathway
            <br />
            <em>by understanding your current position</em>
          </h2>
          <p
            className="mt-4 leading-relaxed"
            style={{ color: "rgba(250, 247, 240, 0.6)", fontSize: "1.0625rem" }}
          >
            Identifying your readiness first ensures the programme you select is
            the one that advances your study, work and relocation plans.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {assessments.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group p-8 flex flex-col gap-5 transition-all duration-300"
              style={{
                border: "1px solid rgba(200, 165, 90, 0.15)",
                backgroundColor: "rgba(250, 247, 240, 0.03)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(200, 165, 90, 0.4)";
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  "rgba(200, 165, 90, 0.04)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(200, 165, 90, 0.15)";
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  "rgba(250, 247, 240, 0.03)";
              }}
            >
              <div className="flex items-start justify-between">
                <div>{a.icon}</div>
                <div
                  className="text-xs uppercase tracking-widest px-2.5 py-1"
                  style={{
                    border: "1px solid rgba(200, 165, 90, 0.25)",
                    color: "rgba(200, 165, 90, 0.7)",
                    letterSpacing: "0.12em",
                  }}
                >
                  {a.duration}
                </div>
              </div>

              <div>
                <div
                  className="w-8 h-px mb-4"
                  style={{ backgroundColor: "#C8A55A" }}
                />
                <h3
                  className="mb-2"
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    color: "#FAF7F0",
                    fontSize: "1.35rem",
                    fontWeight: 500,
                  }}
                >
                  {a.title}
                </h3>
                <p
                  className="leading-relaxed text-sm"
                  style={{ color: "rgba(250, 247, 240, 0.6)" }}
                >
                  {a.description}
                </p>
              </div>

              <div className="mt-auto pt-5" style={{ borderTop: "1px solid rgba(200,165,90,0.12)" }}>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-3 text-sm uppercase tracking-widest transition-all duration-300 px-6 py-3"
                  style={{
                    backgroundColor: "rgba(200, 165, 90, 0.12)",
                    color: "#C8A55A",
                    border: "1px solid rgba(200, 165, 90, 0.25)",
                    letterSpacing: "0.12em",
                    fontWeight: 600,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "#C8A55A";
                    (e.currentTarget as HTMLElement).style.color = "#0F172A";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(200, 165, 90, 0.12)";
                    (e.currentTarget as HTMLElement).style.color = "#C8A55A";
                  }}
                >
                  {a.cta}
                  <svg className="w-3.5 h-3.5" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p
            className="max-w-2xl leading-relaxed text-sm"
            style={{ color: "rgba(250, 247, 240, 0.7)", fontWeight: 400 }}
          >
            Start with an assessment so you can choose a programme that aligns
            with your current readiness and long-term international goals.
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
            Start with an assessment
          </a>
        </div>
      </div>
    </section>
  );
}
