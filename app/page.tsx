"use client"

import { motion, useMotionValue, useSpring } from "motion/react"
import { ArrowRight, Play } from "lucide-react"
import { useRef, useState, type MouseEvent } from "react"
import { AnimatedCounter } from "@/components/animated-counter"
import { Marquee } from "@/components/marquee"

const EASE = [0.16, 1, 0.3, 1] as const
const VIEWPORT = { once: true, amount: 0.05 } as const

const TAGS = [
  "Ultrasound",
  "Robotics Control",
  "Computer Vision",
  "Safety",
  "Scalability",
]

const STATS = [
  { value: 25000, suffix: "", label: "Unfilled Sonographer Roles" },
  { value: 85, suffix: "%", label: "Occupational Injury Rate" },
  { value: 24, suffix: " days", label: "Average Ultrasound Wait Time" },
  { value: 47, suffix: "%", label: "Sonographers Ready to Quit" },
]

const MARQUEE_ITEMS = [
  "Embodied AI",
  "Robotic Ultrasound",
  "Computer Vision",
  "Multimodal Diagnostics",
  "Autonomous Imaging",
  "Patient Safety",
  "Sensor Fusion",
  "Real-time Control",
]

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MarqueeSection />
      <MissionSection />
      <VideoSection />
      <ProblemSection />
      <ChallengesSection />
      <CtaSection />
    </>
  )
}

// ─────────────────────────────────────────────────────────────── Hero ──────

function HeroSection() {
  return (
    <section className="relative overflow-hidden px-5 md:px-12 pt-10 md:pt-24 pb-20 md:pb-28 min-h-[calc(100svh-64px)] flex items-center">
      <div className="relative max-w-[1440px] mx-auto w-full">
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: EASE, delay: 0.05 }}
          className="leading-[0.96] md:leading-[0.94]"
          style={{
            fontFamily: "var(--ih-font-display)",
            fontWeight: 400,
            letterSpacing: "-0.022em",
            fontSize: "clamp(2.4rem, 9vw, 7.8rem)",
            maxWidth: "18ch",
          }}
        >
          Embodied Artificial Intelligence{" "}
          <em style={{ color: "var(--ih-accent)" }}>that heralds a new era</em>{" "}
          in healthcare.
        </motion.h1>

        <div className="mt-12 md:mt-20 grid md:grid-cols-12 gap-8 md:gap-12 items-start">
          <div className="md:col-span-1 hidden md:block">
            <div
              className="h-px w-full mt-4"
              style={{ background: "color-mix(in oklch, var(--ih-text) 18%, transparent)" }}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.25 }}
            className="md:col-span-5 max-w-md"
          >
            <p
              className="text-[15px] md:text-[17px] leading-[1.65]"
              style={{
                color: "var(--ih-text)",
                opacity: 0.85,
                fontFamily: "var(--ih-font-body)",
                fontWeight: 300,
              }}
            >
              Imagine Health is at the forefront of medical technology innovation — combining the precision of AI with the scalability and efficiency of robots, and using breakthroughs in multimodal diagnostics to deliver safe and autonomous precision in healthcare.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.4 }}
            className="md:col-span-5 max-w-md"
          >
            <p
              className="text-[15px] md:text-[17px] leading-[1.65]"
              style={{
                color: "var(--ih-text)",
                opacity: 0.85,
                fontFamily: "var(--ih-font-body)",
                fontWeight: 300,
              }}
            >
              Our breakthrough system leverages computer vision to enable the robotic arm to deliver optimal imaging and multimodal data in a consistent, repeatable and safe manner — without the need of experienced technicians.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.7 }}
          className="mt-12 md:mt-24 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8 md:gap-10"
        >
          <MagneticCTA href="/contact">Get in touch</MagneticCTA>
          <a
            href="#mission"
            className="group inline-flex items-center gap-2 text-[10px] md:text-[11px] uppercase"
            style={{
              letterSpacing: "0.3em",
              color: "var(--ih-muted)",
              fontFamily: "var(--ih-font-body)",
            }}
          >
            <span className="relative">
              Explore the work
              <span
                className="absolute left-0 -bottom-1 right-0 h-px transition-transform duration-500 origin-left scale-x-0 group-hover:scale-x-100"
                style={{ background: "var(--ih-accent)" }}
              />
            </span>
            <span aria-hidden className="inline-block transition-transform duration-300 group-hover:translate-y-1">↓</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────── Marquee ──

