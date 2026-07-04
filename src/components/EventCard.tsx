import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import { useState } from 'react'

type EventCardProps = {
  title: string
  type: string
  description: string
  time: string
  icon: LucideIcon
  accent: string
  index: number
}

export function EventCard({ title, type, description, time, icon: Icon, accent, index }: EventCardProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.38, delay: index * 0.07, ease: 'easeOut' }}
      whileHover={{ y: -8, scale: 1.02 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="event-card group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-900/55 p-6 backdrop-blur-2xl"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${accent} opacity-0 transition duration-300 group-hover:opacity-20`} />
      <div className="relative flex h-full flex-col gap-4">
        <div className="flex items-center justify-between">
          <span className="rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-cyan-200">
            {type}
          </span>
          <div className="rounded-full border border-white/10 bg-white/5 p-2 text-cyan-200">
            <Icon className="h-4 w-4" />
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="mt-2 text-sm leading-7 text-slate-400">{description}</p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 8 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="mt-auto rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3"
        >
          <div className="mb-2 flex items-center justify-between text-[11px] uppercase tracking-[0.3em] text-cyan-200">
            <span>Countdown</span>
            <span>08:12</span>
          </div>
          <div className="flex gap-2">
            {[...Array(4)].map((_, meterIndex) => (
              <div key={meterIndex} className="h-2 flex-1 rounded-full bg-white/10">
                <div className="h-2 rounded-full bg-gradient-to-r from-cyan-300 to-fuchsia-400" style={{ width: `${55 + meterIndex * 9}%` }} />
              </div>
            ))}
          </div>
        </motion.div>
        <div className="flex items-center justify-between border-t border-white/10 pt-4 text-sm text-slate-400">
          <span>{time}</span>
          <span className="text-cyan-200">Reserve seat</span>
        </div>
      </div>
    </motion.article>
  )
}
