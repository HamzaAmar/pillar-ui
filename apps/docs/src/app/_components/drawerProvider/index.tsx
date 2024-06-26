'use client'

import React, { ReactNode, createContext, useContext, useState } from 'react'

// Create the context with a default value of null
const DrawerContext = createContext<ProviderProps | null>(null)

interface DrawerProps {
  children: ReactNode
}

interface ProviderProps {
  open: boolean
  toggleDrawer: () => void
}

export const DrawerProvider = ({ children }: DrawerProps) => {
  const [open, setOpen] = useState(false)

  const toggleDrawer = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  const value: ProviderProps = {
    open,
    toggleDrawer,
  }

  return <DrawerContext.Provider value={value}>{children}</DrawerContext.Provider>
}

export const useDrawer = () => {
  const context = useContext(DrawerContext)
  if (!context) {
    return null
  }
  return context
}