function MarqueeSection() {
  return (
    <section
      className="py-7 md:py-9"
      style={{
        borderTop: "1px solid color-mix(in oklch, var(--ih-text) 7%, transparent)",
        borderBottom: "1px solid color-mix(in oklch, var(--ih-text) 7%, transparent)",
      }}
    >
      <Marquee
        speedSec={70}
        items={MARQUEE_ITEMS.map((item) => (
          <span
            className="text-[12px] md:text-[14px] uppercase whitespace-nowrap"
            style={{
              fontFamily: "var(--ih-font-body)",
              letterSpacing: "0.28em",
              color: "var(--ih-muted)",
              fontWeight: 400,
            }}
          >
            {item}
          </span>
        ))}
      />
    </section>
  )
}

// ─────────────────────────────────────────────────────────────── Mission ──

function MissionSection() {
  return (
    <section id="mission" className="px-5 md:px-12 py-20 md:py-40">
      <div className="max-w-[1440px] mx-auto grid md:grid-cols-12 gap-10 md:gap-20 items-start">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.6, ease: EASE }}
          className="md:col-span-3 text-[10px] uppercase pt-3"
          style={{
            letterSpacing: "0.3em",
            color: "var(--ih-muted)",
            fontFamily: "var(--ih-font-body)",
          }}
        >
          <span style={{ color: "var(--ih-accent)" }}>I.</span>
          <span className="ml-3">The team</span>
        </motion.p>

        <div className="md:col-span-9 max-w-[1100px]">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.85, ease: EASE }}
            className="leading-[1.0]"
            style={{
              fontFamily: "var(--ih-font-display)",
              fontWeight: 400,
              letterSpacing: "-0.015em",
              fontSize: "clamp(2rem, 5.5vw, 4.6rem)",
            }}
          >
            An interdisciplinary team on a{" "}
            <em style={{ color: "var(--ih-accent)" }}>singular mission.</em>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.6, ease: EASE, delay: 0.15 }}
            className="mt-12 md:mt-16 flex flex-wrap gap-x-3 gap-y-3"
          >
            {TAGS.map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT}
                transition={{ duration: 0.5, ease: EASE, delay: 0.2 + i * 0.06 }}
                className="inline-flex items-center px-4 py-2 text-[10px] md:text-[11px] uppercase"
                style={{
                  letterSpacing: "0.24em",
                  color: "var(--ih-text)",
                  border: "1px solid color-mix(in oklch, var(--ih-text) 16%, transparent)",
                  borderRadius: "999px",
                  fontFamily: "var(--ih-font-body)",
                }}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────── Video ────

function VideoSection() {
  const [playing, setPlaying] = useState(false)

  return (
    <section className="px-5 md:px-12 pb-28 md:pb-40">
      <div className="max-w-[1440px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.9, ease: EASE }}
          className="relative w-full aspect-video overflow-hidden group"
          style={{
            border: "1px solid color-mix(in oklch, var(--ih-text) 10%, transparent)",
            background: "var(--ih-surface)",
            borderRadius: "2px",
          }}
        >
          {playing ? (
            <iframe
              src="https://www.youtube.com/embed/PtCPogxZASc?autoplay=1&rel=0&modestbranding=1"
              title="Transthoracic Echocardiogram — autonomous robotic ultrasound demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          ) : (
            <button
              onClick={() => setPlaying(true)}
              aria-label="Play demonstration video"
              className="absolute inset-0 w-full h-full block text-left"
            >
              <CustomVideoPoster />
              <div className="absolute inset-0 flex items-center justify-center">
                <PlayButton />
              </div>
              <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 right-6 max-w-xl">
                <p
                  className="text-[10px] md:text-[11px] uppercase mb-2"
                  style={{
                    letterSpacing: "0.32em",
                    color: "var(--ih-accent)",
                    fontFamily: "var(--ih-font-body)",
                  }}
                >
                  Demo / Live System · 2 min
                </p>
                <p
                  className="leading-[1.1]"
                  style={{
                    fontFamily: "var(--ih-font-display)",
                    fontSize: "clamp(1.5rem, 3.2vw, 2.6rem)",
                    fontWeight: 400,
                    letterSpacing: "-0.01em",
                    color: "var(--ih-text)",
                  }}
                >
                  Transthoracic Echocardiogram —{" "}
                  <em style={{ color: "var(--ih-accent)" }}>autonomous robotic ultrasound.</em>
                </p>
              </div>
            </button>
          )}
        </motion.div>
      </div>
    </section>
  )
}

