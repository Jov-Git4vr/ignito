import { motion } from 'framer-motion'
import { RadioTower, TimerReset, type LucideIcon } from 'lucide-react'
import { useState } from 'react'

type CRTCardProps = {
  title: string
  category: string
  accent: string
  description: string
  time: string
  index: number
  icon?: LucideIcon
  onSelect?: () => void
}

const categoryAccent = {
  'Tech Talk': 'text-fuchsia-200 border-fuchsia-400/30 bg-fuchsia-500/10',
  Workshop: 'text-indigo-200 border-indigo-400/30 bg-indigo-500/10',
  Panel: 'text-violet-200 border-violet-400/30 bg-violet-500/10',
  'AI Sprint': 'text-fuchsia-200 border-fuchsia-400/30 bg-fuchsia-500/10',
  'Hardware Lab': 'text-indigo-200 border-indigo-400/30 bg-indigo-500/10',
  'Build Rush': 'text-violet-200 border-violet-400/30 bg-violet-500/10',
}

export function CRTCard({ title, category, accent, description, time, index, icon: Icon, onSelect }: CRTCardProps) {
  const [active, setActive] = useState(false)

  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.38, delay: index * 0.06 }}
      whileHover={{ y: -6, scale: 1.01 }}
      onHoverStart={() => setActive(true)}
      onHoverEnd={() => setActive(false)}
      onClick={() => {
        setActive(true)
        onSelect?.()
      }}
      className="group relative overflow-hidden rounded-[1.5rem] border border-fuchsia-500/20 bg-slate-950/60 p-4 shadow-[0_0_30px_rgba(168,85,247,0.10)]"
    >
      <div className="crt-shell rounded-[1.25rem] border border-fuchsia-500/20 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_60%),rgba(7,8,20,0.94)] p-4">
        <div className="mb-3 flex items-center justify-between text-[10px] uppercase tracking-[0.35em] text-slate-400">
          <span>Channel {index + 1}</span>
          <span className="rounded-full border border-fuchsia-400/30 bg-fuchsia-500/10 px-2 py-1 text-fuchsia-300">{category}</span>
        </div>

        <div className="relative overflow-hidden rounded-[1rem] border border-white/15 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.01))] p-4">
          <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:10px_10px]" />
          <div className="relative flex min-h-[150px] flex-col items-center justify-center gap-3">
            <div className="absolute left-2 top-2 h-2 w-2 rounded-full border border-white/20 bg-slate-600" />
            <div className="absolute right-2 top-2 h-2 w-2 rounded-full border border-white/20 bg-slate-600" />
            <div className={`rounded-full border px-3 py-1 text-[10px] uppercase tracking-[0.35em] ${categoryAccent[category as keyof typeof categoryAccent] || 'text-fuchsia-200 border-fuchsia-400/30 bg-fuchsia-500/10'}`}>
              {category}
            </div>
            {Icon ? <Icon className="h-5 w-5 text-fuchsia-200" /> : null}
            <div className="text-center">
              <h3 className="text-lg font-semibold text-fuchsia-100">{title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-400">{description}</p>
            </div>
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.35em] text-slate-400">
              <TimerReset className="h-3.5 w-3.5 text-fuchsia-200" />
              {time}
            </div>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: active ? 1 : 0, y: active ? 0 : 8 }} transition={{ duration: 0.25 }} className="mt-3 rounded-[1rem] border border-fuchsia-400/20 bg-fuchsia-500/10 p-3 text-sm text-fuchsia-100">
          <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.35em] text-fuchsia-200">
            <span>Signal Pulse</span>
            <span>{accent}</span>
          </div>
          <div className="mt-2 flex items-center gap-2 text-xs text-fuchsia-50">
            <RadioTower className="h-3.5 w-3.5" />
            Live feed • terminal ready
          </div>
        </motion.div>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.8)]" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(74,222,128,0.8)]" />
          </div>
          <span className="text-[10px] uppercase tracking-[0.35em] text-slate-400">monitor</span>
        </div>
      </div>
    </motion.article>
  )
}
