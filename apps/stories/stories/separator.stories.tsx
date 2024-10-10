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
    <div className="Sf-4">
      <Separator color="d" />
      <Separator color="w" />
      <Separator color="su" />
      <Separator color="se" />
      <Separator color="p" />
      <Separator color="b" />
    </div>
  )
}

export const SeparatorThickness = () => {
  return (
    <div className="Sf-4">
      <Separator thickness="1" />
      <Separator thickness="2" />
      <Separator thickness="3" />
      <Separator thickness="4" />
      <Separator thickness="5" />
      <Separator thickness="6" />
      <Separator thickness="7" />
      <Separator thickness="8" />
      <Separator thickness="9" />
    </div>
  )
}

export const SeparatorCorner = () => {
  return (
    <div className="Sf-4">
      <Separator corner="full" thickness="1" />
      <Separator corner="full" thickness="2" />
      <Separator corner="full" thickness="3" />
      <Separator corner="full" thickness="4" />
      <Separator corner="full" thickness="5" />
      <Separator corner="full" thickness="6" />
      <Separator corner="full" thickness="7" />
      <Separator corner="full" thickness="8" />
      <Separator corner="full" thickness="9" />
    </div>
  )
}

export const SeparatorSeparator = () => {
  return (
    <div className="Sf-4">
      <Separator title="OR" corner="5" thickness="1" />
      <Separator title="OR" corner="5" thickness="2" />
      <Separator title="OR" corner="5" thickness="3" />
      <Separator title="OR" corner="5" thickness="4" />
      <Separator title="OR" corner="5" thickness="5" />
      <Separator title="OR" corner="5" thickness="6" />
      <Separator title="OR" corner="5" thickness="7" />
      <Separator title="OR" corner="5" thickness="8" />
      <Separator title="OR" corner="5" thickness="9" />
    </div>
  )
}

export const SeparatorDirection = () => {
  return (
    <div className="Sf-4">
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
