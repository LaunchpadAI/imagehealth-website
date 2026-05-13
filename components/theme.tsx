"use client"

import { type CSSProperties, type ReactNode } from "react"

export const THEME = {
  bg: "#12130E",
  surface: "#1C1E17",
  text: "#ECEAE3",
  muted: "rgba(236,234,227,0.55)",
  accent: "#A4B85C",
  accentSoft: "#C9D88A",
  accentContrast: "#12130E",
  fontDisplay: '"Cormorant Garamond", Georgia, serif',
  fontBody: '"DM Sans", system-ui, sans-serif',
} as const

const CSS_VARS: CSSProperties = {
  "--ih-bg": THEME.bg,
  "--ih-surface": THEME.surface,
  "--ih-text": THEME.text,
  "--ih-muted": THEME.muted,
  "--ih-accent": THEME.accent,
  "--ih-accent-soft": THEME.accentSoft,
  "--ih-accent-contrast": THEME.accentContrast,
  "--ih-font-display": THEME.fontDisplay,
  "--ih-font-body": THEME.fontBody,
  backgroundColor: "var(--ih-bg)",
  color: "var(--ih-text)",
  fontFamily: "var(--ih-font-body)",
} as CSSProperties

const SCOPED_RESET = `
  [data-ih-root], [data-ih-root] * { color: inherit; }
  [data-ih-root] { color: var(--ih-text); background: var(--ih-bg); }
  [data-ih-root] h1, [data-ih-root] h2, [data-ih-root] h3,
  [data-ih-root] h4, [data-ih-root] h5, [data-ih-root] h6,
  [data-ih-root] p, [data-ih-root] span, [data-ih-root] a,
  [data-ih-root] dt, [data-ih-root] dd, [data-ih-root] li,
  [data-ih-root] button, [data-ih-root] label, [data-ih-root] input,
  [data-ih-root] textarea { color: inherit; }
  [data-ih-root] em { font-style: italic; }
  [data-ih-root] .ih-grain {
    position: fixed; inset: 0; pointer-events: none; z-index: 1; opacity: 0.035;
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");
    mix-blend-mode: overlay;
  }
  [data-ih-root] ::selection { background: var(--ih-accent); color: var(--ih-accent-contrast); }
`

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: SCOPED_RESET }} />
      <div data-ih-root style={CSS_VARS} className="min-h-screen relative">
        <div className="ih-grain" aria-hidden />
        <div className="relative" style={{ zIndex: 2 }}>{children}</div>
      </div>
    </>
  )
}
