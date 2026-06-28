import { motion } from "motion/react";

const outcomes = [
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <rect x="6" y="10" width="28" height="22" rx="1" stroke="#C8A55A" strokeWidth="1.2" />
        <path d="M12 10V8a2 2 0 012-2h12a2 2 0 012 2v2" stroke="#C8A55A" strokeWidth="1.2" />
        <path d="M14 22l3 3 7-7" stroke="#C8A55A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: "University Admission",
    description:
      "Gain entry to top British, American and international universities with confidence in your academic English.",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <circle cx="20" cy="20" r="14" stroke="#C8A55A" strokeWidth="1.2" />
        <path d="M20 12v8l5 3" stroke="#C8A55A" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M12 28l3-3" stroke="#C8A55A" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M28 28l-3-3" stroke="#C8A55A" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
    label: "IELTS Success",
    description:
      "Achieve your target band score and unlock visa applications, university offers and professional licences.",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <path d="M8 32V20l12-8 12 8v12" stroke="#C8A55A" strokeWidth="1.2" strokeLinejoin="round" />
        <rect x="15" y="24" width="10" height="8" stroke="#C8A55A" strokeWidth="1.2" />
        <path d="M14 16h12" stroke="#C8A55A" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
    label: "Career Advancement",
    description:
      "Command international boardrooms, interviews and presentations in fluent, professional British English.",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <circle cx="20" cy="20" r="13" stroke="#C8A55A" strokeWidth="1.2" />
        <ellipse cx="20" cy="20" rx="7" ry="13" stroke="#C8A55A" strokeWidth="1" />
        <path d="M7 20h26" stroke="#C8A55A" strokeWidth="1" strokeLinecap="round" />
        <path d="M9 14h22M9 26h22" stroke="#C8A55A" strokeWidth="0.8" strokeLinecap="round" />
      </svg>
    ),
    label: "Global Opportunities",
    description:
      "Open doors to study abroad programmes, international careers and life-changing opportunities worldwide.",
  },
];

export function Outcomes() {
  return (
    <section
      id="about"
      className="py-28 md:py-36"
      style={{ backgroundColor: "#FAF7F0" }}
    >
      <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-16">
        {/* Header */}
        <div className="max-w-2xl mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-px" style={{ backgroundColor: "#C8A55A" }} />
            <span
              className="text-xs uppercase tracking-[0.22em]"
              style={{ color: "#C8A55A" }}
            >
              Your Potential
            </span>
          </div>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 400,
              color: "#0F172A",
            }}
          >
            Where English Can Take You
          </h2>
          <p
            className="mt-4 leading-relaxed"
            style={{ color: "#6B7280", fontSize: "1.0625rem", fontWeight: 400 }}
          >
            Premium English coaching that unlocks the full spectrum of
            international opportunity — from elite university places to
            boardroom-level professional fluency.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {outcomes.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative p-8 transition-all duration-400 cursor-default"
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid rgba(15, 23, 42, 0.08)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(200, 165, 90, 0.4)";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 8px 40px rgba(200, 165, 90, 0.08)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(15, 23, 42, 0.08)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              {/* Number */}
              <div
                className="absolute top-6 right-6 text-xs tracking-widest"
                style={{ color: "rgba(200, 165, 90, 0.35)", fontWeight: 600 }}
              >
                0{i + 1}
              </div>

              {/* Icon */}
              <div className="mb-6">{item.icon}</div>

              {/* Gold divider */}
              <div
                className="w-8 h-px mb-5 transition-all duration-300 group-hover:w-14"
                style={{ backgroundColor: "#C8A55A" }}
              />

              <h3
                className="mb-3"
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  color: "#0F172A",
                  fontSize: "1.375rem",
                  fontWeight: 500,
                }}
              >
                {item.label}
              </h3>
              <p
                className="leading-relaxed text-sm"
                style={{ color: "#6B7280", fontWeight: 400 }}
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
