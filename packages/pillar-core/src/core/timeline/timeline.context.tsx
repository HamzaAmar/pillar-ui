import { createContext, useContext } from 'react'
import type { ContextProps, TimelineContextProviderProps } from './timeline.type'

const TimelineContext = createContext<ContextProps | null>(null)

export const TimelineProvider = ({ children, ...rest }: TimelineContextProviderProps) => {
  return <TimelineContext.Provider value={{ ...rest }}>{children}</TimelineContext.Provider>
}

export const useTimeline = () => {
  return useContext(TimelineContext)
}
