'use client'

import React, { type ReactNode, useState } from 'react'
import { context } from '@pillar-ui/core'

// Create the context with a default value of null

interface DrawerProps {
  children: ReactNode
}

interface ProviderProps {
  open: boolean
  toggleDrawer: () => void
}

const [DrawerContext, useDrawer] = context<ProviderProps>({ name: 'Drawer' })

const DrawerProvider = ({ children }: DrawerProps) => {
  const [open, setOpen] = useState(false)

  const toggleDrawer = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  const value = {
    open,
    toggleDrawer,
  }

  return <DrawerContext {...value}>{children}</DrawerContext>
}

export { useDrawer, DrawerProvider }
