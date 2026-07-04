import { motion } from 'framer-motion'
import { Trophy } from 'lucide-react'
import { useState } from 'react'
import { CRTCard } from './CRTCard'

const competitionCards = [
  {
    title: 'Space Apps',
    category: 'AI Sprint',
    description: 'Solve cosmic challenges through product, AI, and robotics thinking.',
    time: '24 Teams',
  },
  {
    title: 'Rover Design Challenge',
    category: 'Hardware Lab',
    description: 'Engineer autonomous exploration machines for hostile terrain.',
    time: '16 Rigs',
  },
  {
    title: 'Hack the Orbit',
    category: 'Build Rush',
    description: 'A 36-hour sprint where builders turn raw ambition into code.',
    time: '38 Builders',
  },
]

const filters = ['All', 'AI', 'Hardware', 'Build']

type CompetitionsViewProps = {
  onHover: () => void
  onClick: () => void
}

export function CompetitionsView({ onHover, onClick }: CompetitionsViewProps) {
  const [activeFilter, setActiveFilter] = useState('All')

  return (
    <motion.section
      id="competitions"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="space-y-6"
    >
      <div className="rounded-[2rem] border border-indigo-400/20 bg-purple-950/25 p-7 backdrop-blur-md">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.4em] text-indigo-300">CRT Dashboard</p>
            <h2 className="text-3xl font-semibold tracking-[0.18em] text-indigo-100">COMPETITIONS</h2>
          </div>
          <div className="rounded-full border border-indigo-400/30 bg-indigo-500/10 px-4 py-2 text-[11px] uppercase tracking-[0.35em] text-indigo-200">
            Mission Board • Ready
          </div>
        </div>

        <div className="mb-6 flex flex-wrap gap-3 rounded-[1.4rem] border border-fuchsia-500/20 bg-slate-950/70 p-3">
          {filters.map((filter) => {
            const active = filter === activeFilter
            return (
              <button
                key={filter}
                type="button"
                onMouseEnter={onHover}
                onClick={() => {
                  setActiveFilter(filter)
                  onClick()
                }}
                className={`rounded-full border px-4 py-2 text-[11px] uppercase tracking-[0.35em] transition ${active ? 'border-fuchsia-400 bg-fuchsia-500/20 text-fuchsia-100 shadow-[0_0_18px_rgba(236,72,153,0.35)]' : 'border-indigo-400/20 bg-indigo-500/10 text-indigo-200'}`}
              >
                {filter}
              </button>
            )
          })}
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {competitionCards.map((item, index) => (
            <div key={item.title} onMouseEnter={onHover} onClick={onClick}>
              <CRTCard
                title={item.title}
                category={item.category}
                accent="indigo"
                description={item.description}
                time={item.time}
                index={index}
                icon={Trophy}
                onSelect={onClick}
              />
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
