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
    <Flex gap="sm" items="center">
      <Kbd title="Esc" />
      <Kbd title="Esc" color="d" />
      <Kbd title="Esc" color="s" />
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
    <div className="l_f-md">
      {Variants.map((variant) => (
        <Flex key={variant} gap="sm">
          <Kbd title="Esc" variant={variant} />
          <Kbd title="Esc" variant={variant} color="d" />
          <Kbd title="Esc" variant={variant} color="s" />
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
    <Flex gap="sm" items="center">
      <Kbd title="Esc" />
      <Kbd title="Esc" size="2xs" />
      <Kbd title="Esc" size="xs" />
      <Kbd title="Esc" size="sm" />
      <Kbd title="Esc" size="md" />
      <Kbd title="Esc" size="lg" />
      <Kbd title="Esc" size="xl" />
      <Kbd title="Esc" size="2xl" />
    </Flex>
  )
}

export const KbdCorners = () => {
  return (
    <Flex gap="sm" items="center">
      <Kbd title="Esc" corner="sharp" />
      <Kbd title="Esc" />
      <Kbd title="Esc" corner="xs" />
      <Kbd title="Esc" corner="md" />
      <Kbd title="Esc" corner="xl" />
      <Kbd title="Esc" corner="full" />
      <Kbd title="Esc" corner="circle" />
    </Flex>
  )
}

export const KbdInFlex = () => {
  return (
    <Flex gap="sm" items="center">
      <Kbd title="Esc" corner="sharp" />
      <Kbd title="Esc" />
      <Kbd title="Esc" corner="xs" />
      <Kbd title="Esc" corner="md" />
      <Kbd title="Esc" corner="xl" />
      <Kbd title="Esc" corner="full" />
      <Kbd title="Esc" corner="circle" />
    </Flex>
  )
}
