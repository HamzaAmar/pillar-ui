import { Tooltip, TooltipContent, TooltipTrigger } from '@pillar-ui/core'
import React from 'react'

export function TooltipBase({ position }: { position: 'top' | 'bottom' | 'left' | 'right' }) {
  return (
    <Tooltip>
      <TooltipTrigger as="button">hello</TooltipTrigger>
      <TooltipContent position={position}>Hello world</TooltipContent>
    </Tooltip>
  )
}

export const TooltipPosition = () => {
  return (
    <>
      <TooltipBase position="top" />
      <TooltipBase position="bottom" />
      <TooltipBase position="left" />
      <TooltipBase position="right" />
    </>
  )
}
