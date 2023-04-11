import { createContext, useContext } from 'react'
import type { AvatarGroContextProps, AvatarGroupProviderProps } from './avatar.type'

const Context = createContext<AvatarGroContextProps>({})
Context.displayName = 'AvatarContext'
export function AvatarProvider({ children, ...rest }: AvatarGroupProviderProps) {
  return <Context.Provider value={rest}>{children}</Context.Provider>
}

export function useAvatarContext() {
  return useContext(Context)
}
