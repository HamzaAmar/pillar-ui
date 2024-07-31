'use client'

import { Button, Spinner } from '@pillar-ui/core'
import { useBooleanState } from '@pillar-ui/hooks'
import { Moon, Sun } from '@pillar-ui/icons'
import { useTheme } from 'next-themes'
import React, { useEffect } from 'react'

const SwitchMode = () => {
  const { booleanValue: mounted, setTrue } = useBooleanState(false)
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
      <Sun width="30" aria-hidden="true" focusable="false" />
    ) : (
      <Moon width="30" aria-hidden="true" focusable="false" />
    )

  return (
    <Button
      color={resolvedTheme ? 'primary' : 'bg'}
      variant={resolvedTheme ? 'solid' : 'outline'}
      onClick={() => setTheme(nextMode)}
      size="md"
      icon={icon}
      data-mode={resolvedTheme}
    >
      {nextMode}
    </Button>
  )
}

export default SwitchMode
