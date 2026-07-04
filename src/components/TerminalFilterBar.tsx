import { motion } from 'framer-motion'

type FilterBarProps = {
  categories: string[]
  selected: string
  onSelect: (category: string) => void
  accentMap: Record<string, string>
}

export function TerminalFilterBar({ categories, selected, onSelect, accentMap }: FilterBarProps) {
  return (
    <div className="flex flex-wrap gap-3 rounded-[1.5rem] border border-amber-400/20 bg-stone-950/70 p-3 backdrop-blur-xl">
      {categories.map((category) => {
        const active = category === selected
        const accent = accentMap[category] || 'border-cyan-400/30 bg-cyan-400/10 text-cyan-200'
        return (
          <motion.button
            key={category}
            whileTap={{ scale: 0.97 }}
            whileHover={{ y: -2, scale: 1.01 }}
            onClick={() => onSelect(category)}
            className={`rounded-full border px-4 py-2 text-[11px] uppercase tracking-[0.32em] ${active ? `${accent} shadow-[0_0_18px_rgba(16,185,129,0.16)]` : 'border-white/10 bg-white/5 text-slate-300'}`}
          >
            {category}
          </motion.button>
        )
      })}
    </div>
  )
}
