import { useState } from 'react'
import { IMG } from '../data/images'
import { useCursor } from '../hooks/cursorContext'

const divisions = [
  { t: 'Spatial Architecture', d: 'Civic landmarks and corporate campuses composed for permanence.', img: IMG.d, specs: ['Masterplanning & urban frameworks', 'Cultural and civic typologies', 'Adaptive reuse & heritage integration', 'Interior spatial narratives'] },
  { t: 'Intelligent Environments', d: 'Autonomous systems embedded seamlessly within the built fabric.', img: IMG.c, specs: ['Building intelligence & BMS', 'Zero-trust digital infrastructure', 'Predictive climate telemetry', 'Occupant experience platforms'] },
  { t: 'Digital Ecosystems', d: 'Immersive identities and interfaces for global institutions.', img: IMG.f, specs: ['Spatial brand systems', 'Interactive installations', 'Environmental wayfinding', 'Experiential media platforms'] },
  { t: 'Material Futures Lab', d: 'Regenerative research shaping the next century of construction.', img: IMG.e, specs: ['Regenerative material R&D', 'Carbon lifecycle auditing', 'Circular construction systems', 'Biophilic facade engineering'] },
]

export default function Chapter4() {
  const [hover, setHoverIdx] = useState<number | null>(null)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const [open, setOpen] = useState<number | null>(null)
  const { setHover } = useCursor()
  const active = hover !== null ? divisions[hover] : null
  const selected = open !== null ? divisions[open] : null

  return (
    <section id="ch4" className="min-h-screen relative z-30 bg-[#E8E2D9] text-[#111110] overflow-hidden"
      onMouseMove={(e) => setMouse({ x: e.clientX, y: e.clientY })}>
      <div className="relative z-10">
        <div className="px-8 md:px-12 pt-16 pb-8 font-mono text-[10px] tracking-[0.35em] text-[#111110]/60">[ 04 // CORPORATE DIVISIONS & CAPABILITIES ]</div>
        <div className="flex flex-col">
          {divisions.map((d, i) => (
            <button key={d.t}
              onMouseEnter={() => { setHoverIdx(i); setHover(true, 'VIEW') }}
              onMouseLeave={() => { setHoverIdx(null); setHover(false) }}
              onClick={() => setOpen(i)}
              className="group text-left px-8 md:px-12 py-6 border-b border-black/15 flex justify-between items-baseline hover:italic hover:pl-16 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
              <span className="font-sans font-light tracking-tighter leading-none text-[9vw] md:text-[5.5vw]">{d.t}</span>
              <span className="font-mono text-[10px] tracking-[0.25em] text-[#111110]/50 hidden md:block">0{i + 1}</span>
            </button>
          ))}
        </div>
        <div className="px-8 md:px-12 py-16 font-serif text-2xl md:text-4xl font-light max-w-3xl text-[#111110]/70">
          Four integrated divisions operating as a single practice—shaping how institutions inhabit space, data, and time.
        </div>
      </div>

      {/* Floating cursor image */}
      <div className="pointer-events-none fixed z-20 hidden md:block overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.25)]"
        style={{
          width: 380, height: 480,
          left: mouse.x + 24, top: mouse.y - 240,
          opacity: hover !== null ? 1 : 0,
          transform: `scale(${hover !== null ? 1 : 0.92})`,
          transition: 'opacity .4s cubic-bezier(0.16,1,0.3,1), transform .5s cubic-bezier(0.16,1,0.3,1)',
        }}>
        {active && <img src={active.img} alt="" className="w-full h-full object-cover" />}
      </div>

      {/* Side sheet */}
      <div className={`fixed inset-0 z-50 ${open !== null ? 'pointer-events-auto' : 'pointer-events-none'}`}>
        <div className={`absolute inset-0 bg-black/40 transition-opacity duration-500 ${open !== null ? 'opacity-100' : 'opacity-0'}`} onClick={() => setOpen(null)} />
        <aside className={`absolute right-0 top-0 h-screen w-full md:w-[55vw] bg-[#111110] text-[#F2EFE9] p-8 md:p-16 overflow-y-auto transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${open !== null ? 'translate-x-0' : 'translate-x-full'}`}>
          {selected && (
            <>
              <div className="flex justify-between items-start mb-12">
                <div className="font-mono text-[10px] tracking-[0.35em] text-[#F2EFE9]/50">DIVISION SPECIFICATION</div>
                <button onClick={() => setOpen(null)} onMouseEnter={() => setHover(true, 'CLOSE')} onMouseLeave={() => setHover(false)} className="font-mono text-[10px] tracking-[0.3em]">[ CLOSE ]</button>
              </div>
              <h3 className="font-serif text-5xl md:text-6xl font-light leading-[0.95] mb-6">{selected.t}</h3>
              <p className="text-[#F2EFE9]/70 text-lg max-w-xl mb-10">{selected.d}</p>
              <div className="overflow-hidden aspect-[16/10] mb-10">
                <img src={selected.img} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="font-mono text-[10px] tracking-[0.35em] text-[#C85A32] mb-4">CORE CAPABILITIES</div>
              <ul className="space-y-3">
                {selected.specs.map(s => <li key={s} className="text-[#F2EFE9]/80 text-lg font-light border-b border-white/10 pb-3">{s}</li>)}
              </ul>
            </>
          )}
        </aside>
      </div>
    </section>
  )
}
