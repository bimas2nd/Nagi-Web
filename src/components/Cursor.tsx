import { useEffect, useRef, useState } from 'react'
import { CursorContext } from '../hooks/cursorContext'

export function CursorProvider({ children }: { children: React.ReactNode }) {
  const dot = useRef<HTMLDivElement>(null)
  const ring = useRef<HTMLDivElement>(null)
  const pos = useRef({ x: -100, y: -100 })
  const ringPos = useRef({ x: -100, y: -100 })
  const [hover, setHoverState] = useState(false)
  const [label, setLabel] = useState('VIEW')
  const [coarse, setCoarse] = useState(false)

  useEffect(() => {
    setCoarse(window.matchMedia('(pointer: coarse)').matches)
  }, [])

  useEffect(() => {
    if (coarse) return
    const move = (e: MouseEvent) => { pos.current = { x: e.clientX, y: e.clientY } }
    window.addEventListener('mousemove', move)
    let raf = 0
    const loop = () => {
      if (dot.current) {
        dot.current.style.transform = `translate3d(${pos.current.x}px,${pos.current.y}px,0)`
      }
      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.15
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.15
      if (ring.current) {
        ring.current.style.transform = `translate3d(${ringPos.current.x}px,${ringPos.current.y}px,0)`
      }
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => { window.removeEventListener('mousemove', move); cancelAnimationFrame(raf) }
  }, [coarse])

  const setHover = (v: boolean, l = 'VIEW') => { setHoverState(v); setLabel(l) }

  return (
    <CursorContext.Provider value={{ setHover }}>
      {children}
      {!coarse && (
        <>
          <div ref={dot} className="pointer-events-none fixed top-0 left-0 z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
            style={{ width: hover ? 0 : 10, height: hover ? 0 : 10, borderRadius: 999, background: '#F4F0EA', transition: 'width .4s cubic-bezier(0.16,1,0.3,1), height .4s cubic-bezier(0.16,1,0.3,1)' }} />
          <div ref={ring} className="pointer-events-none fixed top-0 left-0 z-[9998] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
            style={{
              width: hover ? 80 : 0, height: hover ? 80 : 0, borderRadius: 999,
              background: hover ? 'rgba(244,240,234,0.95)' : 'transparent',
              color: '#141311',
              transition: 'width .5s cubic-bezier(0.16,1,0.3,1), height .5s cubic-bezier(0.16,1,0.3,1), background .4s',
              mixBlendMode: hover ? 'difference' : 'normal',
            }}>
            <span className="font-mono text-[10px] tracking-widest" style={{ opacity: hover ? 1 : 0, transition: 'opacity .3s' }}>{label}</span>
          </div>
        </>
      )}
    </CursorContext.Provider>
  )
}