function CustomVideoPoster() {
  return (
    <div
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(180deg, color-mix(in oklch, var(--ih-bg) 60%, var(--ih-surface)) 0%, var(--ih-surface) 100%)",
      }}
    />
  )
}

function PlayButton() {
  return (
    <span className="relative inline-flex items-center justify-center">
      <span
        className="absolute inset-0 rounded-full"
        style={{
          background: "var(--ih-accent)",
          opacity: 0.18,
          animation: "ih-pulse-ring 2.4s ease-out infinite",
        }}
      />
      <span
        className="absolute inset-0 rounded-full"
        style={{
          background: "var(--ih-accent)",
          opacity: 0.12,
          animation: "ih-pulse-ring 2.4s ease-out infinite 1.2s",
        }}
      />
      <span
        className="relative inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full transition-transform duration-300 group-hover:scale-110"
        style={{
          background: "var(--ih-accent)",
          color: "var(--ih-accent-contrast)",
          boxShadow: "0 18px 48px color-mix(in oklch, var(--ih-accent) 35%, transparent)",
        }}
      >
        <Play className="w-6 h-6 md:w-7 md:h-7 fill-current ml-1" strokeWidth={0} />
      </span>
      <style>{`
        @keyframes ih-pulse-ring {
          0%   { transform: scale(1); opacity: 0.18; }
          80%  { transform: scale(2.6); opacity: 0; }
          100% { transform: scale(2.6); opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="ih-pulse-ring"] { animation: none !important; }
        }
      `}</style>
    </span>
  )
}

// ─────────────────────────────────────────────────────────────── Problem ──

function ProblemSection() {
  return (
    <section
      className="px-5 md:px-12 py-20 md:py-40"
      style={{
        background: "var(--ih-surface)",
        borderTop: "1px solid color-mix(in oklch, var(--ih-text) 7%, transparent)",
        borderBottom: "1px solid color-mix(in oklch, var(--ih-text) 7%, transparent)",
      }}
    >
      <div className="max-w-[1440px] mx-auto grid md:grid-cols-12 gap-12 md:gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.85, ease: EASE }}
          className="md:col-span-5 md:sticky md:top-[100px]"
        >
          <p
            className="text-[10px] uppercase mb-8"
            style={{
              letterSpacing: "0.3em",
              color: "var(--ih-muted)",
              fontFamily: "var(--ih-font-body)",
            }}
          >
            <span style={{ color: "var(--ih-accent)" }}>II.</span>
            <span className="ml-3">The case</span>
          </p>
          <h2
            className="leading-[1.0]"
            style={{
              fontFamily: "var(--ih-font-display)",
              fontWeight: 400,
              letterSpacing: "-0.015em",
              fontSize: "clamp(2rem, 5vw, 4.2rem)",
            }}
          >
            Time to rethink healthcare delivery.{" "}
            <em style={{ color: "var(--ih-accent)" }}>Starting with ultrasound.</em>
          </h2>
        </motion.div>

        <div className="md:col-span-6 md:col-start-7">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.6, ease: EASE }}
            className="h-px w-16 mb-8"
            style={{ background: "var(--ih-accent)" }}
          />
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
            className="text-[15px] md:text-[17px] leading-[1.65] max-w-xl"
            style={{
              color: "var(--ih-text)",
              opacity: 0.85,
              fontFamily: "var(--ih-font-body)",
              fontWeight: 300,
            }}
          >
            Some medical tasks, like sonography, should be automated due to the high risk they pose to practitioners and the potential for human error. These roles involve repetitive tasks and physical strain, leading to musculoskeletal injuries. Manual processes can introduce variability and errors that automation could significantly reduce — shifting medical expertise toward complex, decision-driven aspects of patient treatment.
          </motion.p>

          <div className="mt-12 md:mt-16 grid grid-cols-2 gap-x-5 gap-y-10 md:gap-x-12 md:gap-y-14">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT}
                transition={{ duration: 0.7, ease: EASE, delay: 0.1 + i * 0.08 }}
                className="relative pl-4"
                style={{
                  borderLeft: "1px solid color-mix(in oklch, var(--ih-accent) 35%, transparent)",
                }}
              >
                <div
                  className="leading-[0.95]"
                  style={{
                    fontFamily: "var(--ih-font-display)",
                    fontWeight: 400,
                    fontSize: "clamp(2.4rem, 5.5vw, 4.2rem)",
                    letterSpacing: "-0.02em",
                    color: "var(--ih-accent)",
                  }}
                >
                  <AnimatedCounter to={stat.value} suffix={stat.suffix} />
                </div>
                <p
                  className="mt-3 text-[11px] md:text-[12px] uppercase max-w-[18ch]"
                  style={{
                    letterSpacing: "0.22em",
                    color: "var(--ih-muted)",
                    fontFamily: "var(--ih-font-body)",
                    lineHeight: 1.5,
                  }}
                >
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────── Challenges

