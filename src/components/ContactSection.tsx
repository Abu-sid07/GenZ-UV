import { useState } from "react";
import { useTheme } from "../hooks/useTheme";
import {
  MapPin, Phone, Mail, Clock, Send,
  CheckCircle2, Loader2
} from "lucide-react";

const LinkedinIcon = ({ size = 16, ...props }: { size?: number } & React.SVGProps<SVGSVGElement>) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const InstagramIcon = ({ size = 16, ...props }: { size?: number } & React.SVGProps<SVGSVGElement>) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const YoutubeIcon = ({ size = 16, ...props }: { size?: number } & React.SVGProps<SVGSVGElement>) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const FacebookIcon = ({ size = 16, ...props }: { size?: number } & React.SVGProps<SVGSVGElement>) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const TwitterIcon = ({ size = 16, ...props }: { size?: number } & React.SVGProps<SVGSVGElement>) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
  </svg>
);

/* ─── theme tokens matching existing site ─── */
const dark = {
  pageBg:     "var(--bg)",
  cardBg:     "var(--bg-elevated)",
  elevated:   "var(--bg-soft)",
  border:     "var(--border-subtle)",
  borderMid:  "var(--border-strong)",
  accent:     "var(--accent-uv)",
  accentLight:"var(--accent-cyan)",
  textPri:    "var(--fg)",
  textSec:    "var(--fg-muted)",
  textMuted:  "var(--fg-subtle)",
  inputBg:    "var(--bg-elevated)",
};

const light = {
  pageBg:     "var(--bg)",
  cardBg:     "var(--bg-elevated)",
  elevated:   "var(--bg-soft)",
  border:     "var(--border-subtle)",
  borderMid:  "var(--border-strong)",
  accent:     "var(--accent-uv)",
  accentLight:"var(--accent-cyan)",
  textPri:    "var(--fg)",
  textSec:    "var(--fg-muted)",
  textMuted:  "var(--fg-subtle)",
  inputBg:    "var(--bg-elevated)",
};

const contactInfo = [
  {
    icon: MapPin,
    label: "Address",
    value: "Melapalayam, Tirunelveli — 627005",
    sub: "Tamil Nadu, India",
  },
  {
    icon: Phone,
    label: "Contact",
    value: "+91 95661 80862",
    sub: "Direct / WhatsApp",
  },
  {
    icon: Mail,
    label: "Email",
    value: "Genzuv008@gmail.com",
    sub: "We reply within 24h",
  },
  {
    icon: Clock,
    label: "Open Time",
    value: "Mon – Sat · 10:00 – 20:00",
    sub: "IST",
  },
];

const socials = [
  { icon: FacebookIcon,  href: "#", label: "Facebook"  },
  { icon: TwitterIcon,   href: "#", label: "Twitter"   },
  { icon: InstagramIcon, href: "#", label: "Instagram" },
  { icon: LinkedinIcon,  href: "https://www.linkedin.com/in/abusid07/", label: "LinkedIn"  },
  { icon: YoutubeIcon,   href: "#", label: "YouTube"   },
];

