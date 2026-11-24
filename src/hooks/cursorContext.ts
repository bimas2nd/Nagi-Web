import { createContext, useContext } from 'react'

type CursorContextType = {
  setHover: (v: boolean, label?: string) => void
}
export const CursorContext = createContext<CursorContextType>({ setHover: () => {} })
export const useCursor = () => useContext(CursorContext)
