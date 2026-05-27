export default function Home() {
  const faqs = [
    {
      q: "How does it connect to Discord?",
      a: "You authenticate via Discord OAuth. The app reads message history from channels you select — no bots required."
    },
    {
      q: "What AI model generates the summaries?",
      a: "We use GPT-4o to extract development activities, blockers, and wins from your team's messages and format them as standup reports."
    },
    {
      q: "Can I customize the report format?",
      a: "Yes. After subscribing you can edit the standup template, choose delivery time, and pick which channels to monitor."
    }
  ]

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Discord Productivity
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Async standups from<br />
          <span className="text-[#58a6ff]">Discord activity</span>
        </h1>
        <p className="text-[#8b949e] text-lg max-w-xl mx-auto mb-8">
          Stop scheduling standup calls. Connect your Discord server, pick your channels, and get AI-generated daily summaries of what your team shipped, discussed, and blocked on.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Started — $15/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. No Discord bot install needed.</p>
      </section>

      {/* How it works */}
      <section className="mb-20">
        <div className="grid sm:grid-cols-3 gap-6 text-center">
          {[
            { step: "1", title: "Connect Discord", desc: "OAuth login — select the server and channels to monitor." },
            { step: "2", title: "AI Analyzes Activity", desc: "GPT-4o reads messages and extracts tasks, blockers, and wins." },
            { step: "3", title: "Get Your Standup", desc: "Receive a formatted report daily or weekly via Discord DM or email." }
          ].map(({ step, title, desc }) => (
            <div key={step} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-[#58a6ff] text-2xl font-bold mb-2">{step}</div>
              <div className="text-white font-semibold mb-1">{title}</div>
              <div className="text-[#8b949e] text-sm">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20" id="pricing">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="max-w-sm mx-auto bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$15</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited Discord servers",
              "Up to 20 monitored channels",
              "Daily & weekly standup reports",
              "AI-powered activity extraction",
              "Custom report templates",
              "Discord DM + email delivery"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-[#c9d1d9] text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Subscribe Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-white font-semibold mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs mt-20">
        © {new Date().getFullYear()} Discord Standup Generator. All rights reserved.
      </footer>
    </main>
  )
}