/* ─── component ─── */
export default function ContactSection() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const t = isDark ? dark : light;

  const [form, setForm] = useState({
    firstName: "", lastName: "",
    email: "", phone: "",
    subject: "", message: "",
  });
  const [status, setStatus] = useState<"idle"|"loading"|"done">("idle");
  const [errors, setErrors] = useState<Partial<typeof form>>({});

  function validate() {
    const e: Partial<typeof form> = {};
    if (!form.firstName.trim()) e.firstName = "Required";
    if (!form.lastName.trim())  e.lastName  = "Required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email required";
    if (!form.subject.trim())   e.subject   = "Required";
    if (!form.message.trim())   e.message   = "Required";
    return e;
  }

  function handleChange(k: keyof typeof form, v: string) {
    setForm(f => ({ ...f, [k]: v }));
    if (errors[k]) setErrors(e => ({ ...e, [k]: undefined }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setStatus("loading");
    await new Promise(r => setTimeout(r, 1800));
    setStatus("done");
  }

  /* shared field style */
  function fieldStyle(hasError?: string) {
    return {
      width: "100%",
      background: t.inputBg,
      border: `0.5px solid ${hasError ? "#E24B4A" : t.border}`,
      borderRadius: 10,
      padding: "12px 14px",
      color: t.textPri,
      fontSize: 14,
      outline: "none",
      transition: "border-color 0.2s",
      fontFamily: "inherit",
    } as React.CSSProperties;
  }

  return (
    <section id="contact" className="section section--contact" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 24px 80px" }}>

        {/* ── heading ── */}
        <div style={{ marginBottom: 48, textAlign: "center" }}>
          <span style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            border: `0.5px solid ${t.border}`, background: t.elevated,
            color: t.accent, fontSize: 10, letterSpacing: "0.15em",
            textTransform: "uppercase", borderRadius: 99, padding: "4px 14px",
            marginBottom: 16,
          }}>
            <span style={{
              width: 6, height: 6, borderRadius: "50%",
              background: t.accent, display: "inline-block",
            }} />
            Contact Us
          </span>

          <h2 className="heading-lg" style={{
            fontFamily: "'Syne', sans-serif", margin: "0 0 8px",
          }}>
            Let's Build the{" "}
            <span className="text-gradient-uv-cyan">
              Future Together.
            </span>
          </h2>

          <p style={{ color: t.textSec, fontSize: 15, maxWidth: 480, margin: "12px auto 0", lineHeight: 1.7 }}>
            No generic contact forms into the void. We are a fast-paced,
            youth-driven agency — reach out and let's create something great.
          </p>
        </div>

        {/* ── main grid ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "minmax(0,1.4fr) minmax(0,1fr)",
          gap: 24,
          alignItems: "start",
        }}>

          {/* ── LEFT · FORM ── */}
          <div className="card" style={{
            padding: "36px 32px",
          }}>
            {status === "done" ? (
              <div style={{ textAlign: "center", padding: "60px 0" }}>
                <CheckCircle2 size={48} style={{ color: t.accentLight, margin: "0 auto 16px" }} />
                <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 22, color: t.textPri, margin: "0 0 8px" }}>
                  Message Sent!
                </p>
                <p style={{ color: t.textSec, fontSize: 14 }}>
                  We'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setStatus("idle"); setForm({ firstName:"", lastName:"", email:"", phone:"", subject:"", message:"" }); }}
                  className="btn btn-primary"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 20, color: t.textPri, margin: "0 0 4px" }}>
                  Join Us in Creating<br />Something Great
                </p>
                <p style={{ color: t.textMuted, fontSize: 12, letterSpacing: "0.05em", marginBottom: 28 }}>
                  Fill in the details — we'll take it from there.
                </p>

                {/* row 1 */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
                  {(["firstName","lastName"] as const).map(k => (
                    <div key={k}>
                      <input
                        placeholder={k === "firstName" ? "First Name *" : "Last Name *"}
                        value={form[k]}
                        onChange={e => handleChange(k, e.target.value)}
                        style={fieldStyle(errors[k])}
                        onFocus={e => e.target.style.borderColor = t.accent}
                        onBlur={e => e.target.style.borderColor = errors[k] ? "#E24B4A" : t.border}
                      />
                      {errors[k] && <p style={{ color: "#E24B4A", fontSize: 11, margin: "3px 0 0 4px" }}>{errors[k]}</p>}
                    </div>
                  ))}
                </div>

                {/* row 2 */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
                  <div>
                    <input
                      type="email"
                      placeholder="Email *"
                      value={form.email}
                      onChange={e => handleChange("email", e.target.value)}
                      style={fieldStyle(errors.email)}
                      onFocus={e => e.target.style.borderColor = t.accent}
                      onBlur={e => e.target.style.borderColor = errors.email ? "#E24B4A" : t.border}
                    />
                    {errors.email && <p style={{ color: "#E24B4A", fontSize: 11, margin: "3px 0 0 4px" }}>{errors.email}</p>}
                  </div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={e => handleChange("phone", e.target.value)}
                    style={fieldStyle()}
                    onFocus={e => e.target.style.borderColor = t.accent}
                    onBlur={e => e.target.style.borderColor = t.border}
                  />
                </div>

                {/* subject */}
                <div style={{ marginBottom: 12 }}>
                  <input
                    placeholder="Subject *"
                    value={form.subject}
                    onChange={e => handleChange("subject", e.target.value)}
                    style={fieldStyle(errors.subject)}
                    onFocus={e => e.target.style.borderColor = t.accent}
                    onBlur={e => e.target.style.borderColor = errors.subject ? "#E24B4A" : t.border}
                  />
                  {errors.subject && <p style={{ color: "#E24B4A", fontSize: 11, margin: "3px 0 0 4px" }}>{errors.subject}</p>}
                </div>

                {/* message */}
                <div style={{ marginBottom: 24 }}>
                  <textarea
                    rows={4}
                    placeholder="Message *"
                    value={form.message}
                    onChange={e => handleChange("message", e.target.value)}
                    style={{ ...fieldStyle(errors.message), resize: "vertical" }}
                    onFocus={e => e.target.style.borderColor = t.accent}
                    onBlur={e => e.target.style.borderColor = errors.message ? "#E24B4A" : t.border}
                  />
                  {errors.message && <p style={{ color: "#E24B4A", fontSize: 11, margin: "3px 0 0 4px" }}>{errors.message}</p>}
                </div>

                {/* submit */}
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="btn btn-primary"
                    style={{
                      display: "flex", alignItems: "center", gap: 8,
                      cursor: status === "loading" ? "not-allowed" : "pointer",
                      opacity: status === "loading" ? 0.8 : 1,
                    }}
                  >
                    {status === "loading"
                      ? <><Loader2 size={16} style={{ animation: "spin 1s linear infinite" }} /> Sending…</>
                      : <><Send size={15} /> Send Message</>
                    }
                  </button>
                  <span style={{ color: t.textMuted, fontSize: 12 }}>We reply within 24h</span>
                </div>
              </form>
            )}
          </div>

          {/* ── RIGHT · INFO ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>

            {/* info card */}
            <div className="card" style={{
              background: `linear-gradient(145deg, rgba(124,58,237,0.15), rgba(34,211,238,0.1))`,
              padding: "28px 24px",
            }}>
              {contactInfo.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} style={{
                    display: "flex", gap: 14, alignItems: "flex-start",
                    paddingBottom: i < contactInfo.length - 1 ? 20 : 0,
                    marginBottom: i < contactInfo.length - 1 ? 20 : 0,
                    borderBottom: i < contactInfo.length - 1 ? `0.5px solid ${t.border}` : "none",
                  }}>
                    <div style={{
                      width: 36, height: 36, borderRadius: 10, flexShrink: 0,
                      background: `${t.accent}20`,
                      border: `0.5px solid ${t.accent}40`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <Icon size={16} style={{ color: t.accent }} />
                    </div>
                    <div>
                      <p style={{ color: t.textMuted, fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", margin: "0 0 2px" }}>
                        {item.label}
                      </p>
                      <p style={{ color: t.textPri, fontSize: 14, fontWeight: 600, margin: "0 0 1px" }}>
                        {item.value}
                      </p>
                      <p style={{ color: t.textMuted, fontSize: 12, margin: 0 }}>{item.sub}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA buttons */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <a
                href="https://wa.me/919566180862"
                target="_blank" rel="noopener noreferrer"
                className="btn"
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                  background: "#25D366",
                  boxShadow: "0 4px 24px rgba(37,211,102,0.25)",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Me
              </a>

              <a
                href="tel:+919566180862"
                className="btn btn-primary"
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                }}
              >
                <Phone size={16} />
                Transform Your Brand Today
              </a>
            </div>

            {/* socials */}
            <div className="card" style={{ padding: "18px 20px" }}>
              <p style={{
                color: t.accent, fontSize: 10, letterSpacing: "0.14em",
                textTransform: "uppercase", margin: "0 0 12px", fontWeight: 500,
              }}>
                Stay Connected
              </p>
              <div style={{ display: "flex", gap: 10 }}>
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="avatar"
                    style={{
                      width: 38, height: 38, borderRadius: 10,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      textDecoration: "none",
                      transition: "all 0.2s",
                      border: isDark ? `0.5px solid ${t.border}` : "none",
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = t.accent;
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = isDark ? t.border : "transparent";
                    }}
                  >
                    <Icon size={16} style={{ color: t.textMuted }} />
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        * { box-sizing: border-box; }
        @media (max-width: 700px) {
          div[style*="grid-template-columns"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
