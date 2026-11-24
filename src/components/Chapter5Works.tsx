import { IMG } from '../data/images'
import { useCursor } from '../hooks/cursorContext'

const projects = [
  { n: '01 / 04', name: 'AMSTERDAM HQ', sub: 'Canal-side civic intelligence', img: IMG.d },
  { n: '02 / 04', name: 'TOKYO SANCTUARY', sub: 'Monolithic corporate retreat', img: IMG.e },
  { n: '03 / 04', name: 'ZURICH AUTONOMOUS TOWER', sub: 'Zero-trust vertical campus', img: IMG.f },
  { n: '04 / 04', name: 'SINGAPORE BIOPHILIC NODE', sub: 'Equatorial living infrastructure', img: IMG.c },
]

export default function Chapter5() {
  const { setHover } = useCursor()
  return (
    <section id="ch5" className="relative z-30">
      {projects.map((p, i) => (
        <article key={p.n} className="sticky top-0 h-screen w-screen overflow-hidden">
          <img src={p.img} alt={p.name} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111110]/80 via-[#111110]/20 to-[#111110]/30" />
          <div className="relative h-full w-full p-8 md:p-16 flex flex-col justify-between text-[#F2EFE9]">
            <div className="flex justify-between items-start">
              <div className="font-mono text-[10px] tracking-[0.35em]">{p.n}</div>
              <div className="font-mono text-[10px] tracking-[0.35em] text-[#F2EFE9]/70">FLAGSHIP WORKS</div>
            </div>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
              <div>
                <h3 className="font-serif text-[12vw] md:text-[7vw] leading-[0.85] font-light tracking-tight">{p.name}</h3>
                <p className="mt-4 font-mono text-[11px] tracking-[0.3em] text-[#F2EFE9]/70 uppercase">{p.sub}</p>
              </div>
              <button onMouseEnter={() => setHover(true, 'VIEW')} onMouseLeave={() => setHover(false)}
                className="self-start md:self-auto font-mono text-[10px] tracking-[0.3em] border border-[#F2EFE9]/50 px-6 py-4 hover:bg-[#F2EFE9] hover:text-[#111110] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                INSPECT ARCHITECTURE ?
              </button>
            </div>
          </div>
          {i < projects.length - 1 && <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#111110]/40 to-transparent pointer-events-none" />}
        </article>
      ))}
    </section>
  )
}
