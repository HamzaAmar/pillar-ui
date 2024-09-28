import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { Tooltip, Flex, TooltipTrigger, TooltipContent } from '@pillar-ui/core'

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
}

export default meta
export function TooltipBase(props: any) {
  return (
    <Tooltip {...props}>
      <TooltipTrigger as="button">hello</TooltipTrigger>
      <TooltipContent>Hello world</TooltipContent>
    </Tooltip>
  )
}

export const TooltipSize = () => {
  return (
    <Flex gap="6">
      <TooltipBase size="2" />
      <TooltipBase size="3" />
      <TooltipBase size="4" />
      <TooltipBase size="5" />
      <TooltipBase size="6" />
      <TooltipBase size="7" />
      <TooltipBase size="8" />
    </Flex>
  )
}

export const TooltipCorner = () => {
  return (
    <Flex gap="6">
      <TooltipBase corner="1" />
      <TooltipBase corner="2" />
      <TooltipBase corner="3" />
      <TooltipBase corner="4" />
      <TooltipBase corner="5" />
    </Flex>
  )
}

const TootipCom: StoryFn<typeof Tooltip> = ({ ...args }) => (
  <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Tooltip {...args}>
      <TooltipTrigger as="button">hello</TooltipTrigger>
      <TooltipContent>Hello world</TooltipContent>
    </Tooltip>
  </div>
)

export const Playground = {
  render: TootipCom,
}
