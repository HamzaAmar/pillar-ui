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
      <Kbd title="Esc" color="dan" />
      <Kbd title="Esc" color="suc" />
      <Kbd title="Esc" color="war" />
      <Kbd title="Esc" color="pri" />
      <Kbd title="Esc" color="bg" />
      <Kbd title="Esc" color="sec" />
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
          <Kbd title="Esc" variant={variant} color="dan" />
          <Kbd title="Esc" variant={variant} color="suc" />
          <Kbd title="Esc" variant={variant} color="war" />
          <Kbd title="Esc" variant={variant} color="pri" />
          <Kbd title="Esc" variant={variant} color="bg" />
          <Kbd title="Esc" variant={variant} color="sec" />
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
