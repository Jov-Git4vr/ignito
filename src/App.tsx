import { useState } from 'react'
import './App.css'
import { Contact } from './components/Contact'
import { CompetitionsView } from './components/CompetitionsView'
import { EventsView } from './components/EventsView'
import { HeroTerminal } from './components/HeroTerminal'
import { Navbar } from './components/Navbar'
import { useSoundEffects } from './hooks/useSoundEffects'

type ViewState = 'home' | 'events' | 'competitions'

function App() {
  const [view, setView] = useState<ViewState>('home')
  const { enabled, toggleSound, triggerHover, triggerClick } = useSoundEffects()

  return (
    <div className="relative min-h-screen bg-[#090214] text-slate-100">
      <div className="fixed inset-0 z-0 overflow-hidden">
        <img src="/raniramli-galaxy-3468_512.gif" alt="" className="pointer-events-none h-full w-full object-cover opacity-[0.25]" />
        <div className="absolute inset-0 bg-slate-950/10" />
      </div>
      <div className="scanlines" aria-hidden="true" />

      <div className="relative z-20 mx-auto flex min-h-screen w-[min(1280px,calc(100%-2rem))] flex-col">
        <Navbar
          activeView={view}
          onNavigate={setView}
          enabled={enabled}
          onToggle={toggleSound}
          onHover={triggerHover}
          onClick={triggerClick}
        />

        <main className="flex-1 pb-16 pt-6 sm:pt-8">
          {view === 'home' ? (
            <div className="space-y-8">
              <HeroTerminal onHover={triggerHover} onClick={triggerClick} />
              <Contact />
            </div>
          ) : view === 'events' ? (
            <EventsView onHover={triggerHover} onClick={triggerClick} />
          ) : (
            <CompetitionsView onHover={triggerHover} onClick={triggerClick} />
          )}
        </main>

        <footer className="border-t border-fuchsia-500/20 bg-slate-950/40 py-6 text-center text-sm text-slate-400 backdrop-blur">
          <div className="mx-auto flex flex-wrap items-center justify-between gap-3 rounded-full border border-fuchsia-500/20 bg-fuchsia-500/10 px-4 py-3">
            <p>IGNITO • cosmic terminal • signal stable.</p>
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.35em] text-fuchsia-200">
              <span className="network-dot" /> SYS ONLINE
              <span className="network-dot network-dot--slow" /> LINK STABLE
              <span className="network-dot network-dot--late" /> CORE READY
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
