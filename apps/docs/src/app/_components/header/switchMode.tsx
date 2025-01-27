'use client'

import { IconButton, Spinner } from '@pillar-ui/core'
import { useBool } from '@pillar-ui/hooks'
import { Moon, Sun } from '@pillar-ui/icons'
import { useTheme } from 'next-themes'
import React, { useEffect } from 'react'

export const SwitchMode = () => {
  const { value: mounted, setTrue } = useBool(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    setTrue()
  }, [setTrue])

  const nextMode = resolvedTheme === 'dark' ? 'light' : 'dark'

  const icon =
    resolvedTheme === 'dark' ? (
      <Sun aria-hidden="true" focusable="false" />
    ) : (
      <Moon aria-hidden="true" focusable="false" />
    )

  return (
    <IconButton
      variant="soft"
      size="4"
      state={mounted ? 'idle' : 'loading'}
      onClick={() => setTheme(nextMode)}
      icon={icon}
      title="Turn on light mode"
    />
  )
}
