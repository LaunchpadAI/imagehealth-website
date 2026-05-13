import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/scroll-progress"
import "./globals.css"

export const metadata: Metadata = {
  title: "Imagine Health — Embodied AI for a new era in healthcare",
  description:
    "Imagine Health combines the precision of AI, the scalability of robotics, and breakthroughs in multimodal diagnostics to deliver safe, autonomous precision in healthcare — starting with ultrasound.",
  metadataBase: new URL("https://imaginehealth.ai"),
  openGraph: {
    title: "Imagine Health",
    description:
      "Embodied Artificial Intelligence that heralds a new era in healthcare.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Imagine Health",
    description:
      "Embodied Artificial Intelligence that heralds a new era in healthcare.",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=DM+Sans:wght@300;400;500;600&display=swap"
        />
      </head>
      <body>
        <ThemeProvider>
          <ScrollProgress />
          <Nav />
          <main className="pt-[64px]">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
