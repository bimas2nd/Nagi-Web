import { useState } from 'react'
import { useCursor } from '../hooks/cursorContext'

export default function Chapter6() {
  const { setHover } = useCursor()
  const [sent, setSent] = useState(false)
  const [topic, setTopic] = useState('spatial architecture')
  const topics = ['spatial architecture', 'intelligent environments', 'digital ecosystems', 'material futures']

  return (
    <section id="ch6" className="min-h-screen sticky top-0 z-40 bg-[#0D0D0C] text-[#F2EFE9] flex flex-col justify-between p-8 md:p-16 overflow-hidden">
      <div className="max-w-6xl">
        <div className="font-mono text-[10px] tracking-[0.35em] text-[#F2EFE9]/50 mb-12">[ 05 // INITIATE PARTNERSHIP ]</div>
        <form onSubmit={(e) => { e.preventDefault(); setSent(true); setTimeout(() => setSent(false), 4000) }} className="font-serif text-3xl md:text-5xl lg:text-6xl font-light leading-[1.35]">
          <span>Hello, my name is </span>
          <input required placeholder="your name" className="inline-block bg-transparent border-0 border-b border-[#F2EFE9]/30 focus:border-[#C85A32] outline-none px-2 mx-1 w-[8ch] md:w-[10ch] placeholder:text-[#F2EFE9]/20 text-[#C85A32]" />
          <span> from </span>
          <input required placeholder="company" className="inline-block bg-transparent border-0 border-b border-[#F2EFE9]/30 focus:border-[#C85A32] outline-none px-2 mx-1 w-[9ch] md:w-[12ch] placeholder:text-[#F2EFE9]/20 text-[#C85A32]" />
          <span>. We are looking to partner on </span>
          <span className="inline-flex flex-wrap gap-2 align-middle mx-1">
            {topics.map(t => (
              <button type="button" key={t} onClick={() => setTopic(t)} onMouseEnter={() => setHover(true, 'SELECT')} onMouseLeave={() => setHover(false)}
                className={`font-mono text-[10px] md:text-[11px] tracking-[0.2em] uppercase px-3 py-2 border rounded-full transition-all duration-500 ${topic === t ? 'bg-[#F2EFE9] text-[#0D0D0C] border-[#F2EFE9]' : 'border-[#F2EFE9]/30 text-[#F2EFE9]/60 hover:border-[#F2EFE9]/70'}`}>
                {t}
              </button>
            ))}
          </span>
          <span>. Reach me at </span>
          <input required type="email" placeholder="email address" className="inline-block bg-transparent border-0 border-b border-[#F2EFE9]/30 focus:border-[#C85A32] outline-none px-2 mx-1 w-[14ch] md:w-[18ch] placeholder:text-[#F2EFE9]/20 text-[#C85A32]" />
          <span>.</span>
          <div className="mt-12">
            <button type="submit" onMouseEnter={() => setHover(true, 'SEND')} onMouseLeave={() => setHover(false)}
              className="group relative overflow-hidden font-mono text-[11px] tracking-[0.35em] border border-[#F2EFE9]/40 px-10 py-5 hover:text-[#0D0D0C] transition-colors duration-500">
              <span className="relative z-10">{sent ? 'BRIEF TRANSMITTED' : 'TRANSMIT BRIEF ?'}</span>
              <span className={`absolute inset-0 bg-[#F2EFE9] origin-left transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${sent ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
            </button>
          </div>
        </form>
      </div>
      <div className="mt-16 -mx-8 md:-mx-16 -mb-8 md:-mb-16">
        <div className="font-sans font-light text-[18vw] leading-[0.8] tracking-tighter whitespace-nowrap px-4 select-none">NAGI // VANDER</div>
        <div className="px-8 md:px-16 pb-6 flex justify-between font-mono text-[10px] tracking-[0.25em] text-[#F2EFE9]/40">
          <span>© 2026 NAGI // VANDER CORPORATION</span>
          <span>AMSTERDAM · TOKYO · ZURICH · SINGAPORE</span>
        </div>
      </div>
    </section>
  )
}
