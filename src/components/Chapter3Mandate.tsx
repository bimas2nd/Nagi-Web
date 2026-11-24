import { useEffect, useRef, useState } from 'react'
import { IMG } from '../data/images'
import { useCursor } from '../hooks/cursorContext'

const values = [
  { t: 'Radical Clarity', d: 'Complex systems, expressed with restraint.', img: IMG.b },
  { t: 'Ecological Permanence', d: 'Regenerative by design, enduring by intent.', img: IMG.e },
  { t: 'Invisible Intelligence', d: 'Technology that recedes behind craft.', img: IMG.c },
  { t: 'Cultural Precision', d: 'Dutch pragmatism, Japanese spatial grace.', img: IMG.d },
]

export default function Chapter3({ scrollY, vh }: { scrollY: number; vh: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [x, setX] = useState(0)
  const [hoverVal, setHoverVal] = useState(0)
  const { setHover } = useCursor()

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const top = el.offsetTop
    const total = el.offsetHeight - vh
    const local = Math.min(Math.max(scrollY - top, 0), Math.max(1, total))
    const p = local / Math.max(1, total)
    setX(p * -300)
  }, [scrollY, vh])

  return (
    <section id="ch3" ref={ref} className="relative h-[350vh] bg-[#161513] text-[#F2EFE9] z-20">
      <div className="sticky top-0 h-screen w-screen overflow-hidden flex items-center">
        <div className="flex w-[400vw] h-full will-change-transform" style={{ transform: `translate3d(${x}vw,0,0)` }}>
          {/* Panel 1 */}
          <div className="w-screen h-full flex-shrink-0 p-8 md:p-16 flex flex-col justify-between border-r border-white/10 relative overflow-hidden">
            <div className="font-mono text-[10px] tracking-[0.35em] text-[#F2EFE9]/60">[ 01 // THE VISION ]</div>
            <div className="relative">
              <h2 className="font-serif text-[12vw] md:text-[10vw] leading-[0.85] font-light max-w-[90%]">To architect the quiet future of civilization.</h2>
              <svg className="absolute -right-4 top-0 w-[40vw] h-[40vw] opacity-20" viewBox="0 0 400 400" fill="none">
                <circle cx="200" cy="200" r="180" stroke="#F2EFE9" strokeWidth="0.5" />
                <circle cx="200" cy="200" r="120" stroke="#C85A32" strokeWidth="0.5" />
                <line x1="20" y1="200" x2="380" y2="200" stroke="#F2EFE9" strokeWidth="0.5" />
                <line x1="200" y1="20" x2="200" y2="380" stroke="#F2EFE9" strokeWidth="0.5" />
                <rect x="80" y="80" width="240" height="240" stroke="#F2EFE9" strokeWidth="0.5" style={{ transformOrigin: '200px 200px', animation: 'spin 30s linear infinite' }} />
              </svg>
              <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
            </div>
            <p className="font-mono text-[11px] tracking-[0.2em] text-[#F2EFE9]/50 max-w-md">DISSOLVING THE BOUNDARY BETWEEN PHYSICAL MONUMENT AND AUTONOMOUS SYSTEM.</p>
          </div>

          {/* Panel 2 */}
          <div className="w-screen h-full flex-shrink-0 p-8 md:p-16 flex flex-col justify-between border-r border-white/10">
            <div className="font-mono text-[10px] tracking-[0.35em] text-[#F2EFE9]/60">[ 02 // THE MISSION ]</div>
            <div className="flex flex-col md:flex-row gap-4 h-[60vh] mt-8">
              {[
                { n: 'I', t: 'Spatial Permanence', d: 'Civic and corporate environments composed for generations, not cycles.' },
                { n: 'II', t: 'Autonomous Intelligence', d: 'Climate, security, and data systems that perform silently in the background.' },
                { n: 'III', t: 'Cross-Cultural Craft', d: 'Merging Dutch pragmatism with Japanese precision across every discipline.' },
              ].map(p => (
                <div key={p.n} className="flex-1 hover:flex-[2.5] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] border border-white/15 p-6 md:p-8 flex flex-col justify-end group overflow-hidden" onMouseEnter={() => setHover(true, 'READ')} onMouseLeave={() => setHover(false)}>
                  <div className="font-mono text-[10px] tracking-[0.3em] text-[#C85A32] mb-4">{p.n}</div>
                  <h3 className="font-serif text-3xl md:text-4xl font-light mb-3">{p.t}</h3>
                  <p className="text-sm text-[#F2EFE9]/60 max-w-sm opacity-70 group-hover:opacity-100 transition-opacity duration-500">{p.d}</p>
                </div>
              ))}
            </div>
            <div />
          </div>

          {/* Panel 3 */}
          <div className="w-screen h-full flex-shrink-0 p-8 md:p-16 flex flex-col border-r border-white/10 relative overflow-hidden">
            <img src={values[hoverVal].img} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20 scale-105 transition-all duration-700" />
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="font-mono text-[10px] tracking-[0.35em] text-[#F2EFE9]/60">[ 03 // CORE DOCTRINE ]</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
                {values.map((v, i) => (
                  <div key={v.t} onMouseEnter={() => { setHoverVal(i); setHover(true, 'READ') }} onMouseLeave={() => setHover(false)} className="group cursor-default">
                    <div className="font-mono text-[10px] tracking-[0.3em] text-[#C85A32] mb-2">0{i + 1}</div>
                    <h3 className="font-serif text-4xl md:text-5xl font-light group-hover:italic transition-all duration-500">{v.t}</h3>
                    <p className="mt-3 text-sm text-[#F2EFE9]/60 max-w-sm">{v.d}</p>
                  </div>
                ))}
              </div>
              <div className="font-mono text-[10px] tracking-[0.25em] text-[#F2EFE9]/40">HOVER TO REVEAL DOCTRINAL CONTEXT</div>
            </div>
          </div>

          {/* Panel 4 */}
          <div className="w-screen h-full flex-shrink-0 p-8 md:p-16 flex items-center justify-center">
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-center">
              {[{ v: '€1.8B', l: 'Managed Assets' }, { v: '99.99%', l: 'Systems Uptime' }, { v: '04', l: 'Continents' }].map(m => (
                <div key={m.l}>
                  <div className="font-serif text-[18vw] md:text-[9vw] leading-none font-light">{m.v}</div>
                  <div className="mt-4 font-mono text-[10px] tracking-[0.35em] text-[#F2EFE9]/60 uppercase">{m.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
