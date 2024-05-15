import React, { CSSProperties, useRef, useState } from 'react'
import { Check, Plus, Plane, ChevronDown, Apple, Alien, LetterSpacing, SuperScript } from '@pillar-ui/icons'
import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { Badge, Button, Flex, Paper } from '@pillar-ui/core'

export default {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    number: { if: { arg: 'type', eq: 'number' } },
    max: { if: { arg: 'type', eq: 'number' } },
  },
} as ComponentMeta<typeof Badge>

export const BadgeSize = () => {
  return (
    <div className="l_flow__md">
      <Flex items="center" gap="sm">
        <Badge size="3xs" type="numeric" number={15} max={15} />
        <Badge size="2xs" type="numeric" number={15} max={15} />
        <Badge size="xs" type="numeric" number={15} max={15} />
        <Badge size="sm" type="numeric" number={15} max={15} />
        <Badge size="md" type="numeric" number={15} max={15} />
        <Badge size="lg" type="numeric" number={15} max={15} />
        <Badge size="2xl" type="numeric" number={15} max={15} />
        <Badge size="3xl" type="numeric" number={15} max={15} />
      </Flex>
      <Flex items="center" gap="sm">
        <Badge size="3xs" type="icon" icon={<Check />} />
        <Badge size="2xs" type="icon" icon={<Plus />} />
        <Badge size="xs" type="icon" icon={<Plane />} />
        <Badge size="sm" type="icon" icon={<Apple />} />
        <Badge size="md" type="icon" icon={<Alien />} />
        <Badge size="lg" type="icon" icon={<ChevronDown />} />
        <Badge size="2xl" type="icon" icon={<LetterSpacing />} />
        <Badge size="3xl" type="icon" icon={<SuperScript />} />
      </Flex>
      <Flex items="center" gap="sm">
        <Badge size="3xs" type="dot" />
        <Badge size="2xs" type="dot" />
        <Badge size="xs" type="dot" />
        <Badge size="sm" type="dot" />
        <Badge size="md" type="dot" />
        <Badge size="lg" type="dot" />
        <Badge size="2xl" type="dot" />
        <Badge size="3xl" type="dot" />
      </Flex>
    </div>
  )
}

const VARIANTS = ['solid', 'mixed'] as const

export const BadgeVariantNumeric = () => {
  return (
    <div className="l_flow__md">
      {VARIANTS.map((variant) => (
        <Flex items="center" gap="sm">
          <Badge size="3xs" type="numeric" variant={variant} number={15} max={15} />
          <Badge size="2xs" type="numeric" variant={variant} number={15} max={15} />
          <Badge size="xs" type="numeric" variant={variant} number={15} max={15} />
          <Badge size="sm" type="numeric" variant={variant} number={15} max={15} />
          <Badge size="md" type="numeric" variant={variant} number={15} max={15} />
          <Badge size="lg" type="numeric" variant={variant} number={15} max={15} />
          <Badge size="2xl" type="numeric" variant={variant} number={15} max={15} />
          <Badge size="3xl" type="numeric" variant={variant} number={15} max={15} />
        </Flex>
      ))}
    </div>
  )
}

export const BadgeVariantDot = () => {
  return (
    <div className="l_flow__md">
      {VARIANTS.map((variant) => (
        <Flex items="center" gap="sm">
          <Badge size="3xs" type="dot" variant={variant} />
          <Badge size="2xs" type="dot" variant={variant} />
          <Badge size="xs" type="dot" variant={variant} />
          <Badge size="sm" type="dot" variant={variant} />
          <Badge size="md" type="dot" variant={variant} />
          <Badge size="lg" type="dot" variant={variant} />
          <Badge size="2xl" type="dot" variant={variant} />
          <Badge size="3xl" type="dot" variant={variant} />
        </Flex>
      ))}
    </div>
  )
}

