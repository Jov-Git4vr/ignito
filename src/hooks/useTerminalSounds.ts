import { useCallback, useEffect, useRef, useState } from 'react'

export function useTerminalSounds() {
  const [enabled, setEnabled] = useState(true)
  const audioRef = useRef<AudioContext | null>(null)

  useEffect(() => {
    audioRef.current = new window.AudioContext()
    return () => {
      audioRef.current?.close()
    }
  }, [])

  const playTone = useCallback((freq: number, duration: number, type: OscillatorType = 'square', gainLevel = 0.015) => {
    if (!enabled || !audioRef.current) return

    if (audioRef.current.state === 'suspended') {
      void audioRef.current.resume()
    }

    const ctx = audioRef.current
    const now = ctx.currentTime
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()

    osc.type = type
    osc.frequency.setValueAtTime(freq, now)
    gain.gain.setValueAtTime(0.0001, now)
    gain.gain.exponentialRampToValueAtTime(gainLevel, now + 0.01)
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration)

    osc.connect(gain)
    gain.connect(ctx.destination)
    osc.start(now)
    osc.stop(now + duration + 0.01)
  }, [enabled])

  const triggerHover = useCallback(() => {
    playTone(760, 0.06, 'square', 0.008)
  }, [playTone])

  const triggerClick = useCallback(() => {
    playTone(520, 0.09, 'square', 0.01)
    window.setTimeout(() => playTone(700, 0.06, 'sine', 0.009), 55)
  }, [playTone])

  return { enabled, setEnabled, triggerHover, triggerClick }
}
