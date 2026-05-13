"use client"

import { type ReactNode } from "react"

interface Props {
  items: ReactNode[]
  speedSec?: number
  separator?: ReactNode
}

export function Marquee({ items, speedSec = 60, separator }: Props) {
  const sep = separator ?? (
    <span
      aria-hidden
      className="inline-block mx-8 md:mx-14 select-none"
      style={{ color: "var(--ih-accent)", opacity: 0.55 }}
    >
      /
    </span>
  )

  const row = (
    <div className="flex items-center shrink-0">
      {items.map((it, i) => (
        <span key={i} className="inline-flex items-center shrink-0">
          {it}
          {sep}
        </span>
      ))}
    </div>
  )

  return (
    <div
      className="relative overflow-hidden w-full select-none"
      style={{
        maskImage:
          "linear-gradient(90deg, transparent 0%, #000 8%, #000 92%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(90deg, transparent 0%, #000 8%, #000 92%, transparent 100%)",
      }}
    >
      <div
        className="flex w-max"
        style={{
          animation: `ih-marquee ${speedSec}s linear infinite`,
        }}
      >
        {row}
        {row}
      </div>
      <style>{`
        @keyframes ih-marquee {
          from { transform: translate3d(0, 0, 0); }
          to   { transform: translate3d(-50%, 0, 0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .ih-marquee, [style*="ih-marquee"] { animation: none !important; }
        }
      `}</style>
    </div>
  )
}
