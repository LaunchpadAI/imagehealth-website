"use client"

import Link from "next/link"
import { motion } from "motion/react"
import { ArrowRight, MapPin, Clock, Calendar } from "lucide-react"

const EASE = [0.16, 1, 0.3, 1] as const

const TRACKS = [
  {
    index: "01",
    title: "Robotics Perception",
    body: "3D body surface reconstruction using RGB-D and LiDAR sensors, plus sensor-fusion pipelines that hold up under realistic clinical noise. We want people fluent in computer vision, SLAM, or medical imaging.",
  },
  {
    index: "02",
    title: "Robotics Controls",
    body: "Control policies for robotic arms interacting with soft tissue — trajectory planning, learning-based controllers, and compliant manipulation. Ideal backgrounds: dynamics, MPC, or trajectory optimisation.",
  },
  {
    index: "03",
    title: "Safety & System Integration",
    body: "Real-time monitoring and fault-detection systems for human–robot interaction. Architecting for redundancy, observability, and compliance with the standards medical robotics has to meet.",
  },
]

const REQUIREMENTS = [
  "Master's or PhD students in robotics, computer vision, AI, controls, or related fields",
  "Proficiency in C++ or Python",
  "ROS2 experience strongly preferred",
  "Excited to work in person in our London lab on real-world robotic products",
]

const BENEFITS = [
  "Competitive compensation",
  "Mentorship from team members formerly at Dyson, Ocado, Humanoid, and Amazon",
  "Publication and research exposure opportunities",
  "Potential for full-time conversion at the end of the programme",
]

const META = [
  { icon: MapPin, label: "London, UK · On-site" },
  { icon: Clock, label: "3 months · Extendable to 6" },
  { icon: Calendar, label: "Starting Summer 2025" },
]

export default function InternshipPage() {
  return (
    <>
      <ArticleHeader />
      <ArticleBody />
      <Apply />
    </>
  )
}

function ArticleHeader() {
  return (
    <section className="relative overflow-hidden px-5 md:px-12 pt-14 md:pt-28 pb-12 md:pb-20">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 20% 20%, color-mix(in oklch, var(--ih-accent) 14%, transparent) 0%, transparent 55%)",
        }}
      />

      <div className="relative max-w-[1100px] mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-[10px] md:text-[11px] uppercase mb-10"
          style={{
            letterSpacing: "0.36em",
            color: "var(--ih-muted)",
            fontFamily: "var(--ih-font-body)",
          }}
        >
          News · Summer 2025
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: EASE, delay: 0.05 }}
          className="leading-[0.98]"
          style={{
            fontFamily: "var(--ih-font-display)",
            fontWeight: 400,
            letterSpacing: "-0.02em",
            fontSize: "clamp(2.4rem, 6.5vw, 5.6rem)",
            maxWidth: "20ch",
          }}
        >
          Robotics & AI Internship at{" "}
          <em style={{ color: "var(--ih-accent)" }}>Imagine Health.</em>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: EASE, delay: 0.25 }}
          className="mt-10 md:mt-14 flex flex-wrap gap-x-8 gap-y-4"
        >
          {META.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2.5">
              <Icon className="w-4 h-4" style={{ color: "var(--ih-accent)" }} />
              <span
                className="text-[12px] md:text-[13px] uppercase"
                style={{
                  letterSpacing: "0.22em",
                  color: "var(--ih-text)",
                  opacity: 0.85,
                  fontFamily: "var(--ih-font-body)",
                }}
              >
                {label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function ArticleBody() {
  return (
    <section
      className="px-5 md:px-12 py-14 md:py-28"
      style={{ borderTop: "1px solid color-mix(in oklch, var(--ih-text) 7%, transparent)" }}
    >
      <div className="max-w-[1100px] mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.85, ease: EASE }}
          className="max-w-3xl leading-[1.2] mb-20 md:mb-28"
          style={{
            fontFamily: "var(--ih-font-display)",
            fontWeight: 400,
            letterSpacing: "-0.01em",
            fontSize: "clamp(1.4rem, 2.8vw, 2.2rem)",
          }}
        >
          We&apos;re recruiting interns to work alongside our team on robotic diagnostic systems combining{" "}
          <em style={{ color: "var(--ih-accent)" }}>embodied AI, robotics, and clinical expertise.</em>{" "}
          Three tracks, one lab, real products that ship.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-[10px] uppercase mb-10"
          style={{
            letterSpacing: "0.3em",
            color: "var(--ih-muted)",
            fontFamily: "var(--ih-font-body)",
          }}
        >
          Three tracks
        </motion.p>

        <div className="flex flex-col">
          {TRACKS.map((t, i) => (
            <Track key={t.index} {...t} last={i === TRACKS.length - 1} />
          ))}
        </div>

        <div className="mt-24 md:mt-32 grid md:grid-cols-2 gap-12 md:gap-20">
          <List title="Requirements" items={REQUIREMENTS} />
          <List title="Benefits" items={BENEFITS} />
        </div>
      </div>
    </section>
  )
}

function Track({
  index,
  title,
  body,
  last,
}: {
  index: string
  title: string
  body: string
  last?: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.8, ease: EASE }}
      className="grid md:grid-cols-12 gap-6 md:gap-10 items-start py-10 md:py-14"
      style={{
        borderTop: "1px solid color-mix(in oklch, var(--ih-text) 10%, transparent)",
        borderBottom: last
          ? "1px solid color-mix(in oklch, var(--ih-text) 10%, transparent)"
          : undefined,
      }}
    >
      <div
        className="md:col-span-2 text-[10px] uppercase pt-2"
        style={{
          letterSpacing: "0.3em",
          color: "var(--ih-accent)",
          fontFamily: "var(--ih-font-body)",
        }}
      >
        Track {index}
      </div>

      <div className="md:col-span-4">
        <h3
          className="leading-[1.05]"
          style={{
            fontFamily: "var(--ih-font-display)",
            fontWeight: 500,
            letterSpacing: "-0.01em",
            fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
          }}
        >
          {title}
        </h3>
      </div>

      <div className="md:col-span-6">
        <p
          className="text-[15px] md:text-[16px] leading-[1.7]"
          style={{
            color: "var(--ih-text)",
            opacity: 0.78,
            fontFamily: "var(--ih-font-body)",
            fontWeight: 300,
          }}
        >
          {body}
        </p>
      </div>
    </motion.div>
  )
}

