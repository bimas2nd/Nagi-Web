import { useEffect, useState } from 'react'

export function useInView(threshold = 0.15) {
  const [ref, setRef] = useState<HTMLElement | null>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    if (!ref) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true) }, { threshold })
    obs.observe(ref)
    return () => obs.disconnect()
  }, [ref, threshold])
  return { ref: setRef, inView }
}

export function useAmsterdamTime() {
  const [time, setTime] = useState('')
  useEffect(() => {
    const fmt = () => {
      const t = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Amsterdam', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }).format(new Date())
      setTime(t)
    }
    fmt()
    const i = setInterval(fmt, 1000)
    return () => clearInterval(i)
  }, [])
  return time
}

export function useClock(tz: string) {
  const [time, setTime] = useState('')
  useEffect(() => {
    const fmt = () => setTime(new Intl.DateTimeFormat('en-GB', { timeZone: tz, hour: '2-digit', minute: '2-digit', hour12: false }).format(new Date()))
    fmt()
    const i = setInterval(fmt, 1000)
    return () => clearInterval(i)
  }, [tz])
  return time
}