function ChallengesSection() {
  return (
    <section className="px-5 md:px-12 py-20 md:py-40">
      <div className="max-w-[1440px] mx-auto grid md:grid-cols-12 gap-10 md:gap-16 items-start">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.6, ease: EASE }}
          className="md:col-span-3 text-[10px] uppercase pt-3"
          style={{
            letterSpacing: "0.3em",
            color: "var(--ih-muted)",
            fontFamily: "var(--ih-font-body)",
          }}
        >
          <span style={{ color: "var(--ih-accent)" }}>III.</span>
          <span className="ml-3">The barriers</span>
        </motion.p>

        <div className="md:col-span-9">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.9, ease: EASE }}
            className="leading-[1.25] max-w-4xl"
            style={{
              fontFamily: "var(--ih-font-display)",
              fontWeight: 400,
              letterSpacing: "-0.01em",
              fontSize: "clamp(1.4rem, 2.8vw, 2.4rem)",
            }}
          >
            With over <em style={{ color: "var(--ih-accent)" }}>150,000 publications</em> on robotic ultrasound systems detailing advancements in teleoperated platforms, AI integration and imaging — why has this technology not yet become a practical, widespread reality in healthcare?
          </motion.p>

          <div className="mt-16 md:mt-24 grid md:grid-cols-2 gap-10 md:gap-14">
            <ChallengeCard
              index="01"
              title="Precision & Control"
              body="Achieving the delicate control required for ultrasound procedures is challenging. Robotic systems must replicate the nuanced, real-time adjustments that human sonographers make based on tactile feedback and visual cues. While machine learning has made strides, real-time interpretation and decision-making during scans remain difficult to fully automate."
            />
            <ChallengeCard
              index="02"
              title="Dynamic Environment"
              body="Ultrasound exams involve dynamic and complex environments — moving organs, varying patient conditions. Adapting robotic systems to these variations requires advanced algorithms that can handle uncertainty in real time, all while ensuring patient comfort and consistent, high-quality imaging."
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.85, ease: EASE, delay: 0.2 }}
            className="mt-20 md:mt-28 max-w-3xl"
          >
            <p
              className="text-[10px] uppercase mb-6"
              style={{
                letterSpacing: "0.3em",
                color: "var(--ih-muted)",
                fontFamily: "var(--ih-font-body)",
              }}
            >
              Our north star
            </p>
            <p
              className="leading-[1.05]"
              style={{
                fontFamily: "var(--ih-font-display)",
                fontStyle: "italic",
                fontWeight: 400,
                letterSpacing: "-0.015em",
                fontSize: "clamp(2rem, 5vw, 4rem)",
              }}
            >
              Creating the world{" "}
              <span style={{ color: "var(--ih-accent)" }}>we want to inhabit.</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ChallengeCard({
  index,
  title,
  body,
}: {
  index: string
  title: string
  body: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: 0.8, ease: EASE }}
      className="relative pt-8"
      style={{ borderTop: "1px solid color-mix(in oklch, var(--ih-text) 18%, transparent)" }}
    >
      <span
        className="absolute -top-3 left-0 px-2 text-[10px] uppercase"
        style={{
          background: "var(--ih-bg)",
          letterSpacing: "0.3em",
          color: "var(--ih-accent)",
          fontFamily: "var(--ih-font-body)",
        }}
      >
        {index}
      </span>
      <h3
        className="leading-[1.1] mb-5"
        style={{
          fontFamily: "var(--ih-font-display)",
          fontWeight: 500,
          letterSpacing: "-0.01em",
          fontSize: "clamp(1.4rem, 2.4vw, 2rem)",
        }}
      >
        {title}
      </h3>
      <p
        className="text-[14px] md:text-[15px] leading-[1.7]"
        style={{
          color: "var(--ih-text)",
          opacity: 0.78,
          fontFamily: "var(--ih-font-body)",
          fontWeight: 300,
        }}
      >
        {body}
      </p>
    </motion.div>
  )
}

