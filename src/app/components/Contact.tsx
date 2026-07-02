import { useState } from "react";

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    backgroundColor: "rgba(250, 247, 240, 0.04)",
    border: "1px solid rgba(200, 165, 90, 0.2)",
    color: "#FAF7F0",
    padding: "14px 16px",
    width: "100%",
    outline: "none",
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: "0.9375rem",
    fontWeight: 400,
    transition: "border-color 0.2s",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "0.6875rem",
    textTransform: "uppercase",
    letterSpacing: "0.18em",
    color: "rgba(200, 165, 90, 0.7)",
    marginBottom: "8px",
    fontWeight: 600,
    fontFamily: "'Plus Jakarta Sans', sans-serif",
  };

  return (
    <section
      id="contact"
      className="py-28 md:py-36"
      style={{ backgroundColor: "#FAF7F0" }}
    >
      <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-28">
          {/* Left */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div
                className="w-10 h-px"
                style={{ backgroundColor: "#C8A55A" }}
              />
              <span
                className="text-xs uppercase tracking-[0.22em]"
                style={{ color: "#C8A55A" }}
              >
                Get in Touch
              </span>
            </div>

            <h2
              className="mb-6"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 400,
                color: "#0F172A",
                fontSize: "clamp(2rem, 3vw, 3rem)",
              }}
            >
              Begin Your
              <br />
              <em style={{ color: "#C8A55A" }}>Journey Today</em>
            </h2>

            <p
              className="leading-relaxed mb-12"
              style={{ color: "#6B7280", fontSize: "1.0625rem", fontWeight: 400, maxWidth: "440px" }}
            >
              Book your free consultation or take a free assessment. Sammy will
              respond within 24 hours to discuss your goals and how Atlas
              English can help you achieve them.
            </p>

            {/* Contact details */}
            <div className="flex flex-col gap-6">
              {/* WhatsApp */}
              <a
                href="https://wa.me/447947629518"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-5 p-5 transition-all duration-300"
                style={{
                  border: "1px solid rgba(15, 23, 42, 0.1)",
                  backgroundColor: "transparent",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "#0F172A";
                  (e.currentTarget as HTMLElement).style.borderColor = "#0F172A";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(15,23,42,0.1)";
                }}
              >
                <div
                  className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "rgba(200, 165, 90, 0.12)" }}
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#C8A55A">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.562 4.14 1.54 5.875L0 24l6.27-1.507A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.79 9.79 0 01-5.014-1.381l-.36-.214-3.727.896.944-3.634-.234-.373A9.796 9.796 0 012.182 12c0-5.415 4.403-9.818 9.818-9.818 5.415 0 9.818 4.403 9.818 9.818 0 5.415-4.403 9.818-9.818 9.818z" />
                  </svg>
                </div>
                <div>
                  <div
                    className="text-xs uppercase tracking-widest mb-1 group-hover:text-amber-400 transition-colors"
                    style={{ color: "#C8A55A", letterSpacing: "0.15em" }}
                  >
                    WhatsApp
                  </div>
                  <div
                    className="text-sm group-hover:text-white transition-colors"
                    style={{ color: "#0F172A", fontWeight: 500 }}
                  >
                    +44 7947 629 518
                  </div>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:${SITE.email}"
                className="group flex items-center gap-5 p-5 transition-all duration-300"
                style={{
                  border: "1px solid rgba(15, 23, 42, 0.1)",
                  backgroundColor: "transparent",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "#0F172A";
                  (e.currentTarget as HTMLElement).style.borderColor = "#0F172A";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(15,23,42,0.1)";
                }}
              >
                <div
                  className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "rgba(200, 165, 90, 0.12)" }}
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#C8A55A" strokeWidth="1.5">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <div
                    className="text-xs uppercase tracking-widest mb-1"
                    style={{ color: "#C8A55A", letterSpacing: "0.15em" }}
                  >
                    Email
                  </div>
                  <div
                    className="text-sm group-hover:text-white transition-colors"
                    style={{ color: "#0F172A", fontWeight: 500 }}
                  >
                    ${SITE.email}
                  </div>
                </div>
              </a>

              {/* Response time */}
              <div
                className="flex items-center gap-3 px-5 py-3"
                style={{ backgroundColor: "rgba(200, 165, 90, 0.08)", border: "1px solid rgba(200,165,90,0.2)" }}
              >
                <div
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ backgroundColor: "#22c55e" }}
                />
                <span
                  className="text-sm"
                  style={{ color: "#6B7280" }}
                >
                  Typically responds within 24 hours
                </span>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div
            className="p-8 md:p-10"
            style={{
              backgroundColor: "#0F172A",
            }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-20 text-center">
                <div
                  className="w-16 h-16 flex items-center justify-center mb-6"
                  style={{ border: "1px solid #C8A55A" }}
                >
                  <svg className="w-7 h-7" viewBox="0 0 28 28" fill="none">
                    <path d="M6 14l5 5 11-11" stroke="#C8A55A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    color: "#FAF7F0",
                    fontSize: "1.75rem",
                    fontWeight: 400,
                    marginBottom: "0.75rem",
                  }}
                >
                  Message Received
                </h3>
                <p className="text-sm" style={{ color: "rgba(250,247,240,0.6)" }}>
                  Sammy will be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div
                  className="text-xs uppercase tracking-widest mb-2"
                  style={{ color: "#C8A55A", letterSpacing: "0.18em" }}
                >
                  Consultation Request
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label style={labelStyle}>Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => ((e.target as HTMLElement).style.borderColor = "#C8A55A")}
                      onBlur={(e) => ((e.target as HTMLElement).style.borderColor = "rgba(200,165,90,0.2)")}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => ((e.target as HTMLElement).style.borderColor = "#C8A55A")}
                      onBlur={(e) => ((e.target as HTMLElement).style.borderColor = "rgba(200,165,90,0.2)")}
                    />
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Phone / WhatsApp</label>
                  <input
                    type="tel"
                    placeholder="+1 234 567 8900"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    style={inputStyle}
                    onFocus={(e) => ((e.target as HTMLElement).style.borderColor = "#C8A55A")}
                    onBlur={(e) => ((e.target as HTMLElement).style.borderColor = "rgba(200,165,90,0.2)")}
                  />
                </div>

                <div>
                  <label style={labelStyle}>I'm interested in</label>
                  <select
                    value={form.interest}
                    onChange={(e) => setForm({ ...form, interest: e.target.value })}
                    style={{ ...inputStyle, appearance: "none" }}
                    onFocus={(e) => ((e.target as HTMLElement).style.borderColor = "#C8A55A")}
                    onBlur={(e) => ((e.target as HTMLElement).style.borderColor = "rgba(200,165,90,0.2)")}
                  >
                    <option value="" style={{ backgroundColor: "#0F172A" }}>Select a programme…</option>
                    <option value="ielts" style={{ backgroundColor: "#0F172A" }}>IELTS Preparation</option>
                    <option value="academic" style={{ backgroundColor: "#0F172A" }}>Academic English</option>
                    <option value="university" style={{ backgroundColor: "#0F172A" }}>University Preparation</option>
                    <option value="professional" style={{ backgroundColor: "#0F172A" }}>Professional English</option>
                    <option value="corporate" style={{ backgroundColor: "#0F172A" }}>Corporate Training</option>
                    <option value="interview" style={{ backgroundColor: "#0F172A" }}>Interview Preparation</option>
                    <option value="assessment" style={{ backgroundColor: "#0F172A" }}>Free Assessment</option>
                  </select>
                </div>

                <div>
                  <label style={labelStyle}>Your Goals</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your goals and current English level…"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    style={{ ...inputStyle, resize: "none" }}
                    onFocus={(e) => ((e.target as HTMLElement).style.borderColor = "#C8A55A")}
                    onBlur={(e) => ((e.target as HTMLElement).style.borderColor = "rgba(200,165,90,0.2)")}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 text-sm uppercase tracking-widest transition-all duration-300 mt-1"
                  style={{
                    backgroundColor: "#C8A55A",
                    color: "#0F172A",
                    letterSpacing: "0.12em",
                    fontWeight: 600,
                    border: "none",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "#D4B472";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "#C8A55A";
                  }}
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
