"use client"

import { useEffect, useRef, useState } from "react"

interface Props {
  to: number
  suffix?: string
  prefix?: string
  duration?: number
  format?: (n: number) => string
}

export function AnimatedCounter({
  to,
  suffix = "",
  prefix = "",
  duration = 1800,
  format,
}: Props) {
  const [value, setValue] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const ease = (t: number) => 1 - Math.pow(1 - t, 3) // ease-out-cubic

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return
        started.current = true

        const start = performance.now()
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration)
          setValue(Math.round(to * ease(t)))
          if (t < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.3 },
    )

    io.observe(el)
    return () => io.disconnect()
  }, [to, duration])

  const display = format ? format(value) : value.toLocaleString()

  return (
    <span ref={ref} style={{ fontFeatureSettings: '"lnum", "tnum"' }}>
      {prefix}
      {display}
      {suffix}
    </span>
  )
}