export const BadgeVariantIcon = () => {
  return (
    <div className="l_flow__md">
      {VARIANTS.map((variant) => (
        <Flex items="center" gap="sm">
          <Badge size="3xs" type="icon" variant={variant} icon={<Apple />} />
          <Badge size="2xs" type="icon" variant={variant} icon={<Apple />} />
          <Badge size="xs" type="icon" variant={variant} icon={<Apple />} />
          <Badge size="sm" type="icon" variant={variant} icon={<Apple />} />
          <Badge size="md" type="icon" variant={variant} icon={<Apple />} />
          <Badge size="lg" type="icon" variant={variant} icon={<Apple />} />
          <Badge size="2xl" type="icon" variant={variant} icon={<Apple />} />
          <Badge size="3xl" type="icon" variant={variant} icon={<Apple />} />
        </Flex>
      ))}
    </div>
  )
}

export const BadgeNumericColor = () => {
  return (
    <Flex gap="sm">
      <Badge type="numeric" number={15} max={15} color="danger" />
      <Badge type="numeric" number={15} max={15} color="success" />
      <Badge type="numeric" number={15} max={15} color="warning" />
      <Badge type="numeric" number={15} max={15} color="primary" />
      <Badge type="numeric" number={15} max={15} color="secondary" />
      <Badge type="numeric" number={15} max={15} color="surface" />
    </Flex>
  )
}

export const BadgeHighContrastColor = () => {
  return (
    <div className="l_flow__sm">
      <Flex gap="sm">
        <Badge type="numeric" number={15} max={15} color="danger" />
        <Badge type="numeric" number={15} max={15} color="success" />
        <Badge type="numeric" number={15} max={15} color="warning" />
        <Badge type="numeric" number={15} max={15} color="primary" />
        <Badge type="numeric" number={15} max={15} color="secondary" />
        <Badge type="numeric" number={15} max={15} color="surface" />
      </Flex>
      <Flex gap="sm">
        <Badge type="numeric" highContrast number={15} max={15} color="danger" />
        <Badge type="numeric" highContrast number={15} max={15} color="success" />
        <Badge type="numeric" highContrast number={15} max={15} color="warning" />
        <Badge type="numeric" highContrast number={15} max={15} color="primary" />
        <Badge type="numeric" highContrast number={15} max={15} color="secondary" />
        <Badge type="numeric" highContrast number={15} max={15} color="surface" />
      </Flex>
    </div>
  )
}

export const BadgeCorner = () => {
  return (
    <div className="l_flow__md">
      <Flex gap="sm">
        <Badge type="numeric" corner="sharp" number={15} max={15} color="danger" />
        <Badge type="numeric" corner="xs" number={15} max={15} color="success" />
        <Badge type="numeric" corner="sm" number={15} max={15} color="warning" />
        <Badge type="numeric" corner="md" number={15} max={15} color="secondary" />
        <Badge type="numeric" corner="lg" number={15} max={15} color="secondary" />
        <Badge type="numeric" corner="circle" number={15} max={15} color="primary" />
        <Badge type="numeric" corner="full" number={15} max={15} color="surface" />
      </Flex>
      <Flex gap="sm">
        <Badge type="icon" icon={<Check />} corner="sharp" color="danger" />
        <Badge type="icon" icon={<Plus />} corner="xs" color="success" />
        <Badge type="icon" icon={<Plane />} corner="sm" color="warning" />
        <Badge type="icon" icon={<Apple />} corner="md" color="secondary" />
        <Badge type="icon" icon={<Alien />} corner="lg" color="secondary" />
        <Badge type="icon" icon={<ChevronDown />} corner="circle" color="primary" />
        <Badge type="icon" icon={<LetterSpacing />} corner="full" color="surface" />
      </Flex>
      <Flex gap="sm">
        <Badge type="dot" corner="sharp" color="danger" />
        <Badge type="dot" corner="xs" color="success" />
        <Badge type="dot" corner="sm" color="warning" />
        <Badge type="dot" corner="md" color="secondary" />
        <Badge type="dot" corner="lg" color="secondary" />
        <Badge type="dot" corner="circle" color="primary" />
        <Badge type="dot" corner="full" color="surface" />
      </Flex>
    </div>
  )
}

