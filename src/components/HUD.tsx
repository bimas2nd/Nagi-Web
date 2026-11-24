import { useEffect, useMemo, useState } from 'react'
import { IMG } from '../data/images'
import { useCursor } from '../hooks/cursorContext'

const INDEX = [
  { ch: 'CH.01 — ORIGIN', label: 'Origin', href: '#ch1', img: IMG.a },
  { ch: 'CH.02 — VISION', label: 'Vision', href: '#ch2', img: IMG.b },
  { ch: 'CH.03 — MANDATE', label: 'Mandate', href: '#ch3', img: IMG.c },
  { ch: 'CH.04 — WORKS', label: 'Works', href: '#ch4', img: IMG.d },
  { ch: 'CH.05 — CONTACT', label: 'Contact', href: '#ch6', img: IMG.e },
]

export default function HUD({ progress }: { progress: number }) {
  const [open, setOpen] = useState(false)
  const [chapter, setChapter] = useState('CH.01 — ORIGIN')
  const [hoverImg, setHoverImg] = useState(IMG.a)
  const { setHover } = useCursor()

  const chapters = useMemo(() => ([
    { id: 'ch1', label: 'CH.01 — ORIGIN' },
    { id: 'ch2', label: 'CH.02 — VISION' },
    { id: 'ch3', label: 'CH.03 — MANDATE' },
    { id: 'ch4', label: 'CH.04 — WORKS' },
    { id: 'ch5', label: 'CH.04 — WORKS' },
    { id: 'ch6', label: 'CH.05 — CONTACT' },
  ]), [])

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + window.innerHeight * 0.45
      let current = chapters[0].label
      chapters.forEach(c => {
        const el = document.getElementById(c.id)
        if (el && el.offsetTop <= y) current = c.label
      })
      setChapter(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [chapters])

  const go = (href: string) => {
    setOpen(false)
    setTimeout(() => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' }), 500)
  }

  return (
    <>
      <div className="fixed top-6 left-6 z-40 mix-blend-difference text-[#F4F0EA] font-mono text-[10px] tracking-[0.25em]">
        <div>NAGI // CORP.</div>
        <div className="mt-1 text-[#F4F0EA]/70">{String(Math.round(progress)).padStart(2, '0')}% — 100%</div>
      </div>
      <div className="fixed top-6 right-6 z-40 mix-blend-difference text-[#F4F0EA]">
        <button onClick={() => setOpen(o => !o)} onMouseEnter={() => setHover(true, open ? 'CLOSE' : 'OPEN')} onMouseLeave={() => setHover(false)}
          className="font-mono text-[10px] tracking-[0.25em] border border-[#F4F0EA]/40 px-4 py-2 hover:bg-[#F4F0EA] hover:text-[#141311] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
          {open ? '[ CLOSE ]' : '[ INDEX / MENU ]'}
        </button>
      </div>
      <div className="fixed bottom-6 left-6 z-40 mix-blend-difference text-[#F4F0EA] font-mono text-[10px] tracking-[0.25em]">
        {chapter}
      </div>
      <div className="fixed bottom-6 right-6 z-40 mix-blend-difference text-[#F4F0EA] font-mono text-[10px] tracking-[0.2em] flex items-end gap-4">
        <div className="flex items-end gap-[3px] h-4" aria-label="ambient">
          {[1,2,3,4].map(i => (
            <span key={i} className="w-[2px] bg-[#F4F0EA] origin-bottom" style={{ height: '100%', animation: `eq 1.2s ease-in-out ${i * 0.15}s infinite` }} />
          ))}
        </div>
        <div className="text-right leading-tight">
          <div>AMBIENT / ON</div>
          <div className="text-[#F4F0EA]/60">52.3676° N, 4.9041° E // AMSTERDAM</div>
        </div>
      </div>
      <style>{`@keyframes eq{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}`}</style>

      <div className={`fixed inset-0 z-[60] bg-[#141311] text-[#F4F0EA] transition-all duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)] ${open ? '[clip-path:circle(150%_at_100%_0%)] pointer-events-auto' : '[clip-path:circle(0%_at_100%_0%)] pointer-events-none'}`}>
        <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 p-8 md:p-16 pt-28">
          <div className="flex flex-col justify-center gap-4">
            {INDEX.map((item, i) => (
              <button key={item.ch} onClick={() => go(item.href)} onMouseEnter={() => { setHoverImg(item.img); setHover(true, 'GO') }} onMouseLeave={() => setHover(false)}
                className="group text-left flex items-baseline gap-6">
                <span className="font-mono text-[11px] text-[#F4F0EA]/50">0{i + 1}</span>
                <span className="font-serif text-5xl md:text-7xl font-light group-hover:italic group-hover:translate-x-4 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">{item.label}</span>
              </button>
            ))}
          </div>
          <div className="hidden md:flex items-center justify-center">
            <div className="w-[70%] aspect-[4/5] overflow-hidden">
              <img key={hoverImg} src={hoverImg} alt="" className="w-full h-full object-cover transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
