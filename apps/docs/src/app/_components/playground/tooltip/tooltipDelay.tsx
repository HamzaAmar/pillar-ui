'use client'

import { Button, Tooltip, TooltipContent, TooltipTrigger, type TooltipProps } from '@pillar-ui/core'

export function TooltipBase({ delay }: { delay: number }) {
  return (
    <Tooltip delay={delay}>
      <TooltipTrigger as={Button}>hello</TooltipTrigger>
      <TooltipContent>Hello world</TooltipContent>
    </Tooltip>
  )
}
export const TooltipDelay = () => {
  return (
    <>
      <TooltipBase delay={100} />
      <TooltipBase delay={300} />
      <TooltipBase delay={400} />
      <TooltipBase delay={500} />
      <TooltipBase delay={600} />
      <TooltipBase delay={700} />
      <TooltipBase delay={1500} />
    </>
  )
}