// ─────────────────────────────────────────────────────────────── CTA ──────

function CtaSection() {
  return (
    <section className="relative px-5 md:px-12 py-20 md:py-40 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, color-mix(in oklch, var(--ih-accent) 14%, transparent) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute inset-x-5 md:inset-x-12 top-0 h-px"
        style={{ background: "color-mix(in oklch, var(--ih-text) 10%, transparent)" }}
      />

      <div className="relative max-w-[1440px] mx-auto flex flex-col items-start md:items-center md:text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-[10px] uppercase mb-8"
          style={{
            letterSpacing: "0.3em",
            color: "var(--ih-muted)",
            fontFamily: "var(--ih-font-body)",
          }}
        >
          Hiring · Collaborating · Building
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.95, ease: EASE, delay: 0.1 }}
          className="leading-[0.95] max-w-[14ch]"
          style={{
            fontFamily: "var(--ih-font-display)",
            fontWeight: 400,
            letterSpacing: "-0.02em",
            fontSize: "clamp(3rem, 9vw, 8rem)",
          }}
        >
          Join our <em style={{ color: "var(--ih-accent)" }}>journey.</em>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.7, ease: EASE, delay: 0.3 }}
          className="mt-12"
        >
          <MagneticCTA href="/contact">Get in touch</MagneticCTA>
        </motion.div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────── Magnetic CTA

function MagneticCTA({ href, children }: { href: string; children: React.ReactNode }) {
  const ref = useRef<HTMLAnchorElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 300, damping: 22, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 300, damping: 22, mass: 0.4 })

  const onMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const dx = e.clientX - (r.left + r.width / 2)
    const dy = e.clientY - (r.top + r.height / 2)
    x.set(dx * 0.18)
    y.set(dy * 0.18)
  }

  const onLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy }}
      className="group relative inline-flex items-center gap-3 px-9 py-4 text-[11px] md:text-[12px] uppercase"
    >
      <span
        className="absolute inset-0"
        style={{
          background: "var(--ih-accent)",
          borderRadius: "2px",
          transition: "transform 280ms ease",
        }}
      />
      <span
        className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        style={{
          background: "var(--ih-accent-soft)",
          borderRadius: "2px",
        }}
      />
      <span
        className="relative inline-flex items-center gap-3"
        style={{
          color: "var(--ih-accent-contrast)",
          letterSpacing: "0.26em",
          fontWeight: 500,
          fontFamily: "var(--ih-font-body)",
        }}
      >
        {children}
        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
      </span>
    </motion.a>
  )
}

