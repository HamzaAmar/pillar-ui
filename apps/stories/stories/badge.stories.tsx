import React from 'react'
import { Check } from '@pillar/icons'
import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { Badge, Flex } from '@pillar/core'

export default {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    number: { if: { arg: 'variant', eq: 'number' } },
    max: { if: { arg: 'variant', eq: 'number' } },
  },
} as ComponentMeta<typeof Badge>

export const BadgeSize = () => {
  return (
    <div className="l_flow__md">
      <Flex items="center" gap="sm">
        <Badge size="3xs" variant="numeric" number={15} max={15} />
        <Badge size="2xs" variant="numeric" number={15} max={15} />
        <Badge size="xs" variant="numeric" number={15} max={15} />
        <Badge size="sm" variant="numeric" number={15} max={15} />
        <Badge size="md" variant="numeric" number={15} max={15} />
        <Badge size="lg" variant="numeric" number={15} max={15} />
        <Badge size="2xl" variant="numeric" number={15} max={15} />
        <Badge size="3xl" variant="numeric" number={15} max={15} />
      </Flex>
      <Flex items="center" gap="sm">
        <Badge size="3xs" variant="icon" icon={<Check />} />
        <Badge size="2xs" variant="icon" icon={<Check />} />
        <Badge size="xs" variant="icon" icon={<Check />} />
        <Badge size="sm" variant="icon" icon={<Check />} />
        <Badge size="md" variant="icon" icon={<Check />} />
        <Badge size="lg" variant="icon" icon={<Check />} />
        <Badge size="2xl" variant="icon" icon={<Check />} />
        <Badge size="3xl" variant="icon" icon={<Check />} />
      </Flex>
      <Flex items="center" gap="sm">
        <Badge size="3xs" variant="dot" />
        <Badge size="2xs" variant="dot" />
        <Badge size="xs" variant="dot" />
        <Badge size="sm" variant="dot" />
        <Badge size="md" variant="dot" />
        <Badge size="lg" variant="dot" />
        <Badge size="2xl" variant="dot" />
        <Badge size="3xl" variant="dot" />
      </Flex>
    </div>
  )
}

export const BadgeNumericColor = () => {
  return (
    <Flex gap="sm">
      <Badge variant="numeric" number={15} max={15} color="danger" />
      <Badge variant="numeric" number={15} max={15} color="success" />
      <Badge variant="numeric" number={15} max={15} color="warning" />
      <Badge variant="numeric" number={15} max={15} color="primary" />
      <Badge variant="numeric" number={15} max={15} color="secondary" />
      <Badge variant="numeric" number={15} max={15} color="surface" />
    </Flex>
  )
}
export const BadgeIconColor = () => {
  return (
    <Flex gap="sm">
      <Badge variant="icon" icon={<Check />} color="danger" />
      <Badge variant="icon" icon={<Check />} color="success" />
      <Badge variant="icon" icon={<Check />} color="warning" />
      <Badge variant="icon" icon={<Check />} color="primary" />
      <Badge variant="icon" icon={<Check />} color="secondary" />
      <Badge variant="icon" icon={<Check />} color="surface" />
    </Flex>
  )
}
export const BadgeDotColor = () => {
  return (
    <Flex gap="sm">
      <Badge variant="dot" color="danger" />
      <Badge variant="dot" color="success" />
      <Badge variant="dot" color="warning" />
      <Badge variant="dot" color="primary" />
      <Badge variant="dot" color="secondary" />
      <Badge variant="dot" color="surface" />
    </Flex>
  )
}

export const BadgeNumericMaxValue = () => {
  return (
    <Flex gap="sm">
      <Badge variant="numeric" number={15} max={10} color="danger" />
      <Badge variant="numeric" number={150} max={100} color="success" />
      <Badge variant="numeric" number={5} max={0} color="warning" />
      <Badge variant="numeric" number={0} max={15} color="primary" />
      <Badge variant="numeric" showZero number={0} max={15} color="danger" />
      <Badge variant="numeric" number={15} max={1} color="secondary" />
      <Badge variant="numeric" number={15} max={15} color="surface" />
    </Flex>
  )
}

export const BadgeCustomStyle = () => {
  return (
    <Flex gap="sm">
      <Badge variant="numeric" number={15} max={10} className="u_danger" />
      <Badge variant="numeric" number={15} max={10} className="u_brown" />
      <Badge variant="numeric" number={15} max={10} style={{ background: 'danger' }} />
      <Badge
        variant="numeric"
        number={15}
        max={10}
        style={{ background: 'success', color: 'white', border: '4px solid darkred' }}
      />
    </Flex>
  )
}

export const BadgePolymorphic = () => {
  return (
    <Flex gap="sm">
      <Badge as="button" onClick={() => alert('Hello')} variant="numeric" number={15} max={10} className="u_danger" />
      <Badge as="a" href="#Hello" variant="numeric" number={15} max={10} className="u_brown" />
      <Badge as="span" variant="numeric" number={15} max={10} style={{ background: 'danger' }} />
      <Badge
        as="kbd"
        variant="numeric"
        number={15}
        max={10}
        style={{ background: 'success', color: 'white', border: '4px solid darkred' }}
      />
    </Flex>
  )
}

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />
export const Playground = Template.bind({})
