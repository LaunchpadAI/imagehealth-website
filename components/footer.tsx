import Link from "next/link"
import { Linkedin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer
      className="px-5 md:px-12 pt-20 pb-12"
      style={{
        borderTop: "1px solid color-mix(in oklch, var(--ih-text) 8%, transparent)",
        background: "var(--ih-bg)",
      }}
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
          <div className="md:col-span-6">
            <Link href="/" className="inline-block">
              <span
                className="text-[44px] md:text-[88px] leading-[0.95] tracking-[-0.02em] block"
                style={{ fontFamily: "var(--ih-font-display)", fontWeight: 400 }}
              >
                imagine <em style={{ color: "var(--ih-accent)" }}>health</em>
              </span>
            </Link>
            <p
              className="mt-6 max-w-md text-[14px] md:text-[15px] leading-relaxed"
              style={{ color: "var(--ih-muted)" }}
            >
              Combining the precision of AI, the scalability of robotics, and breakthroughs in multimodal diagnostics — to deliver safe, autonomous precision in healthcare.
            </p>
          </div>

          <div className="md:col-span-3 md:col-start-8">
            <FooterColumn title="Navigate">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/news/internship">News</FooterLink>
              <FooterLink href="/contact">Get in touch</FooterLink>
            </FooterColumn>
          </div>

          <div className="md:col-span-3">
            <FooterColumn title="Contact">
              <a
                href="mailto:info@imaginehealth.ai"
                className="block py-1 hover:opacity-100 transition-opacity"
                style={{ color: "var(--ih-muted)" }}
              >
                info@imaginehealth.ai
              </a>
              <a
                href="tel:+442039875299"
                className="block py-1"
                style={{ color: "var(--ih-muted)" }}
              >
                +44 20 3987 5299
              </a>
              <div className="flex items-center gap-3 mt-5">
                <SocialIcon href="https://linkedin.com" label="LinkedIn">
                  <Linkedin className="w-[14px] h-[14px]" />
                </SocialIcon>
                <SocialIcon href="https://instagram.com" label="Instagram">
                  <Instagram className="w-[14px] h-[14px]" />
                </SocialIcon>
              </div>
            </FooterColumn>
          </div>
        </div>

        <div
          className="mt-20 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          style={{ borderTop: "1px solid color-mix(in oklch, var(--ih-text) 6%, transparent)" }}
        >
          <p
            className="text-[10px] uppercase"
            style={{ color: "var(--ih-muted)", letterSpacing: "0.3em", fontFamily: "var(--ih-font-body)" }}
          >
            © Imagine Health Group Inc. 2024–2025
          </p>
          <p
            className="text-[10px] uppercase"
            style={{ color: "var(--ih-muted)", letterSpacing: "0.3em", fontFamily: "var(--ih-font-body)" }}
          >
            London · Miami
          </p>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p
        className="text-[10px] uppercase mb-5"
        style={{
          color: "var(--ih-muted)",
          letterSpacing: "0.3em",
          fontFamily: "var(--ih-font-body)",
        }}
      >
        {title}
      </p>
      <div className="flex flex-col gap-1 text-[13px] md:text-[14px]" style={{ fontFamily: "var(--ih-font-body)" }}>
        {children}
      </div>
    </div>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="py-1 transition-colors hover:text-[color:var(--ih-text)]"
      style={{ color: "var(--ih-muted)" }}
    >
      {children}
    </Link>
  )
}

function SocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center w-9 h-9 rounded-full transition-colors"
      style={{
        border: "1px solid color-mix(in oklch, var(--ih-text) 12%, transparent)",
        color: "var(--ih-muted)",
      }}
    >
      {children}
    </a>
  )
}
