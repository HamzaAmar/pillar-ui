import { createContext, useContext } from 'react'
import type { RadioGroupContextProps, RadioProviderProps } from './radio.type'

const RadioContext = createContext<RadioGroupContextProps>({} as RadioGroupContextProps)

RadioContext.displayName = 'RadioContext'

function RadioProvider({ children, ...rest }: RadioProviderProps) {
  return <RadioContext.Provider value={rest}>{children}</RadioContext.Provider>
}

function useRadio() {
  return useContext(RadioContext)
}

export { RadioProvider, useRadio }
