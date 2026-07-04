import { motion } from 'framer-motion'
import { Cpu, Mic2, Trophy, Wrench } from 'lucide-react'
import { useState } from 'react'
import { useSoundEffects } from '../hooks/useSoundEffects'
import { Contact } from './Contact'
import { CRTCard } from './CRTCard'
import { HeroTerminal } from './HeroTerminal'
import { Navbar } from './Navbar'
import { TerminalFilterBar } from './TerminalFilterBar'

const eventCards = [
  {
    title: 'Quantum Keynote Series',
    category: 'CS',
    accent: 'Cyan',
    description: 'A live-fire briefing where founders decode the next era of intelligent systems.',
    time: '09:30',
    icon: Mic2,
  },
  {
    title: 'Nebula Build Lab',
    category: 'General',
    accent: 'Amber',
    description: 'Prototype fast, assemble impossible ideas, and launch before sunrise.',
    time: '11:00',
    icon: Wrench,
  },
  {
    title: 'Mission Control Panel',
    category: 'Non-Tech',
    accent: 'Purple',
    description: 'A dense dialogue on ethics, systems, and human-machine collaboration.',
    time: '15:00',
    icon: Cpu,
  },
]

const competitionCards = [
  {
    title: 'Space Apps',
    description: 'Solve cosmic challenges through product, AI, and robotics thinking.',
    stat: '24 teams',
  },
  {
    title: 'Rover Design Challenge',
    description: 'Engineer autonomous exploration machines for hostile terrain.',
    stat: '16 rigs',
  },
  {
    title: 'Hack the Orbit',
    description: 'A 36-hour sprint that turns raw ambition into launch-ready code.',
    stat: '38 builders',
  },
]

const categories = ['All', 'CS', 'Non-Tech', 'General']
const accentMap = {
  All: 'border-cyan-400/30 bg-cyan-400/10 text-cyan-200',
  CS: 'border-cyan-400/30 bg-cyan-400/10 text-cyan-200',
  'Non-Tech': 'border-violet-400/30 bg-violet-400/10 text-violet-200',
  General: 'border-amber-400/30 bg-amber-400/10 text-amber-200',
}

export function Layout() {
  const { enabled, toggleSound, triggerHover, triggerClick } = useSoundEffects()
  const [selectedCategory, setSelectedCategory] = useState('All')
  const visibleEvents = eventCards.filter((event) => selectedCategory === 'All' || event.category === selectedCategory)

  return (
    <div className="terminal-shell min-h-screen text-slate-100">
      <div className="crt-overlay" aria-hidden="true" />
      <div className="scanlines" aria-hidden="true" />
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        {[...Array(40)].map((_, index) => (
          <span
            key={index}
            className="star"
            style={{
              left: `${(index * 31) % 100}%`,
              top: `${(index * 23) % 100}%`,
              animationDuration: `${2.4 + (index % 6)}s`,
              animationDelay: `${(index % 5) * 0.2}s`,
            }}
          />
        ))}
      </div>

      <Navbar activeView="home" onNavigate={() => undefined} enabled={enabled} onToggle={toggleSound} onHover={triggerHover} onClick={triggerClick} />

      <main className="mx-auto flex w-[min(1240px,calc(100%-2rem))] flex-col gap-24 pb-20 pt-6 sm:pt-10">
        <HeroTerminal onHover={triggerHover} onClick={triggerClick} />

        <motion.section id="events" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ duration: 0.55 }} className="space-y-6">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-[11px] uppercase tracking-[0.35em] text-amber-300">CRT Terminal Grid</p>
              <h2 className="text-3xl font-semibold text-amber-50">Channels, diagnostics, and live transmissions.</h2>
            </div>
            <div className="rounded-full border border-amber-400/20 bg-stone-950/70 px-4 py-2 text-[11px] uppercase tracking-[0.35em] text-slate-300">
              Analog feed • live
            </div>
          </div>

          <TerminalFilterBar categories={categories} selected={selectedCategory} onSelect={setSelectedCategory} accentMap={accentMap} />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {visibleEvents.map((event, index) => (
              <motion.div key={event.title} onHoverStart={triggerHover} onHoverEnd={triggerHover} onClick={triggerClick}>
                <CRTCard {...event} index={index} onSelect={() => triggerClick()} />
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section id="competitions" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ duration: 0.55, delay: 0.06 }} className="space-y-6">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-[11px] uppercase tracking-[0.35em] text-violet-300">Command Deck</p>
              <h2 className="text-3xl font-semibold text-amber-50">Mission briefings for the bold.</h2>
            </div>
            <div className="rounded-full border border-violet-400/20 bg-stone-950/70 px-4 py-2 text-[11px] uppercase tracking-[0.35em] text-slate-300">
              SYSTEM • READY
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="rounded-[1.8rem] border border-amber-400/20 bg-stone-950/70 p-8 backdrop-blur-2xl">
              <div className="mb-6 flex items-center gap-3 text-violet-200">
                <Trophy className="h-5 w-5" />
                <span className="text-[11px] uppercase tracking-[0.35em]">Mission board</span>
              </div>
              <p className="text-lg leading-8 text-slate-400">
                Each challenge is staged like an old-school launch protocol: pressure-tested, atmospheric, and impossible to ignore.
              </p>
            </div>
            <div className="grid gap-4">
              {competitionCards.map((item, index) => (
                <motion.div key={item.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.35, delay: index * 0.08 }} onHoverStart={triggerHover} onHoverEnd={triggerHover} onClick={triggerClick} className="rounded-[1.4rem] border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-semibold text-amber-100">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-400">{item.description}</p>
                    </div>
                    <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-2 text-sm text-cyan-200">
                      {item.stat}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <Contact />
      </main>

      <footer className="border-t border-amber-400/20 bg-stone-950/70 py-8 text-center text-sm text-slate-400 backdrop-blur">
        <div className="mx-auto flex w-[min(1240px,calc(100%-2rem))] flex-wrap items-center justify-between gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-3">
          <p>IGNITO • Terminal console • analog signal stable.</p>
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.35em] text-amber-200">
            <span className="network-dot" /> SYS ONLINE
            <span className="network-dot network-dot--slow" /> LIGHT LEVEL OK
            <span className="network-dot network-dot--late" /> LINK STABLE
          </div>
        </div>
      </footer>
    </div>
  )
}
