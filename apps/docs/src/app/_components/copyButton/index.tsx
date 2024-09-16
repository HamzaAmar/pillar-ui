'use client'

import { Button, type ButtonProps } from '@pillar-ui/core'
import { useCopyToClipboard } from '@pillar-ui/hooks'
import React from 'react'

interface CopyButtonProps extends Omit<ButtonProps, 'children'> {
  text: string
  className?: string
}

export const CopyButton = ({ text, ...rest }: CopyButtonProps) => {
  const { copied, copy } = useCopyToClipboard(5000)

  return (
    <Button {...rest} onClick={() => copy(text)}>
      {copied ? 'Copied' : 'Copy'}
    </Button>
  )
}
