import { useState } from 'react'
import { IMG } from '../data/images'
import { useCursor } from '../hooks/cursorContext'

export default function Chapter2() {
  const [open, setOpen] = useState(false)
  const { setHover } = useCursor()
  return (
    <section id="ch2" className="sticky top-0 min-h-screen bg-[#F2EFE9] text-[#111110] z-10 shadow-[0_-30px_60px_rgba(0,0,0,0.35)] overflow-hidden">
      <div className="relative min-h-screen w-screen p-6 md:p-12 grid grid-cols-12 grid-rows-6 gap-4">
        <div className="col-start-1 col-span-12 md:col-start-2 md:col-span-8 row-start-1 row-span-2 z-20 pointer-events-none">
          <h2 className="font-serif text-[11vw] md:text-[6.5vw] leading-[0.92] tracking-[-0.03em]">
            We compose <span className="italic">permanence</span><br />with invisible intelligence.
          </h2>
        </div>
        <div className="col-start-1 col-span-10 md:col-start-2 md:col-span-4 row-start-2 md:row-start-2 row-span-4 mt-16 md:mt-24 z-10">
          <div className="overflow-hidden h-[55vh] md:h-[70vh]">
            <img src={IMG.b} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]" />
          </div>
        </div>
        <div className="col-start-3 col-span-10 md:col-start-6 md:col-span-6 row-start-4 md:row-start-3 row-span-3 -mt-8 md:-mt-24 z-20">
          <div className="overflow-hidden h-[35vh] md:h-[45vh] shadow-[0_30px_60px_rgba(0,0,0,0.2)]">
            <img src={IMG.c} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]" />
          </div>
          <div className="mt-6 font-mono text-[10px] tracking-[0.3em] text-[#111110]/60">PHILOSOPHY — SENSORY INFRASTRUCTURE</div>
        </div>
        <div className="col-start-1 col-span-12 md:col-start-8 md:col-span-4 row-start-6 md:row-start-5 self-end z-30">
          <p className="font-sans text-sm md:text-base leading-relaxed text-[#111110]/70 max-w-md">
            Nagi // Vander operates at the confluence of architecture, technology, and cultural craft—designing environments that feel inevitable, human, and enduring.
          </p>
          <button onClick={() => setOpen(o => !o)} onMouseEnter={() => setHover(true, 'READ')} onMouseLeave={() => setHover(false)}
            className="mt-6 inline-flex items-center gap-3 border border-[#111110]/30 rounded-full px-6 py-3 font-mono text-[10px] tracking-[0.25em] hover:bg-[#111110] hover:text-[#F2EFE9] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
            {open ? 'CLOSE DOSSIER' : 'READ FULL DOSSIER'}
          </button>
        </div>
        <div className={`absolute right-6 md:right-16 bottom-24 md:bottom-16 w-[90vw] md:w-[420px] bg-[#111110] text-[#F2EFE9] p-8 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none'}`}>
          <div className="font-mono text-[10px] tracking-[0.3em] text-[#F2EFE9]/60 mb-4">FOUNDING DOSSIER</div>
          <p className="text-sm leading-relaxed text-[#F2EFE9]/80">Established 2018 on the Prinsengracht, Amsterdam. A cross-continental practice uniting spatial architects, systems engineers, and material researchers into a single sensory discipline.</p>
          <div className="mt-6 grid grid-cols-2 gap-4 font-mono text-[10px] tracking-[0.2em] text-[#C85A32]">
            <div>240+ ARCHITECTS & ENGINEERS</div>
            <div>04 GLOBAL OFFICES</div>
            <div>AMSTERDAM · TOKYO</div>
            <div>ZURICH · SINGAPORE</div>
          </div>
        </div>
      </div>
    </section>
  )
}
