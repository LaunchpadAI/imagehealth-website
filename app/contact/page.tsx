"use client"

import { motion } from "motion/react"
import { useState, type FormEvent } from "react"
import { ArrowRight, Mail, Phone, MapPin, Linkedin, Instagram, Check } from "lucide-react"

const EASE = [0.16, 1, 0.3, 1] as const

const LOCATIONS = [
  {
    city: "London",
    country: "United Kingdom",
    address: "8 Leake Street",
    postcode: "London, SE1 7NN",
  },
  {
    city: "Miami",
    country: "United States",
    address: "390 NE 191st St STE 8959",
    postcode: "Miami, FL 33179",
  },
]

export default function ContactPage() {
  return (
    <>
      <Header />
      <ContactBody />
    </>
  )
}

function Header() {
  return (
    <section className="relative overflow-hidden px-5 md:px-12 pt-14 md:pt-28 pb-12 md:pb-24">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 80% 20%, color-mix(in oklch, var(--ih-accent) 18%, transparent) 0%, transparent 55%)",
        }}
      />
      <div className="relative max-w-[1440px] mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-[10px] md:text-[11px] uppercase mb-8"
          style={{
            letterSpacing: "0.36em",
            color: "var(--ih-muted)",
            fontFamily: "var(--ih-font-body)",
          }}
        >
          <span style={{ color: "var(--ih-accent)" }}>●</span>
          <span className="ml-2">Hiring · Open to collaborations</span>
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, ease: EASE, delay: 0.05 }}
          className="leading-[0.95] max-w-[12ch]"
          style={{
            fontFamily: "var(--ih-font-display)",
            fontWeight: 400,
            letterSpacing: "-0.02em",
            fontSize: "clamp(3rem, 9vw, 8rem)",
          }}
        >
          Get in <em style={{ color: "var(--ih-accent)" }}>touch.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: EASE, delay: 0.2 }}
          className="mt-8 md:mt-10 max-w-xl text-[16px] md:text-[18px] leading-[1.6]"
          style={{ color: "var(--ih-text)", opacity: 0.82, fontFamily: "var(--ih-font-body)", fontWeight: 300 }}
        >
          We want to hear from you. Fill out the form and we&apos;ll get back to you shortly — or reach us directly using the details below.
        </motion.p>
      </div>
    </section>
  )
}

function ContactBody() {
  return (
    <section
      className="px-5 md:px-12 pb-24 md:pb-40 pt-6 md:pt-16"
      style={{ borderTop: "1px solid color-mix(in oklch, var(--ih-text) 7%, transparent)" }}
    >
      <div className="max-w-[1440px] mx-auto grid md:grid-cols-12 gap-12 md:gap-20 items-start">
        <div className="md:col-span-7">
          <ContactForm />
        </div>
        <div className="md:col-span-5 md:col-start-8 md:sticky md:top-[100px]">
          <Sidebar />
        </div>
      </div>
    </section>
  )
}

