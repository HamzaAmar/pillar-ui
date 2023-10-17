import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Tooltip, Button, Flex } from '@pillar-ui/core'

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>

export function TooltipBase(props: any) {
  return (
    <Tooltip {...props}>
      <Tooltip.Trigger corner="sm" as={Button}>
        hello
      </Tooltip.Trigger>
      <Tooltip.Content>Hello world</Tooltip.Content>
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

const TootipCom: ComponentStory<typeof Tooltip> = ({ ...args }) => (
  <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Tooltip {...args}>
      <Tooltip.Trigger corner="sm" as={Button}>
        hello
      </Tooltip.Trigger>
      <Tooltip.Content>Hello world</Tooltip.Content>
    </Tooltip>
  </div>
)

export const Playground = TootipCom.bind({})