export const BadgeIconColor = () => {
  return (
    <Flex gap="sm">
      <Badge type="icon" icon={<Check />} color="danger" />
      <Badge type="icon" icon={<Check />} color="success" />
      <Badge type="icon" icon={<Check />} color="warning" />
      <Badge type="icon" icon={<Check />} color="primary" />
      <Badge type="icon" icon={<Check />} color="secondary" />
      <Badge type="icon" icon={<Check />} color="surface" />
    </Flex>
  )
}
export const BadgeDotColor = () => {
  return (
    <Flex gap="sm">
      <Badge type="dot" color="danger" />
      <Badge type="dot" color="success" />
      <Badge type="dot" color="warning" />
      <Badge type="dot" color="primary" />
      <Badge type="dot" color="secondary" />
      <Badge type="dot" color="surface" />
    </Flex>
  )
}

export const BadgeNumericMaxValue = () => {
  return (
    <Flex gap="sm">
      <Badge type="numeric" number={15} max={10} color="danger" />
      <Badge type="numeric" number={150} max={100} color="success" />
      <Badge type="numeric" number={5} max={0} color="warning" />
      <Badge type="numeric" number={0} max={15} color="primary" />
      <Badge type="numeric" showZero number={0} max={15} color="danger" />
      <Badge type="numeric" number={15} max={1} color="secondary" />
      <Badge type="numeric" number={15} max={15} color="surface" />
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
      <Badge ref={badgeRef} type="numeric" number={15} max={10} color="danger" />
      <Button onClick={handleClick}>Number {count}</Button>
    </Flex>
  )
}

export const BadgeCustomStyle = () => {
  return (
    <Flex gap="sm">
      <Badge type="numeric" number={15} max={10} className="u_danger" />
      <Badge type="numeric" number={15} max={10} className="u_brown" />
      <Badge type="numeric" number={15} max={10} style={{ background: 'danger' }} />
      <Badge
        type="numeric"
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
      <Badge as="button" onClick={() => alert('Hello')} type="numeric" number={15} max={10} className="u_danger" />
      <Badge as="a" href="#Hello" type="numeric" number={15} max={10} className="u_brown" />
      <Badge as="span" type="numeric" number={15} max={10} style={{ background: 'danger' }} />
      <Badge
        as="kbd"
        type="numeric"
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
          <Badge type="numeric" number={15} max={15} />
        </Paper>
        <Paper corner="sm">
          <Badge type="numeric" number={15} max={15} />
        </Paper>
        <Paper corner="md">
          <Badge type="numeric" number={15} max={15} />
        </Paper>
        <Paper corner="lg">
          <Badge type="numeric" number={15} max={15} />
        </Paper>
        <Badge type="numeric" number={15} max={15} />
      </Flex>

      <Flex gap="sm" style={{ '--badge-corner': '1px' } as CSSProperties}>
        <Paper corner="sharp">
          <Badge type="numeric" number={15} max={15} />
        </Paper>
        <Paper corner="sm">
          <Badge type="numeric" number={15} max={15} />
        </Paper>
        <Paper corner="md">
          <Badge type="numeric" number={15} max={15} />
        </Paper>
        <Paper corner="lg">
          <Badge type="numeric" number={15} max={15} />
        </Paper>
        <Badge type="numeric" number={15} max={15} />
      </Flex>
      <Flex gap="sm" style={{ '--badge-corner': '10px' } as CSSProperties}>
        <Paper corner="sharp">
          <Badge type="numeric" number={15} max={15} />
        </Paper>
        <Paper corner="sm">
          <Badge type="numeric" number={15} max={15} />
        </Paper>
        <Paper corner="md">
          <Badge type="numeric" number={15} max={15} />
        </Paper>
        <Paper corner="lg">
          <Badge type="numeric" number={15} max={15} />
        </Paper>
        <Badge type="numeric" number={15} max={15} />
      </Flex>

      <Flex gap="sm" style={{ '--badge-corner': '20px' } as CSSProperties}>
        <Paper corner="sharp">
          <Badge type="numeric" number={15} max={15} />
        </Paper>
        <Paper corner="sm">
          <Badge type="numeric" number={15} max={15} />
        </Paper>
        <Paper corner="md">
          <Badge type="numeric" number={15} max={15} />
        </Paper>
        <Paper corner="lg">
          <Badge type="numeric" number={15} max={15} />
        </Paper>
        <Badge type="numeric" number={15} max={15} />
      </Flex>
    </div>
  )
}

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />
export const Playground = Template.bind({})
