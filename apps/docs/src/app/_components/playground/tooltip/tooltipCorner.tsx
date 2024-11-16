'use client'

import { Button, Corner, Tooltip, TooltipContent, TooltipTrigger, type TooltipProps } from '@pillar-ui/core'

export function TooltipBase({ corner }: { corner: Corner }) {
  return (
    <Tooltip>
      <TooltipTrigger as={Button}>hello</TooltipTrigger>
      <TooltipContent corner={corner}>Hello world</TooltipContent>
    </Tooltip>
  )
}
export const TooltipCorner = () => {
  return (
    <>
      <TooltipBase corner="0" />
      <TooltipBase corner="1" />
      <TooltipBase corner="2" />
      <TooltipBase corner="3" />
      <TooltipBase corner="4" />
      <TooltipBase corner="5" />
      <TooltipBase corner="full" />
    </>
  )
}
