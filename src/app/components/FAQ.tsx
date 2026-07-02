import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const faqs = [
  {
    q: "Who does Atlas Wayfinder work with?",
    a: "We serve international students and professionals preparing to study, work or relocate abroad, with tailored support for each individual pathway.",
  },
  {
    q: "How do I know which programme is right for me?",
    a: "We start with an assessment and consultation to match your current readiness, goals and timeline, then recommend the most effective programme.",
  },
  {
    q: "Do I need IELTS before studying abroad?",
    a: "IELTS is required by many destinations, and we can assess whether it is needed for your chosen pathway and prepare you accordingly.",
  },
  {
    q: "Can you help if English is not my first language?",
    a: "Yes. Our approach strengthens English for global study and work, with clear structure and support for multilingual learners.",
  },
  {
    q: "Do you support professionals as well as students?",
    a: "Yes. We work with both students and professionals to improve communication, presentations and confidence in international environments.",
  },
  {
    q: "Do you work with learners who have dyslexia, ADHD or other learning differences?",
    a: "Yes. We provide evidence-based learning strategies and supportive guidance for learners with dyslexia, ADHD and other differences.",
  },
  {
    q: "How do online sessions work?",
    a: "Sessions are live, secure and scheduled to suit your time zone, combining expert coaching, feedback and practical work in a professional format.",
  },
  {
    q: "How do I get started?",
    a: "Begin with a consultation or assessment so we can clarify your current position and agree the most effective next step.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="py-28 md:py-36"
      style={{ backgroundColor: "#0F172A" }}
    >
      <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-16">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 lg:gap-28">
          {/* Left */}
          <div className="lg:sticky lg:top-28 self-start">
            <div className="flex items-center gap-4 mb-6">
              <div
                className="w-10 h-px"
                style={{ backgroundColor: "#C8A55A" }}
              />
              <span
                className="text-xs uppercase tracking-[0.22em]"
                style={{ color: "#C8A55A" }}
              >
                FAQs
              </span>
            </div>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 400,
                color: "#FAF7F0",
                fontSize: "clamp(2rem, 3vw, 3rem)",
              }}
            >
              Common
              <br />
              <em style={{ color: "#C8A55A" }}>Questions</em>
            </h2>
            <p
              className="mt-6 leading-relaxed text-sm"
              style={{ color: "rgba(250, 247, 240, 0.55)" }}
            >
              If you'd like personalised guidance, start your strategic consultation.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 mt-6 text-xs uppercase tracking-widest transition-colors duration-200"
              style={{ color: "#C8A55A", letterSpacing: "0.15em", fontWeight: 600 }}
            >
              Start Your Global Plan
              <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
                <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          {/* Right — accordion */}
          <div>
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="border-b"
                style={{ borderColor: "rgba(200, 165, 90, 0.12)" }}
              >
                <button
                  className="w-full flex items-center justify-between py-6 text-left gap-6 group"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      color: open === i ? "#C8A55A" : "#FAF7F0",
                      fontSize: "1.15rem",
                      fontWeight: 400,
                      transition: "color 0.2s",
                    }}
                  >
                    {faq.q}
                  </span>
                  <div
                    className="flex-shrink-0 w-7 h-7 flex items-center justify-center transition-all duration-300"
                    style={{
                      border: `1px solid ${open === i ? "#C8A55A" : "rgba(200,165,90,0.3)"}`,
                      color: open === i ? "#C8A55A" : "rgba(200,165,90,0.6)",
                    }}
                  >
                    {open === i ? <Minus size={14} /> : <Plus size={14} />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      style={{ overflow: "hidden" }}
                    >
                      <p
                        className="pb-6 leading-relaxed text-sm pr-10"
                        style={{ color: "rgba(250, 247, 240, 0.6)" }}
                      >
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
