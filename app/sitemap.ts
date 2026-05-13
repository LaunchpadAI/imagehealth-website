import type { MetadataRoute } from "next"

const SITE = "https://imaginehealth.ai"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return [
    { url: `${SITE}/`, lastModified, changeFrequency: "monthly", priority: 1.0 },
    { url: `${SITE}/contact`, lastModified, changeFrequency: "yearly", priority: 0.8 },
    { url: `${SITE}/news/internship`, lastModified, changeFrequency: "monthly", priority: 0.7 },
  ]
}
