import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

interface HeroTerminalProps {
  onHover?: () => void
  onClick?: () => void
}

export function HeroTerminal({ onHover, onClick }: HeroTerminalProps) {
  return (
    <section id="home" className="relative isolate min-h-[78vh] overflow-hidden rounded-[2.2rem] border border-fuchsia-500/20 bg-purple-950/20 p-7 shadow-[0_0_80px_rgba(168,85,247,0.16)] backdrop-blur-[2px]">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_left,_rgba(236,72,153,0.18),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(99,102,241,0.2),_transparent_40%)]" />
      <div className="absolute inset-0 z-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* 📡 Radar/Signal Array Animation Layer */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="relative h-[280px] w-[280px] sm:h-[360px] sm:w-[360px]">
          <div className="absolute inset-0 rounded-full border border-fuchsia-500/20" />
          <div className="absolute inset-[14%] rounded-full border border-fuchsia-500/20" />
          <div className="absolute inset-[24%] rounded-full border border-indigo-400/20" />
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: 'linear' }} className="absolute left-1/2 top-1/2 h-[50%] w-[2px] -translate-x-1/2 -translate-y-1/2 origin-center rounded-full bg-gradient-to-b from-transparent via-fuchsia-300 to-transparent" />
          <motion.div animate={{ scale: [1, 1.08, 1], opacity: [0.55, 0.95, 0.55] }} transition={{ duration: 3.2, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }} className="absolute inset-[8%] rounded-full border border-fuchsia-400/30" />
          <motion.div animate={{ scale: [1, 1.16, 1], opacity: [0.3, 0.7, 0.3] }} transition={{ duration: 4.4, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }} className="absolute inset-[2%] rounded-full border border-indigo-400/25" />
        </div>
      </div>

      {/* 🛸 Core Centered Interactive Typography */}
      <div className="relative z-20 flex min-h-[70vh] flex-col items-center justify-center text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex flex-col items-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-fuchsia-400/25 bg-fuchsia-500/10 px-3 py-2 text-[11px] uppercase tracking-[0.35em] text-fuchsia-200">
            <Sparkles className="h-3.5 w-3.5" />
            Command Core • 2026
          </div>

          <p className="mb-3 text-[11px] uppercase tracking-[0.45em] text-slate-400">Purple Signal</p>
          <h1 className="relative z-20 text-6xl font-black uppercase leading-[0.82] tracking-[0.25em] text-fuchsia-100 drop-shadow-[0_0_15px_rgba(168,85,247,0.8)] sm:text-7xl lg:text-9xl">
            IGNITO
          </h1>
          
          
        </motion.div>
      </div>

      {/* 🧭 Terminal Brackets Layout Footer */}
      
      <div className="absolute bottom-4 right-4 z-20 rounded-[1rem] border border-indigo-400/20 bg-slate-950/70 px-4 py-3 text-left text-[10px] uppercase tracking-[0.35em] text-indigo-200 backdrop-blur">
        <div className="mb-1 text-indigo-300">Hosted By</div>
        <div className="font-semibold text-indigo-100">MODEL ENGINEERING COLLEGE</div>
      </div>
    </section>
  )
}