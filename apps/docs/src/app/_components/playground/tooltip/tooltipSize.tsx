import React from 'react'
import { Tooltip, Flex, TooltipTrigger, TooltipContent, TooltipProps, Size } from '@pillar-ui/core'

export function TooltipBase({ size }: { size: Size }) {
  return (
    <Tooltip>
      <TooltipTrigger as="button">hello</TooltipTrigger>
      <TooltipContent size={size}>Hello world</TooltipContent>
    </Tooltip>
  )
}

export const TooltipSize = () => {
  return (
    <Flex gap="6">
      <TooltipBase size="1" />
      <TooltipBase size="2" />
      <TooltipBase size="3" />
      <TooltipBase size="4" />
      <TooltipBase size="5" />
      <TooltipBase size="6" />
      <TooltipBase size="7" />
      <TooltipBase size="8" />
      <TooltipBase size="9" />
    </Flex>
  )
}
