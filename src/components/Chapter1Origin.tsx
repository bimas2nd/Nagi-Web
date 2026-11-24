import { IMG } from '../data/images'

export default function Chapter1({ scrollY, vh }: { scrollY: number; vh: number }) {
  const p = Math.min(1, Math.max(0, scrollY / (vh * 0.9)))
  const w = 32 + (100 - 32) * p
  const h = 60 + (100 - 60) * p
  const drift = scrollY * -0.35
  const overlay = Math.max(0, Math.min(1, (p - 0.55) / 0.35))
  return (
    <section id="ch1" className="relative h-[180vh] bg-[#111110] text-[#F2EFE9]">
      <div className="sticky top-0 h-screen w-screen overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 flex items-center" style={{ transform: `translate3d(${drift}px,0,0)` }}>
          <div className="font-serif italic text-[17vw] leading-[0.8] tracking-tighter whitespace-nowrap select-none opacity-90 px-[10vw]">
            NAGI — VANDER — SPATIAL — INTELLIGENCE — NAGI — VANDER
          </div>
        </div>
        <div className="relative z-10 overflow-hidden flex items-center justify-center"
          style={{ width: `${w}vw`, height: `${h}vh`, transition: 'width 0.05s linear, height 0.05s linear' }}>
          <img src={IMG.a} alt="" className="absolute inset-0 w-full h-full object-cover" style={{ transform: `scale(${1 + p * 0.05})` }} />
          <div className="absolute inset-0 bg-[#111110]" style={{ opacity: 0.15 + p * 0.35 }} />
          <div className="relative z-10 text-center px-8 max-w-3xl" style={{ opacity: overlay, transform: `translateY(${(1 - overlay) * 20}px)` }}>
            <div className="font-mono text-[10px] tracking-[0.35em] mb-6 text-[#F2EFE9]/70">CORPORATE MANIFESTO — 2026</div>
            <p className="font-serif text-3xl md:text-6xl font-light leading-[1.05]">We build quiet monuments and intelligent ecosystems for institutions that endure.</p>
          </div>
        </div>
        <div className="absolute top-[18%] left-[8%] font-mono text-[11px] uppercase tracking-[0.25em] max-w-[220px] leading-relaxed text-[#F2EFE9]/70">
          Amsterdam & Tokyo — Spatial Architecture, Intelligent Environments, Digital Ecosystems.
        </div>
        <div className="absolute bottom-[18%] right-[8%] font-mono text-[11px] uppercase tracking-[0.25em] max-w-[220px] leading-relaxed text-right text-[#F2EFE9]/70">
          A global corporation crafting calm, autonomous infrastructure for culture, capital, and civic life.
        </div>
      </div>
    </section>
  )
}
