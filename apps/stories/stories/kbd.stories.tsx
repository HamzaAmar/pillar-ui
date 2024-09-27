import React from 'react'
import type { Meta } from '@storybook/react'
import { Flex, Kbd } from '@pillar-ui/core'

const meta: Meta<typeof Kbd> = {
  title: 'Components/Kbd',
  component: Kbd,
  args: {
    title: 'Esc',
  },
}

export default meta

export const KbdColors = () => {
  return (
    <Flex gap="4" items="center">
      <Kbd title="Esc" />
      <Kbd title="Esc" color="d" />
      <Kbd title="Esc" color="su" />
      <Kbd title="Esc" color="w" />
      <Kbd title="Esc" color="p" />
      <Kbd title="Esc" color="b" />
      <Kbd title="Esc" color="se" />
    </Flex>
  )
}

const Variants = ['solid', 'mixed', 'soft', 'outline'] as const

export const KbdVariants = () => {
  return (
    <div className="Sf4">
      {Variants.map((variant) => (
        <Flex key={variant} gap="4">
          <Kbd title="Esc" variant={variant} />
          <Kbd title="Esc" variant={variant} color="d" />
          <Kbd title="Esc" variant={variant} color="su" />
          <Kbd title="Esc" variant={variant} color="w" />
          <Kbd title="Esc" variant={variant} color="p" />
          <Kbd title="Esc" variant={variant} color="b" />
          <Kbd title="Esc" variant={variant} color="se" />
        </Flex>
      ))}
    </div>
  )
}

export const KbdSizes = () => {
  return (
    <Flex gap="4" items="center">
      <Kbd title="Esc" />
      <Kbd title="Esc" size="2" />
      <Kbd title="Esc" size="3" />
      <Kbd title="Esc" size="4" />
      <Kbd title="Esc" size="5" />
      <Kbd title="Esc" size="6" />
      <Kbd title="Esc" size="7" />
      <Kbd title="Esc" size="8" />
    </Flex>
  )
}

export const KbdCorners = () => {
  return (
    <Flex gap="4" items="center">
      <Kbd title="Esc" corner="0" />
      <Kbd title="Esc" />
      <Kbd title="Esc" corner="3" />
      <Kbd title="Esc" corner="3" />
      <Kbd title="Esc" corner="5" />
      <Kbd title="Esc" corner="full" />
      <Kbd title="Esc" corner="circle" />
    </Flex>
  )
}

export const KbdInFlex = () => {
  return (
    <Flex gap="4" items="center">
      <Kbd title="Esc" corner="0" />
      <Kbd title="Esc" />
      <Kbd title="Esc" corner="3" />
      <Kbd title="Esc" corner="3" />
      <Kbd title="Esc" corner="5" />
      <Kbd title="Esc" corner="full" />
      <Kbd title="Esc" corner="circle" />
    </Flex>
  )
}
