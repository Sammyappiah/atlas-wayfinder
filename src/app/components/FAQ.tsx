import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const faqs = [
  {
    q: "Who is Atlas Wayfinder
                designed for?",
    a: "Atlas Wayfinder
               works with ambitious students aged 14+ and professionals who need to reach a high standard of English for international study, university admission, IELTS examinations or career advancement. Our clients come from all over the world and are united by one thing: a serious commitment to their goals.",
  },
  {
    q: "How are sessions delivered?",
    a: "All sessions are delivered online via Zoom, Google Meet or Microsoft Teams — wherever you are in the world. Sessions are live, one-to-one (or group for corporate clients) and scheduled flexibly around your time zone.",
  },
  {
    q: "How long does it take to achieve my target IELTS band score?",
    a: "This depends on your current level and your target score. Most students see significant improvement within 6–12 weeks of focused coaching. Following your free IELTS assessment, Sammy will give you a realistic timeline tailored to your situation.",
  },
  {
    q: "What makes Atlas Wayfinder
               different from other IELTS courses?",
    a: "Atlas Wayfinder
               is not a one size fits all course. Every programme is bespoke, built around your specific weaknesses, learning style and goals. Sammy's background in specialist learning support and therapy means she can identify and address the root causes of language barriers, not just their symptoms.",
  },
  {
    q: "Do you offer corporate English training for teams?",
    a: "Yes. We offer bespoke corporate training programmes for international teams and businesses of any size. These can be delivered as group sessions, individual coaching for senior professionals, or a combination of both. Please contact us to discuss your organisation's requirements.",
  },
  {
    q: "What is your cancellation policy?",
    a: "We require 24 hours' notice to reschedule or cancel a session. Sessions cancelled with less than 24 hours' notice may be charged. We understand that life happens, and we will always work with you wherever possible.",
  },
  {
    q: "How do I get started?",
    a: "The first step is a free consultation or assessment. Simply fill in the contact form below or send a WhatsApp message and Sammy will get back to you within 24 hours to discuss your goals and how Atlas Wayfinder
                can help.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
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
              Can't find what you're looking for? Send us a message and we'll
              respond within 24 hours.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 mt-6 text-xs uppercase tracking-widest transition-colors duration-200"
              style={{ color: "#C8A55A", letterSpacing: "0.15em", fontWeight: 600 }}
            >
              Ask a Question
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
