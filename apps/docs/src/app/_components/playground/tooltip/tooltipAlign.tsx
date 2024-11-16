'use client'

import { Button, Tooltip, TooltipContent, TooltipTrigger } from '@pillar-ui/core'
import React from 'react'

export function TooltipBase({ align }: { align: 'start' | 'end' | 'center' }) {
  return (
    <Tooltip>
      <TooltipTrigger as={Button}>hello</TooltipTrigger>
      <TooltipContent align={align}>Hello world</TooltipContent>
    </Tooltip>
  )
}

export const TooltipAlign = () => {
  return (
    <>
      <TooltipBase align="start" />
      <TooltipBase align="end" />
      <TooltipBase align="center" />
    </>
  )
}
