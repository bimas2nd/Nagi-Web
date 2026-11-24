import { useCallback, useState } from 'react'
import { CursorProvider } from './components/Cursor'
import Preloader from './components/Preloader'
import Grain from './components/Grain'
import HUD from './components/HUD'
import Chapter1 from './components/Chapter1Origin'
import Chapter2 from './components/Chapter2Scatter'
import Chapter3 from './components/Chapter3Mandate'
import Chapter4 from './components/Chapter4Divisions'
import Chapter5 from './components/Chapter5Works'
import Chapter6 from './components/Chapter6Contact'
import { useScrollProgress } from './hooks/useScrollProgress'

export default function App() {
  const [loaded, setLoaded] = useState(false)
  const onDone = useCallback(() => setLoaded(true), [])
  const { scrollY, progress, vh } = useScrollProgress()

  return (
    <CursorProvider>
      {!loaded && <Preloader onDone={onDone} />}
      <div className={`transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <Grain />
        <HUD progress={progress} />
        <main className="relative">
          <Chapter1 scrollY={scrollY} vh={vh} />
          <Chapter2 />
          <Chapter3 scrollY={scrollY} vh={vh} />
          <Chapter4 />
          <Chapter5 />
          <Chapter6 />
        </main>
      </div>
    </CursorProvider>
  )
}
