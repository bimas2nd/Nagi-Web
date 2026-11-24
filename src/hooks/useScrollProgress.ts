import { useEffect, useState } from 'react'

export function useScrollProgress() {
  const [scrollY, setScrollY] = useState(0)
  const [progress, setProgress] = useState(0)
  const [vh, setVh] = useState(typeof window !== 'undefined' ? window.innerHeight : 800)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0
      const doc = document.documentElement
      const max = Math.max(1, doc.scrollHeight - window.innerHeight)
      setScrollY(y)
      setProgress(Math.min(100, Math.max(0, (y / max) * 100)))
    }
    const onResize = () => setVh(window.innerHeight)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    }
  }, [])
  return { scrollY, progress, vh }
}
