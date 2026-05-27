import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Discord Standup Generator — Async Standups from Discord Activity",
  description: "Automatically generate daily standup summaries from your Discord channels. Perfect for remote engineering teams."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="94770ec0-07c7-4bf2-b93d-3ab09010e870"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  )
}
