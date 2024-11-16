'use client'

import React from 'react'
import { Tooltip, Flex, TooltipTrigger, TooltipContent, TooltipProps, Size, Button, IconButton } from '@pillar-ui/core'
import { ThumbUp } from '@pillar-ui/icons'

export const TooltipTriggerAs = () => {
  return (
    <Flex gap="6">
      <Tooltip>
        <TooltipTrigger as={Button} color="d">
          hello
        </TooltipTrigger>
        <TooltipContent>Hello world</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger as={IconButton} title="Like" icon={<ThumbUp />} color="d" />
        <TooltipContent>Click To like</TooltipContent>
      </Tooltip>
    </Flex>
  )
}
