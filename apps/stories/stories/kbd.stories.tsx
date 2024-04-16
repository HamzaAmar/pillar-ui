import React from 'react'
import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { Flex, Kbd } from '@pillar-ui/core'

export default {
  title: 'Components/Kbd',
  component: Kbd,
  args: {
    title: 'Esc',
  },
} as ComponentMeta<typeof Kbd>

export const KbdColors = () => {
  return (
    <Flex gap="sm" items="center">
      <Kbd title="Esc" />
      <Kbd title="Esc" color="danger" />
      <Kbd title="Esc" color="success" />
      <Kbd title="Esc" color="warning" />
      <Kbd title="Esc" color="primary" />
      <Kbd title="Esc" color="surface" />
      <Kbd title="Esc" color="secondary" />
    </Flex>
  )
}

const Variants = ['solid', 'mixed', 'soft', 'outline'] as const

export const KbdVariants = () => {
  return (
    <div className="l_flow__md">
      {Variants.map((variant) => (
        <Flex key={variant} gap="sm">
          <Kbd title="Esc" variant={variant} />
          <Kbd title="Esc" variant={variant} color="danger" />
          <Kbd title="Esc" variant={variant} color="success" />
          <Kbd title="Esc" variant={variant} color="warning" />
          <Kbd title="Esc" variant={variant} color="primary" />
          <Kbd title="Esc" variant={variant} color="surface" />
          <Kbd title="Esc" variant={variant} color="secondary" />
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