function ContactForm() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    preferred: "Email" as "Email" | "Call",
  })
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Demo: in production this would POST to an API route.
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE }}
        className="py-20 md:py-28 px-8 md:px-12 text-center"
        style={{
          border: "1px solid color-mix(in oklch, var(--ih-text) 12%, transparent)",
          background: "color-mix(in oklch, var(--ih-accent) 5%, var(--ih-surface))",
        }}
      >
        <span
          className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-8"
          style={{ background: "var(--ih-accent)", color: "var(--ih-accent-contrast)" }}
        >
          <Check className="w-6 h-6" strokeWidth={2.5} />
        </span>
        <h3
          className="leading-[1.1] mb-5"
          style={{
            fontFamily: "var(--ih-font-display)",
            fontWeight: 400,
            letterSpacing: "-0.01em",
            fontSize: "clamp(1.8rem, 3.2vw, 2.6rem)",
          }}
        >
          Thank you. <em style={{ color: "var(--ih-accent)" }}>We&apos;ll be in touch.</em>
        </h3>
        <p
          className="max-w-md mx-auto text-[14px] md:text-[15px] leading-[1.7]"
          style={{ color: "var(--ih-muted)", fontFamily: "var(--ih-font-body)" }}
        >
          Your request has been submitted. A member of our team will get back to you shortly.
        </p>
      </motion.div>
    )
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.85, ease: EASE, delay: 0.15 }}
      onSubmit={onSubmit}
      className="flex flex-col gap-7"
    >
      <p
        className="text-[10px] uppercase mb-2"
        style={{
          letterSpacing: "0.3em",
          color: "var(--ih-muted)",
          fontFamily: "var(--ih-font-body)",
        }}
      >
        Send us a message
      </p>

      <div className="grid md:grid-cols-2 gap-7">
        <Field label="First name" required>
          <input
            type="text"
            required
            value={state.firstName}
            onChange={(e) => setState({ ...state, firstName: e.target.value })}
            className="ih-input"
          />
        </Field>
        <Field label="Last name" required>
          <input
            type="text"
            required
            value={state.lastName}
            onChange={(e) => setState({ ...state, lastName: e.target.value })}
            className="ih-input"
          />
        </Field>
      </div>

      <div className="grid md:grid-cols-2 gap-7">
        <Field label="Email" required>
          <input
            type="email"
            required
            value={state.email}
            onChange={(e) => setState({ ...state, email: e.target.value })}
            className="ih-input"
          />
        </Field>
        <Field label="Phone (optional)">
          <input
            type="tel"
            value={state.phone}
            onChange={(e) => setState({ ...state, phone: e.target.value })}
            className="ih-input"
          />
        </Field>
      </div>

      <Field label="How can we help?">
        <textarea
          rows={5}
          value={state.message}
          onChange={(e) => setState({ ...state, message: e.target.value })}
          className="ih-input resize-none"
        />
      </Field>

      <div>
        <p
          className="text-[10px] uppercase mb-4"
          style={{
            letterSpacing: "0.3em",
            color: "var(--ih-muted)",
            fontFamily: "var(--ih-font-body)",
          }}
        >
          Preferred contact method
        </p>
        <div className="flex gap-3">
          {(["Email", "Call"] as const).map((opt) => {
            const active = state.preferred === opt
            return (
              <button
                key={opt}
                type="button"
                onClick={() => setState({ ...state, preferred: opt })}
                className="px-5 py-2.5 text-[11px] uppercase transition-all"
                style={{
                  letterSpacing: "0.24em",
                  fontFamily: "var(--ih-font-body)",
                  background: active ? "var(--ih-accent)" : "transparent",
                  color: active ? "var(--ih-accent-contrast)" : "var(--ih-text)",
                  border: active
                    ? "1px solid var(--ih-accent)"
                    : "1px solid color-mix(in oklch, var(--ih-text) 18%, transparent)",
                  borderRadius: "999px",
                  fontWeight: 500,
                }}
              >
                {opt}
              </button>
            )
          })}
        </div>
      </div>

      <button
        type="submit"
        className="group mt-4 inline-flex items-center justify-center gap-3 px-9 py-4 text-[11px] md:text-[12px] uppercase self-start"
        style={{
          background: "var(--ih-accent)",
          color: "var(--ih-accent-contrast)",
          letterSpacing: "0.26em",
          fontWeight: 500,
          fontFamily: "var(--ih-font-body)",
          borderRadius: "2px",
        }}
      >
        Submit request
        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
      </button>

      <style>{`
        .ih-input {
          width: 100%;
          background: transparent;
          color: var(--ih-text);
          font-family: var(--ih-font-body);
          font-size: 15px;
          padding: 14px 0 10px;
          border: 0;
          border-bottom: 1px solid color-mix(in oklch, var(--ih-text) 18%, transparent);
          outline: none;
          transition: border-color 220ms ease;
        }
        .ih-input:focus {
          border-bottom-color: var(--ih-accent);
        }
        .ih-input::placeholder { color: var(--ih-muted); }
      `}</style>
    </motion.form>
  )
}

