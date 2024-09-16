'use client'

import { Button, IconButton, Spinner } from '@pillar-ui/core'
import { useBooleanState } from '@pillar-ui/hooks'
import { Moon, Sun } from '@pillar-ui/icons'
import { useTheme } from 'next-themes'
import React, { useEffect } from 'react'

export const SwitchMode = () => {
  const { value: mounted, setTrue } = useBooleanState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    setTrue()
  }, [setTrue])

  // TODO: Return Skeleton to avoid  Layout Shift
  if (!mounted) {
    return <Spinner size="lg" />
  }

  const nextMode = resolvedTheme === 'dark' ? 'light' : 'dark'

  const icon =
    resolvedTheme === 'dark' ? (
      <Sun aria-hidden="true" focusable="false" />
    ) : (
      <Moon aria-hidden="true" focusable="false" />
    )

  return <IconButton size="sm" onClick={() => setTheme(nextMode)} icon={icon} title="Turn on light mode" />
}
