import { motion } from 'framer-motion'
import { ArrowRight, Orbit, Sparkles, Zap } from 'lucide-react'
import { useState } from 'react'

const stats = [
  { label: 'Launches', value: '24H' },
  { label: 'Teams', value: '60+' },
  { label: 'Cosmos', value: '12' },
]

export function Hero() {
  const [launched, setLaunched] = useState(false)
  const title = 'IGNITO'.split('')

  return (
    <section id="home" className="grid items-center gap-10 pt-8 lg:grid-cols-[1.05fr_0.95fr] lg:pt-12">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="space-y-8"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-2 text-sm text-cyan-100 backdrop-blur">
          <Sparkles className="h-4 w-4" />
          Cyber-space summit • 2026 edition
        </div>

        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.5em] text-slate-400">Mission briefing</p>
          <h1 className="hero-title text-5xl font-black uppercase leading-[0.8] sm:text-6xl lg:text-8xl">
            {title.map((letter, index) => (
              <span key={`${letter}-${index}`} className="glitch-letter">
                {letter}
              </span>
            ))}
          </h1>
          <p className="data-stream max-w-xl text-lg leading-8 text-slate-300 sm:text-xl">
            // LIVE NODE STREAM · 01101001 · HYPER-INTELLIGENCE READY · TRANSMISSION STABLE
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <motion.a
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            href="#events"
            onMouseEnter={() => setLaunched(true)}
            onMouseLeave={() => setLaunched(false)}
            className="launch-btn group inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-cyan-400/15 px-6 py-3 text-sm font-semibold text-cyan-100 shadow-[0_0_28px_rgba(34,211,238,0.2)]"
          >
            <span className="launch-check">{launched ? 'Systems Check' : 'Launch Mission'}</span>
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            href="#competitions"
            className="inline-flex items-center gap-2 rounded-full border border-fuchsia-400/30 bg-fuchsia-500/10 px-6 py-3 text-sm font-semibold text-fuchsia-200 backdrop-blur"
          >
            Explore Orbit
            <Orbit className="h-4 w-4" />
          </motion.a>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {stats.map((item) => (
            <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
              <p className="text-2xl font-semibold text-white">{item.value}</p>
              <p className="text-sm text-slate-400">{item.label}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 22 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.08, ease: 'easeOut' }}
        className="relative"
      >
        <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.24),_transparent_42%),radial-gradient(circle_at_bottom_right,_rgba(232,121,249,0.24),_transparent_35%)] blur-3xl" />
        <div className="relative overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-slate-950/70 p-6 shadow-[0_0_90px_rgba(34,211,238,0.16)] backdrop-blur-2xl">
          <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_0%,rgba(255,255,255,0.04)_50%,transparent_100%)]" />
          <div className="relative flex min-h-[430px] flex-col justify-between rounded-[1.5rem] border border-white/10 bg-[radial-gradient(circle_at_center,_rgba(12,18,33,0.95),_rgba(2,6,23,0.98))] p-6">
            <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.35em] text-slate-400">
              <span>Orbital Deck</span>
              <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-emerald-300">
                Live
              </span>
            </div>

            <div className="relative mx-auto flex h-72 w-72 items-center justify-center">
              <div className="absolute h-64 w-64 rounded-full border border-cyan-400/25" />
              <div className="absolute h-48 w-48 rounded-full border border-fuchsia-400/20" />
              <div className="absolute h-32 w-32 rounded-full border border-white/20" />
              <motion.div
                animate={{ x: [0, 34, -16, 0], y: [-8, -28, 12, -8], rotate: [0, 18, -10, 0] }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
                className="absolute"
              >
                <svg viewBox="0 0 160 160" className="h-28 w-28 drop-shadow-[0_0_24px_rgba(34,211,238,0.4)]">
                  <path d="M82 22 L112 54 L86 66 L104 102 L72 90 L60 120 L56 80 L26 70 L58 56 Z" fill="rgba(255,255,255,0.08)" stroke="rgba(34,211,238,0.9)" strokeWidth="2" />
                  <path d="M48 58 L70 48 L86 66" stroke="rgba(232,121,249,0.8)" strokeWidth="2" />
                  <path d="M94 44 L112 54" stroke="rgba(255,255,255,0.35)" strokeWidth="2" />
                </svg>
              </motion.div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 16, repeat: Number.POSITIVE_INFINITY, ease: 'linear' }}
                className="absolute inset-0 rounded-full border border-dashed border-fuchsia-400/25"
              />
              <motion.div
                animate={{ scale: [1, 1.06, 1] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
                className="absolute h-44 w-44 rounded-full border border-cyan-400/10"
              />
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <div className="mb-2 flex items-center gap-2 text-cyan-200">
                  <Zap className="h-4 w-4" />
                  Signal Boost
                </div>
                <p className="text-sm leading-7 text-slate-400">Immersive showcases, lightning talks, and cosmic panels.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <div className="mb-2 flex items-center gap-2 text-fuchsia-200">
                  <Sparkles className="h-4 w-4" />
                  Innovation Pulse
                </div>
                <p className="text-sm leading-7 text-slate-400">Competitive missions crafted to awaken bold builders.</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
