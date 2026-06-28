import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "Sammy's coaching transformed my IELTS score from 6.0 to 7.5 in just eight weeks. Her approach is unlike anything I experienced before — she understood exactly why I was struggling and fixed it. I received my university offer from UCL the following month.",
    name: "Aisha Malik",
    role: "Graduate Student",
    outcome: "IELTS 7.5 · UCL London",
    country: "🇵🇰",
    location: "Pakistan",
  },
  {
    quote:
      "I had tried other IELTS courses and made no progress. One month with Sammy and I finally understood what examiners were looking for. Her feedback on my writing was specific and transformative. I'm now studying at the University of Edinburgh.",
    name: "Tomás Ferreira",
    role: "Engineering Student",
    outcome: "IELTS 7.0 · University of Edinburgh",
    country: "🇧🇷",
    location: "Brazil",
  },
  {
    quote:
      "As a doctor seeking UK registration, I needed a very high IELTS score under pressure. Sammy's systematic approach and constant encouragement got me to Band 8. Her professionalism and depth of knowledge are exceptional.",
    name: "Dr. Priya Sharma",
    role: "Medical Professional",
    outcome: "IELTS 8.0 · GMC Registration",
    country: "🇮🇳",
    location: "India",
  },
  {
    quote:
      "My daughter's English improved dramatically within three months of working with Sammy. She now speaks with real confidence and was offered a place at a top boarding school in the UK. We could not be more grateful.",
    name: "Mei-Lin Chen",
    role: "Parent",
    outcome: "UK Boarding School Offer",
    country: "🇹🇼",
    location: "Taiwan",
  },
  {
    quote:
      "Our international team's communication has improved beyond recognition. Sammy designed a bespoke corporate training programme that fitted around our schedules and delivered real, measurable results across all departments.",
    name: "Lars Eriksson",
    role: "Operations Director",
    outcome: "Corporate Training · Stockholm",
    country: "🇸🇪",
    location: "Sweden",
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <section
      className="py-28 md:py-36"
      style={{ backgroundColor: "#FAF7F0" }}
    >
      <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-16">
        {/* Header */}
        <div className="flex items-center gap-4 mb-20">
          <div className="w-10 h-px" style={{ backgroundColor: "#C8A55A" }} />
          <span
            className="text-xs uppercase tracking-[0.22em]"
            style={{ color: "#C8A55A" }}
          >
            Client Stories
          </span>
        </div>

        <div className="grid lg:grid-cols-[1fr_auto] gap-16 items-start">
          {/* Left */}
          <div>
            <h2
              className="mb-16"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 400,
                color: "#0F172A",
                maxWidth: "540px",
              }}
            >
              Results That
              <br />
              <em style={{ color: "#C8A55A" }}>Speak for Themselves</em>
            </h2>

            {/* Testimonial */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4 }}
              >
                {/* Quote mark */}
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: "5rem",
                    color: "#C8A55A",
                    lineHeight: 0.7,
                    marginBottom: "1rem",
                    opacity: 0.6,
                  }}
                >
                  "
                </div>

                <blockquote
                  className="leading-relaxed mb-8"
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: "clamp(1.1rem, 1.8vw, 1.375rem)",
                    color: "#0F172A",
                    fontWeight: 400,
                    fontStyle: "italic",
                    maxWidth: "640px",
                  }}
                >
                  {t.quote}
                </blockquote>

                <div className="flex items-center gap-5">
                  <div
                    className="w-12 h-12 flex items-center justify-center text-2xl"
                    style={{
                      backgroundColor: "rgba(200, 165, 90, 0.12)",
                      border: "1px solid rgba(200, 165, 90, 0.3)",
                    }}
                  >
                    {t.country}
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 600,
                        color: "#0F172A",
                        fontSize: "0.9375rem",
                      }}
                    >
                      {t.name}
                    </div>
                    <div
                      className="text-sm"
                      style={{ color: "#6B7280", fontWeight: 400 }}
                    >
                      {t.role} · {t.location}
                    </div>
                  </div>
                  <div
                    className="ml-auto px-3 py-1.5 text-xs uppercase tracking-widest hidden sm:block"
                    style={{
                      backgroundColor: "rgba(200, 165, 90, 0.1)",
                      color: "#C8A55A",
                      border: "1px solid rgba(200, 165, 90, 0.25)",
                      letterSpacing: "0.12em",
                    }}
                  >
                    {t.outcome}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="flex items-center gap-4 mt-10">
              <button
                onClick={prev}
                className="w-10 h-10 flex items-center justify-center transition-all duration-200"
                style={{
                  border: "1px solid rgba(15, 23, 42, 0.15)",
                  color: "#0F172A",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "#0F172A";
                  (e.currentTarget as HTMLElement).style.color = "#FAF7F0";
                  (e.currentTarget as HTMLElement).style.borderColor = "#0F172A";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                  (e.currentTarget as HTMLElement).style.color = "#0F172A";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(15,23,42,0.15)";
                }}
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 flex items-center justify-center transition-all duration-200"
                style={{
                  border: "1px solid rgba(15, 23, 42, 0.15)",
                  color: "#0F172A",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "#0F172A";
                  (e.currentTarget as HTMLElement).style.color = "#FAF7F0";
                  (e.currentTarget as HTMLElement).style.borderColor = "#0F172A";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                  (e.currentTarget as HTMLElement).style.color = "#0F172A";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(15,23,42,0.15)";
                }}
              >
                <ChevronRight size={16} />
              </button>

              {/* Dots */}
              <div className="flex gap-2 ml-4">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className="transition-all duration-300"
                    style={{
                      width: i === current ? "24px" : "6px",
                      height: "6px",
                      backgroundColor:
                        i === current ? "#C8A55A" : "rgba(200, 165, 90, 0.3)",
                      border: "none",
                      padding: 0,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right — all testimonials mini list */}
          <div className="hidden lg:flex flex-col gap-3 min-w-[220px]">
            {testimonials.map((t, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="text-left p-4 transition-all duration-200"
                style={{
                  backgroundColor:
                    i === current ? "#0F172A" : "transparent",
                  border: `1px solid ${i === current ? "#0F172A" : "rgba(15,23,42,0.08)"}`,
                }}
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-base">{t.country}</span>
                  <div>
                    <div
                      className="text-sm"
                      style={{
                        color: i === current ? "#FAF7F0" : "#0F172A",
                        fontWeight: 600,
                      }}
                    >
                      {t.name}
                    </div>
                    <div
                      className="text-xs"
                      style={{
                        color:
                          i === current
                            ? "rgba(200,165,90,0.8)"
                            : "#6B7280",
                        fontWeight: 400,
                      }}
                    >
                      {t.location}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
