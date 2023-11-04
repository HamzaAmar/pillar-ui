import React, { CSSProperties, useRef, useState } from 'react'
import { Check, Plus, Plane, ChevronDown, Apple, Alien, LetterSpacing, SuperScript } from '@pillar-ui/icons'
import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { Badge, Button, Flex, Paper } from '@pillar-ui/core'

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
        <Badge size="2xs" variant="icon" icon={<Plus />} />
        <Badge size="xs" variant="icon" icon={<Plane />} />
        <Badge size="sm" variant="icon" icon={<Apple />} />
        <Badge size="md" variant="icon" icon={<Alien />} />
        <Badge size="lg" variant="icon" icon={<ChevronDown />} />
        <Badge size="2xl" variant="icon" icon={<LetterSpacing />} />
        <Badge size="3xl" variant="icon" icon={<SuperScript />} />
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

export const BadgeHighContrastColor = () => {
  return (
    <div className="l_flow__sm">
      <Flex gap="sm">
        <Badge variant="numeric" number={15} max={15} color="danger" />
        <Badge variant="numeric" number={15} max={15} color="success" />
        <Badge variant="numeric" number={15} max={15} color="warning" />
        <Badge variant="numeric" number={15} max={15} color="primary" />
        <Badge variant="numeric" number={15} max={15} color="secondary" />
        <Badge variant="numeric" number={15} max={15} color="surface" />
      </Flex>
      <Flex gap="sm">
        <Badge variant="numeric" highContrast number={15} max={15} color="danger" />
        <Badge variant="numeric" highContrast number={15} max={15} color="success" />
        <Badge variant="numeric" highContrast number={15} max={15} color="warning" />
        <Badge variant="numeric" highContrast number={15} max={15} color="primary" />
        <Badge variant="numeric" highContrast number={15} max={15} color="secondary" />
        <Badge variant="numeric" highContrast number={15} max={15} color="surface" />
      </Flex>
    </div>
  )
}

export const BadgeCorner = () => {
  return (
    <div className="l_flow__md">
      <Flex gap="sm">
        <Badge variant="numeric" corner="sharp" number={15} max={15} color="danger" />
        <Badge variant="numeric" corner="xs" number={15} max={15} color="success" />
        <Badge variant="numeric" corner="sm" number={15} max={15} color="warning" />
        <Badge variant="numeric" corner="md" number={15} max={15} color="secondary" />
        <Badge variant="numeric" corner="lg" number={15} max={15} color="secondary" />
        <Badge variant="numeric" corner="circle" number={15} max={15} color="primary" />
        <Badge variant="numeric" corner="full" number={15} max={15} color="surface" />
      </Flex>
      <Flex gap="sm">
        <Badge variant="icon" icon={<Check />} corner="sharp" color="danger" />
        <Badge variant="icon" icon={<Plus />} corner="xs" color="success" />
        <Badge variant="icon" icon={<Plane />} corner="sm" color="warning" />
        <Badge variant="icon" icon={<Apple />} corner="md" color="secondary" />
        <Badge variant="icon" icon={<Alien />} corner="lg" color="secondary" />
        <Badge variant="icon" icon={<ChevronDown />} corner="circle" color="primary" />
        <Badge variant="icon" icon={<LetterSpacing />} corner="full" color="surface" />
      </Flex>
      <Flex gap="sm">
        <Badge variant="dot" corner="sharp" color="danger" />
        <Badge variant="dot" corner="xs" color="success" />
        <Badge variant="dot" corner="sm" color="warning" />
        <Badge variant="dot" corner="md" color="secondary" />
        <Badge variant="dot" corner="lg" color="secondary" />
        <Badge variant="dot" corner="circle" color="primary" />
        <Badge variant="dot" corner="full" color="surface" />
      </Flex>
    </div>
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

export const BadgeRefForwarded = () => {
  const badgeRef = useRef<HTMLDivElement>(null)
  const [count, setCount] = useState(1)

  const handleClick = () => {
    setCount((count) => count + 1)
    if (badgeRef.current?.style) {
      const { style } = badgeRef.current
      if (count % 2 === 0) {
        style.backgroundColor = 'black'
        style.color = 'white'
        return
      }
      style.background = 'white'
      style.color = 'black'
      return
    }
  }

  return (
    <Flex gap="sm">
      <Badge ref={badgeRef} variant="numeric" number={15} max={10} color="danger" />
      <Button onClick={handleClick}>Number {count}</Button>
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

export function ButtonCornerDefaults() {
  return (
    <div className="l_flow__sm">
      <Flex gap="sm">
        <Paper corner="sharp">
          <Badge variant="numeric" number={15} max={15} />
        </Paper>
        <Paper corner="sm">
          <Badge variant="numeric" number={15} max={15} />
        </Paper>
        <Paper corner="md">
          <Badge variant="numeric" number={15} max={15} />
        </Paper>
        <Paper corner="lg">
          <Badge variant="numeric" number={15} max={15} />
        </Paper>
        <Badge variant="numeric" number={15} max={15} />
      </Flex>

      <Flex gap="sm" style={{ '--badge-corner': '1px' } as CSSProperties}>
        <Paper corner="sharp">
          <Badge variant="numeric" number={15} max={15} />
        </Paper>
        <Paper corner="sm">
          <Badge variant="numeric" number={15} max={15} />
        </Paper>
        <Paper corner="md">
          <Badge variant="numeric" number={15} max={15} />
        </Paper>
        <Paper corner="lg">
          <Badge variant="numeric" number={15} max={15} />
        </Paper>
        <Badge variant="numeric" number={15} max={15} />
      </Flex>
      <Flex gap="sm" style={{ '--badge-corner': '10px' } as CSSProperties}>
        <Paper corner="sharp">
          <Badge variant="numeric" number={15} max={15} />
        </Paper>
        <Paper corner="sm">
          <Badge variant="numeric" number={15} max={15} />
        </Paper>
        <Paper corner="md">
          <Badge variant="numeric" number={15} max={15} />
        </Paper>
        <Paper corner="lg">
          <Badge variant="numeric" number={15} max={15} />
        </Paper>
        <Badge variant="numeric" number={15} max={15} />
      </Flex>

      <Flex gap="sm" style={{ '--badge-corner': '20px' } as CSSProperties}>
        <Paper corner="sharp">
          <Badge variant="numeric" number={15} max={15} />
        </Paper>
        <Paper corner="sm">
          <Badge variant="numeric" number={15} max={15} />
        </Paper>
        <Paper corner="md">
          <Badge variant="numeric" number={15} max={15} />
        </Paper>
        <Paper corner="lg">
          <Badge variant="numeric" number={15} max={15} />
        </Paper>
        <Badge variant="numeric" number={15} max={15} />
      </Flex>
    </div>
  )
}

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />
export const Playground = Template.bind({})
