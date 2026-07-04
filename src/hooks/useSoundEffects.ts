import { useEffect, useRef, useState } from 'react'

type CueKey = 'hover' | 'click'

export function useSoundEffects() {
  const [enabled, setEnabled] = useState(true)
  const audioContextRef = useRef<AudioContext | null>(null)

  useEffect(() => {
    const AudioContextImpl = window.AudioContext || (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
    if (!AudioContextImpl) return

    audioContextRef.current = new AudioContextImpl()

    return () => {
      void audioContextRef.current?.close().catch(() => undefined)
      audioContextRef.current = null
    }
  }, [])

  const playCue = (key: CueKey) => {
    if (!enabled) return

    const audioContext = audioContextRef.current
    if (!audioContext) return

    void audioContext.resume()

    const now = audioContext.currentTime
    const gain = audioContext.createGain()
    gain.gain.setValueAtTime(0.0001, now)
    gain.gain.exponentialRampToValueAtTime(key === 'hover' ? 0.03 : 0.05, now + 0.01)
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.16)
    gain.connect(audioContext.destination)

    const oscillator = audioContext.createOscillator()
    oscillator.type = key === 'hover' ? 'sine' : 'triangle'
    oscillator.frequency.setValueAtTime(key === 'hover' ? 880 : 660, now)
    oscillator.frequency.exponentialRampToValueAtTime(key === 'hover' ? 1320 : 540, now + 0.12)
    oscillator.connect(gain)
    oscillator.start(now)
    oscillator.stop(now + 0.16)
  }

  return {
    enabled,
    toggleSound: () => setEnabled((value) => !value),
    triggerHover: () => playCue('hover'),
    triggerClick: () => playCue('click'),
  }
}
