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
      <TooltipBase gap="2" />
      <TooltipBase gap="3" />
      <TooltipBase size="4" />
      <TooltipBase gap="5" />
      <TooltipBase gap="6" />
      <TooltipBase gap="7" />
      <TooltipBase gap="8" />
    </Flex>
  )
}

export const TooltipCorner = () => {
  return (
    <Flex gap="6">
      <TooltipBase corner="2" />
      <TooltipBase corner="3" />
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