function Field({
  label,
  required,
  children,
}: {
  label: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <label className="flex flex-col">
      <span
        className="text-[10px] uppercase mb-1"
        style={{
          letterSpacing: "0.3em",
          color: "var(--ih-muted)",
          fontFamily: "var(--ih-font-body)",
        }}
      >
        {label}
        {required && <span style={{ color: "var(--ih-accent)" }}> *</span>}
      </span>
      {children}
    </label>
  )
}

function Sidebar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.85, ease: EASE, delay: 0.3 }}
      className="flex flex-col gap-12"
    >
      <div
        className="p-8"
        style={{
          background: "var(--ih-surface)",
          border: "1px solid color-mix(in oklch, var(--ih-text) 8%, transparent)",
        }}
      >
        <p
          className="text-[10px] uppercase mb-6"
          style={{
            letterSpacing: "0.3em",
            color: "var(--ih-muted)",
            fontFamily: "var(--ih-font-body)",
          }}
        >
          Our info
        </p>

        <ul className="flex flex-col gap-5">
          <InfoItem icon={<Mail className="w-4 h-4" />} label="Email">
            <a
              href="mailto:info@imaginehealth.ai"
              className="hover:opacity-100 transition-opacity"
              style={{ color: "var(--ih-text)" }}
            >
              info@imaginehealth.ai
            </a>
          </InfoItem>
          <InfoItem icon={<Phone className="w-4 h-4" />} label="Phone">
            <a href="tel:+442039875299" style={{ color: "var(--ih-text)" }}>
              +44 20 3987 5299
            </a>
          </InfoItem>
        </ul>
      </div>

      <div>
        <p
          className="text-[10px] uppercase mb-7"
          style={{
            letterSpacing: "0.3em",
            color: "var(--ih-muted)",
            fontFamily: "var(--ih-font-body)",
          }}
        >
          Offices
        </p>
        <div className="grid grid-cols-1 gap-8">
          {LOCATIONS.map((loc) => (
            <div key={loc.city} className="flex gap-4">
              <MapPin className="w-4 h-4 mt-1 shrink-0" style={{ color: "var(--ih-accent)" }} />
              <div>
                <p
                  className="leading-[1.1] mb-2"
                  style={{
                    fontFamily: "var(--ih-font-display)",
                    fontWeight: 400,
                    fontSize: "1.6rem",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {loc.city}
                </p>
                <p
                  className="text-[13px] leading-[1.7]"
                  style={{ color: "var(--ih-muted)", fontFamily: "var(--ih-font-body)" }}
                >
                  {loc.address}
                  <br />
                  {loc.postcode}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <p
          className="text-[10px] uppercase mb-5"
          style={{
            letterSpacing: "0.3em",
            color: "var(--ih-muted)",
            fontFamily: "var(--ih-font-body)",
          }}
        >
          Stay in the loop
        </p>
        <div className="flex items-center gap-3">
          <SocialLink href="https://linkedin.com" label="LinkedIn">
            <Linkedin className="w-4 h-4" />
          </SocialLink>
          <SocialLink href="https://instagram.com" label="Instagram">
            <Instagram className="w-4 h-4" />
          </SocialLink>
        </div>
      </div>
    </motion.div>
  )
}

function InfoItem({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode
  label: string
  children: React.ReactNode
}) {
  return (
    <li className="flex gap-4 items-start">
      <span className="mt-1" style={{ color: "var(--ih-accent)" }}>{icon}</span>
      <div className="flex flex-col">
        <span
          className="text-[10px] uppercase mb-1"
          style={{
            letterSpacing: "0.3em",
            color: "var(--ih-muted)",
            fontFamily: "var(--ih-font-body)",
          }}
        >
          {label}
        </span>
        <span style={{ fontFamily: "var(--ih-font-body)", fontSize: 15 }}>{children}</span>
      </div>
    </li>
  )
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center w-11 h-11 rounded-full transition-colors"
      style={{
        border: "1px solid color-mix(in oklch, var(--ih-text) 14%, transparent)",
        color: "var(--ih-text)",
      }}
    >
      {children}
    </a>
  )
}
