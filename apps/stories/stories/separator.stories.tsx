import React from 'react'
import { Meta } from '@storybook/react'
import { Alert, Separator, Flex } from '@pillar-ui/core'

const meta: Meta<typeof Separator> = {
  title: 'Components/Separator',
  component: Alert,
}

export default meta

export const SeparatorColors = () => {
  return (
    <div className="l_f-md">
      <Separator color="d" />
      <Separator color="w" />
      <Separator color="s" />
      <Separator color="se" />
      <Separator color="p" />
      <Separator color="b" />
    </div>
  )
}

export const SeparatorThickness = () => {
  return (
    <div className="l_f-md">
      <Separator thickness="3xs" />
      <Separator thickness="2xs" />
      <Separator thickness="xs" />
      <Separator thickness="sm" />
      <Separator thickness="md" />
      <Separator thickness="lg" />
      <Separator thickness="xl" />
      <Separator thickness="2xl" />
      <Separator thickness="3xl" />
    </div>
  )
}

export const SeparatorCorner = () => {
  return (
    <div className="l_f-md">
      <Separator corner="full" thickness="3xs" />
      <Separator corner="full" thickness="2xs" />
      <Separator corner="full" thickness="xs" />
      <Separator corner="full" thickness="sm" />
      <Separator corner="full" thickness="md" />
      <Separator corner="full" thickness="lg" />
      <Separator corner="full" thickness="xl" />
      <Separator corner="full" thickness="2xl" />
      <Separator corner="full" thickness="3xl" />
    </div>
  )
}

export const SeparatorSeparator = () => {
  return (
    <div className="l_f-md">
      <Separator title="OR" corner="xl" thickness="3xs" />
      <Separator title="OR" corner="xl" thickness="2xs" />
      <Separator title="OR" corner="xl" thickness="xs" />
      <Separator title="OR" corner="xl" thickness="sm" />
      <Separator title="OR" corner="xl" thickness="md" />
      <Separator title="OR" corner="xl" thickness="lg" />
      <Separator title="OR" corner="xl" thickness="xl" />
      <Separator title="OR" corner="xl" thickness="2xl" />
      <Separator title="OR" corner="xl" thickness="3xl" />
    </div>
  )
}

export const SeparatorDirection = () => {
  return (
    <div className="l_f-md">
      <Separator title="OR" direction="horizontal" />
      <Separator title="OR" direction="horizontal" position="center" />
      <Separator title="OR" direction="horizontal" position="end" />
      <Flex style={{ height: '10rem' }} justify="between">
        <Separator title="OR" direction="vertical" />
        <Separator title="OR" direction="vertical" position="center" />
        <Separator title="OR" direction="vertical" position="end" />
      </Flex>
    </div>
  )
}

export const Playground = {}