function List({ title, items }: { title: string; items: string[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.8, ease: EASE }}
    >
      <p
        className="text-[10px] uppercase mb-8"
        style={{
          letterSpacing: "0.3em",
          color: "var(--ih-muted)",
          fontFamily: "var(--ih-font-body)",
        }}
      >
        {title}
      </p>
      <ul className="flex flex-col gap-5">
        {items.map((item, i) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.6, ease: EASE, delay: i * 0.06 }}
            className="flex gap-4 items-start text-[15px] leading-[1.6]"
            style={{
              color: "var(--ih-text)",
              opacity: 0.85,
              fontFamily: "var(--ih-font-body)",
              fontWeight: 300,
            }}
          >
            <span
              className="mt-2 w-1 h-1 rounded-full shrink-0"
              style={{ background: "var(--ih-accent)" }}
            />
            <span>{item}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )
}

function Apply() {
  return (
    <section className="relative px-5 md:px-12 py-20 md:py-40 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, color-mix(in oklch, var(--ih-accent) 12%, transparent) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute inset-x-5 md:inset-x-12 top-0 h-px"
        style={{ background: "color-mix(in oklch, var(--ih-text) 10%, transparent)" }}
      />

      <div className="relative max-w-[1100px] mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-[10px] uppercase mb-8"
          style={{
            letterSpacing: "0.3em",
            color: "var(--ih-muted)",
            fontFamily: "var(--ih-font-body)",
          }}
        >
          How to apply
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.95, ease: EASE, delay: 0.1 }}
          className="leading-[0.95] max-w-[20ch]"
          style={{
            fontFamily: "var(--ih-font-display)",
            fontWeight: 400,
            letterSpacing: "-0.02em",
            fontSize: "clamp(2.4rem, 6vw, 5rem)",
          }}
        >
          Send us your CV and a brief statement of{" "}
          <em style={{ color: "var(--ih-accent)" }}>interest.</em>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.25 }}
          className="mt-12 flex flex-col md:flex-row md:items-center gap-6"
        >
          <a
            href="mailto:internships@imaginehealth.ai?subject=Robotics%20%26%20AI%20Internship%20%E2%80%93%20Summer%202025"
            className="group inline-flex items-center gap-3 px-9 py-4 text-[11px] md:text-[12px] uppercase self-start"
            style={{
              background: "var(--ih-accent)",
              color: "var(--ih-accent-contrast)",
              letterSpacing: "0.26em",
              fontWeight: 500,
              fontFamily: "var(--ih-font-body)",
              borderRadius: "2px",
            }}
          >
            internships@imaginehealth.ai
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </a>
          <p
            className="text-[12px] uppercase"
            style={{
              letterSpacing: "0.22em",
              color: "var(--ih-muted)",
              fontFamily: "var(--ih-font-body)",
            }}
          >
            Subject: Robotics & AI Internship – Summer 2025
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.4 }}
          className="mt-16"
        >
          <Link
            href="/contact"
            className="text-[11px] uppercase underline-offset-4 hover:underline"
            style={{
              letterSpacing: "0.3em",
              color: "var(--ih-muted)",
              fontFamily: "var(--ih-font-body)",
            }}
          >
            Or get in touch about other opportunities →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
