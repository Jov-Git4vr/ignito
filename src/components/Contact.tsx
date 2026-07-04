import { motion } from 'framer-motion'
import { Mail, SendHorizonal, Satellite } from 'lucide-react'
import { useState, type FocusEvent, type FormEvent, type MouseEvent } from 'react'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [ripple, setRipple] = useState({ x: 24, y: 24, active: false })

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  const triggerRipple = (event: MouseEvent<HTMLDivElement> | FocusEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const clientX = 'clientX' in event ? event.clientX : rect.left + rect.width / 2
    const clientY = 'clientY' in event ? event.clientY : rect.top + rect.height / 2
    setRipple({ x: clientX - rect.left, y: clientY - rect.top, active: true })
  }

  const handleFocus = (event: FocusEvent<HTMLDivElement>) => {
    triggerRipple(event)
  }

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    triggerRipple(event)
  }

  return (
    <section id="contact" className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="rounded-[2rem] border border-fuchsia-500/20 bg-slate-950/60 p-8 backdrop-blur-2xl"
      >
        <div className="mb-6 flex items-center gap-3 text-fuchsia-200">
          <Satellite className="h-5 w-5" />
          <span className="text-sm uppercase tracking-[0.35em]">Signal relay</span>
        </div>
        <h2 className="text-3xl font-semibold text-fuchsia-100">Transmit your mission to mission control.</h2>
        <p className="mt-4 text-lg leading-8 text-slate-400">
          Share your details and we will beam your registration or collaboration proposal straight to the command deck.
        </p>
        <div className="mt-8 space-y-3 text-sm text-slate-300">
          <div className="flex items-center gap-3 rounded-2xl border border-fuchsia-500/20 bg-fuchsia-500/10 px-4 py-3 backdrop-blur">
            <Mail className="h-4 w-4 text-fuchsia-200" />
            mec@ignito.space
          </div>
          <div className="rounded-2xl border border-indigo-400/20 bg-indigo-500/10 px-4 py-3 backdrop-blur">
            Venue • Internal Audi, MEC • 20–22 December
          </div>
        </div>
      </motion.div>

      <motion.form
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.05, ease: 'easeOut' }}
        onSubmit={handleSubmit}
        className="rounded-[2rem] border border-fuchsia-500/20 bg-[linear-gradient(135deg,rgba(7,12,30,0.95),rgba(12,18,32,0.9))] p-8 shadow-[0_0_60px_rgba(168,85,247,0.12)] backdrop-blur-2xl"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="panel-field space-y-2 text-sm text-slate-300">
            <span>Name</span>
            <div className="panel-input-wrap" onMouseMove={handleMouseMove} onMouseEnter={handleMouseMove} onFocus={handleFocus} onBlur={() => setRipple((value) => ({ ...value, active: false }))}>
              <motion.span
                className="panel-ripple"
                initial={{ opacity: 0, scale: 0.2 }}
                animate={{ opacity: ripple.active ? 1 : 0, scale: ripple.active ? 1.3 : 0.2 }}
                transition={{ duration: 0.65, ease: 'easeOut' }}
                style={{ left: ripple.x, top: ripple.y }}
              />
              <input className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 outline-none" placeholder="Jov" />
            </div>
          </label>
          <label className="panel-field space-y-2 text-sm text-slate-300">
            <span>Email</span>
            <div className="panel-input-wrap" onMouseMove={handleMouseMove} onMouseEnter={handleMouseMove} onFocus={handleFocus} onBlur={() => setRipple((value) => ({ ...value, active: false }))}>
              <motion.span
                className="panel-ripple"
                initial={{ opacity: 0, scale: 0.2 }}
                animate={{ opacity: ripple.active ? 1 : 0, scale: ripple.active ? 1.3 : 0.2 }}
                transition={{ duration: 0.65, ease: 'easeOut' }}
                style={{ left: ripple.x, top: ripple.y }}
              />
              <input className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 outline-none" placeholder="jov@nova.dev" />
            </div>
          </label>
        </div>

        <label className="mt-4 block space-y-2 text-sm text-slate-300">
          <span>Mission Type</span>
          <div className="panel-input-wrap" onMouseMove={handleMouseMove} onMouseEnter={handleMouseMove} onFocus={handleFocus} onBlur={() => setRipple((value) => ({ ...value, active: false }))}>
            <motion.span
              className="panel-ripple"
              initial={{ opacity: 0, scale: 0.2 }}
              animate={{ opacity: ripple.active ? 1 : 0, scale: ripple.active ? 1.3 : 0.2 }}
              transition={{ duration: 0.65, ease: 'easeOut' }}
              style={{ left: ripple.x, top: ripple.y }}
            />
            <input className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 outline-none" placeholder="Workshop / Team registration" />
          </div>
        </label>

        <label className="mt-4 block space-y-2 text-sm text-slate-300">
          <span>Transmission</span>
          <div className="panel-input-wrap" onMouseMove={handleMouseMove} onMouseEnter={handleMouseMove} onFocus={handleFocus} onBlur={() => setRipple((value) => ({ ...value, active: false }))}>
            <motion.span
              className="panel-ripple"
              initial={{ opacity: 0, scale: 0.2 }}
              animate={{ opacity: ripple.active ? 1 : 0, scale: ripple.active ? 1.3 : 0.2 }}
              transition={{ duration: 0.65, ease: 'easeOut' }}
              style={{ left: ripple.x, top: ripple.y }}
            />
            <textarea className="min-h-[140px] w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 outline-none" placeholder="Describe your idea or request..." />
          </div>
        </label>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
          <motion.button
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="inline-flex items-center gap-2 rounded-full border border-fuchsia-400/30 bg-fuchsia-500/10 px-5 py-3 text-sm font-semibold text-fuchsia-100"
          >
            Send Transmission
            <SendHorizonal className="h-4 w-4" />
          </motion.button>
          <span className="text-sm text-slate-400">{submitted ? 'Transmission send' : ''}</span>
        </div>
      </motion.form>
    </section>
  )
}
