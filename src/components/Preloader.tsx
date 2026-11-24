import { useEffect, useState } from 'react'

export default function Preloader({ onDone }: { onDone: () => void }) {
  const [count, setCount] = useState(0)
  const [exit, setExit] = useState(false)
  useEffect(() => {
    let c = 0
    const id = setInterval(() => {
      c += Math.floor(Math.random() * 7) + 3
      if (c >= 100) { c = 100; clearInterval(id); setTimeout(() => { setExit(true); setTimeout(onDone, 1100) }, 400) }
      setCount(c)
    }, 60)
    return () => clearInterval(id)
  }, [onDone])
  return (
    <div className={`fixed inset-0 z-[10000] bg-obsidian text-alabaster flex flex-col items-center justify-center transition-transform duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)] ${exit ? '-translate-y-full' : 'translate-y-0'}`}>
      <div className="font-mono text-[10px] tracking-[0.3em] text-muted mb-6">AMSTERDAM / TOKYO</div>
      <div className="font-serif italic text-[18vw] sm:text-[10vw] leading-none">{String(count).padStart(2, '0')}</div>
      <div className="absolute bottom-10 font-mono text-[10px] tracking-[0.3em] text-muted">NAGI // VANDER</div>
    </div>
  )
}
