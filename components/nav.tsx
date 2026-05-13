"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { motion } from "motion/react"

const LINKS = [
  { href: "/news/internship", label: "News" },
  { href: "/contact", label: "Get in touch" },
] as const

export function Nav() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 h-[64px] flex items-center"
      style={{
        background: scrolled
          ? "color-mix(in oklch, var(--ih-bg) 88%, transparent)"
          : "color-mix(in oklch, var(--ih-bg) 65%, transparent)",
        backdropFilter: "blur(18px) saturate(140%)",
        WebkitBackdropFilter: "blur(18px) saturate(140%)",
        borderBottom: scrolled
          ? "1px solid color-mix(in oklch, var(--ih-text) 8%, transparent)"
          : "1px solid transparent",
        transition: "background 220ms ease, border-color 220ms ease",
      }}
    >
      <div className="w-full px-5 md:px-12 flex items-center justify-between">
        <Link href="/" className="group inline-flex items-baseline gap-2">
          <span
            className="text-[20px] md:text-[24px] leading-none tracking-[-0.01em]"
            style={{ fontFamily: "var(--ih-font-display)", fontWeight: 500 }}
          >
            imagine <em className="not-italic" style={{ color: "var(--ih-accent)" }}>health</em>
          </span>
        </Link>

        <ul className="flex items-center gap-1 md:gap-2">
          {LINKS.map((link) => {
            const active = pathname === link.href || pathname.startsWith(link.href + "/")
            return (
              <li key={link.href} className="relative">
                <Link
                  href={link.href}
                  className="relative inline-flex items-center px-3 md:px-5 py-2 text-[10px] md:text-[11px] uppercase whitespace-nowrap"
                  style={{
                    fontFamily: "var(--ih-font-body)",
                    letterSpacing: "0.28em",
                    fontWeight: 500,
                    color: active ? "var(--ih-text)" : "var(--ih-muted)",
                    transition: "color 200ms ease",
                  }}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-3 right-3 md:left-5 md:right-5 -bottom-[2px] h-px"
                      style={{ background: "var(--ih-accent)" }}
                      transition={{ type: "spring", stiffness: 420, damping: 32 }}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
