import { motion } from 'framer-motion'
import { Orbit, Volume2, VolumeX } from 'lucide-react'

type ViewState = 'home' | 'events' | 'competitions'

type NavbarProps = {
  activeView: ViewState
  onNavigate: (view: ViewState) => void
  enabled: boolean
  onToggle: () => void
  onHover: () => void
  onClick: () => void
}

const links: Array<{ label: string; view: ViewState }> = [
  { label: 'Home', view: 'home' },
  { label: 'Events', view: 'events' },
  { label: 'Competitions', view: 'competitions' },
]

export function Navbar({ activeView, onNavigate, enabled, onToggle, onHover, onClick }: NavbarProps) {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="sticky top-4 z-50 mx-auto mt-4 flex w-[min(1120px,calc(100%-2rem))] items-center justify-between rounded-full border border-fuchsia-500/20 bg-slate-950/70 px-4 py-3 backdrop-blur-2xl"
    >
      <button
        type="button"
        className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.35em] text-slate-100"
        onMouseEnter={onHover}
        onClick={() => {
          onNavigate('home')
          onClick()
        }}
      >
        <span className="rounded-full border border-fuchsia-400/30 bg-fuchsia-500/10 p-2 shadow-[0_0_18px_rgba(168,85,247,0.25)]">
          <Orbit className="h-4 w-4 text-fuchsia-300" />
        </span>
        IGNITO
      </button>

      <nav className="hidden items-center gap-2 md:flex">
        {links.map((link) => {
          const active = link.view === activeView
          return (
            <motion.button
              key={link.label}
              type="button"
              whileHover={{ scale: 1.04, y: -1 }}
              className={`rounded-full px-4 py-2 text-sm transition ${active ? 'bg-fuchsia-500/20 text-fuchsia-100 shadow-[0_0_18px_rgba(236,72,153,0.16)]' : 'text-slate-300 hover:bg-fuchsia-500/10 hover:text-fuchsia-200'}`}
              onMouseEnter={onHover}
              onClick={() => {
                onNavigate(link.view)
                onClick()
              }}
            >
              {link.label}
            </motion.button>
          )
        })}
      </nav>

      <div className="flex items-center gap-2">
        <motion.button
          whileTap={{ scale: 0.97 }}
          whileHover={{ scale: 1.04, y: -1 }}
          type="button"
          onClick={() => {
            onToggle()
            onClick()
          }}
          onMouseEnter={onHover}
          className="rounded-full border border-fuchsia-500/20 bg-fuchsia-500/10 p-2.5 text-fuchsia-200"
          aria-label="Toggle terminal sounds"
        >
          {enabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.03, y: -1 }}
          whileTap={{ scale: 0.97 }}
          type="button"
          className="rounded-full border border-indigo-400/30 bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-200 shadow-[0_0_25px_rgba(99,102,241,0.16)]"
          onMouseEnter={onHover}
          onClick={() => {
            onNavigate('competitions')
            onClick()
          }}
        >
          Join Mission
        </motion.button>
      </div>
    </motion.header>
  )
}
