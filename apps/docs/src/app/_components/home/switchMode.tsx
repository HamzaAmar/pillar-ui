'use client'

import { Button, Spinner } from '@pillar-ui/core'
import { useBooleanState } from '@pillar-ui/hooks'
import { Moon, Sun } from '@pillar-ui/icons'
import { useTheme } from 'next-themes'
import React, { useEffect } from 'react'

const svgs = { width: 30, ariaHidden: true, focusable: false }

const SwitchMode = () => {
  const { value: mounted, setTrue } = useBooleanState(false)
  const { resolvedTheme, setTheme } = useTheme()

  const isDark = resolvedTheme === 'dark'

  useEffect(() => {
    setTrue()
  }, [setTrue])

  const nextMode = isDark ? 'light' : 'dark'
  const icon = isDark ? <Sun {...svgs} /> : <Moon {...svgs} />

  return (
    <Button
      onClick={() => setTheme(nextMode)}
      size="4"
      icon={icon}
      data-mode={resolvedTheme}
      state={mounted ? 'idle' : 'loading'}
    >
      {nextMode}
    </Button>
  )
}

export default SwitchMode
