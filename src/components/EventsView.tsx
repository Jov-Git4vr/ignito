import { motion } from 'framer-motion'
import { Cpu, Mic2, Wrench } from 'lucide-react'
import { CRTCard } from './CRTCard'

type EventItem = {
  title: string
  type: string
  description: string
  time: string
  icon: typeof Mic2
}

const eventCards: EventItem[] = [
  {
    title: 'Quantum Keynote Series',
    type: 'Tech Talk',
    description: 'A live-fire briefing on the next era of intelligent systems.',
    time: '09:30 • Main Dome',
    icon: Mic2,
  },
  {
    title: 'Nebula Build Lab',
    type: 'Workshop',
    description: 'Hands-on prototyping with cosmic-grade systems thinking.',
    time: '11:00 • Forge Bay',
    icon: Wrench,
  },
  {
    title: 'Mission Control Panel',
    type: 'Panel',
    description: 'A dense dialogue on ethics, hardware, and the future of human-machine collaboration.',
    time: '15:00 • Command Deck',
    icon: Cpu,
  },
]

type EventsViewProps = {
  onHover: () => void
  onClick: () => void
}

export function EventsView({ onHover, onClick }: EventsViewProps) {
  return (
    <motion.section
      id="events"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="space-y-6"
    >
      <div className="rounded-[2rem] border border-fuchsia-500/20 bg-purple-950/25 p-7 backdrop-blur-md">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.4em] text-fuchsia-300">Learning Hub</p>
            <h2 className="text-3xl font-semibold tracking-[0.18em] text-fuchsia-100">EVENTS</h2>
          </div>
          <div className="rounded-full border border-fuchsia-400/30 bg-fuchsia-500/10 px-4 py-2 text-[11px] uppercase tracking-[0.35em] text-fuchsia-200">
            Analog Program • Live
          </div>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {eventCards.map((event, index) => (
            <div key={event.title} onMouseEnter={onHover} onClick={onClick}>
              <CRTCard
                title={event.title}
                category={event.type}
                accent="fuchsia"
                description={event.description}
                time={event.time}
                index={index}
                icon={event.icon}
                onSelect={onClick}
              />
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
