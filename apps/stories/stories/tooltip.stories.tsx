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
    <Flex gap="lg">
      <TooltipBase size="2xs" />
      <TooltipBase size="xs" />
      <TooltipBase size="sm" />
      <TooltipBase size="md" />
      <TooltipBase size="lg" />
      <TooltipBase size="xl" />
      <TooltipBase size="2xl" />
    </Flex>
  )
}

export const TooltipCorner = () => {
  return (
    <Flex gap="lg">
      <TooltipBase corner="2xs" />
      <TooltipBase corner="xs" />
      <TooltipBase corner="sm" />
      <TooltipBase corner="md" />
      <TooltipBase corner="lg" />
      <TooltipBase corner="xl" />
      <TooltipBase corner="2xl" />
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
