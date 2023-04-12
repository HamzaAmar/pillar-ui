import { createContext, useContext } from 'react'

import type { TextFieldGroupContextProps, TextFieldProviderProps } from './form.type'

const TextFieldContext = createContext<TextFieldGroupContextProps>({} as TextFieldGroupContextProps)

function TextFieldProvider({ children, ...rest }: TextFieldProviderProps) {
  return <TextFieldContext.Provider value={rest}>{children}</TextFieldContext.Provider>
}

function useTextField() {
  return useContext(TextFieldContext)
}

export { TextFieldProvider, useTextField }
