import { createContext, useContext } from 'react'
import type { StepperContextProps, StepperProviderProps } from './stepper.type'
// import type {
//   AvatarGroContextProps,
//   AvatarGroupProviderProps,
// } from "./avatar.type";

const StepperContext = createContext<StepperContextProps | null>({} as StepperContextProps)

// Context.Provider
export function StepperProvider({ children, ...rest }: StepperProviderProps) {
  return <StepperContext.Provider value={rest}>{children}</StepperContext.Provider>
}

export function useStepperContext() {
  return useContext(StepperContext)
}

StepperContext.displayName = 'StepperContext'
