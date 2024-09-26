import React, { CSSProperties, useRef, useState } from 'react'
import { Check, Plus, Plane, ChevronDown, Apple, Alien, LetterSpacing, SuperScript } from '@pillar-ui/icons'
import type { Meta, StoryObj } from '@storybook/react'
import { Badge, Button, Flex, Paper } from '@pillar-ui/core'

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    number: { if: { arg: 'type', eq: 'number' } },
    max: { if: { arg: 'type', eq: 'number' } },
  },
}
export default meta

export const BadgeSize = () => {
  return (
    <div className="l_f-md">
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
    <div className="l_f-md">
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
    <div className="l_f-md">
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
    <div className="l_f-md">
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
      <Badge type="numeric" number={15} max={15} color="d" />
      <Badge type="numeric" number={15} max={15} color="s" />
      <Badge type="numeric" number={15} max={15} color="w" />
      <Badge type="numeric" number={15} max={15} color="p" />
      <Badge type="numeric" number={15} max={15} color="se" />
      <Badge type="numeric" number={15} max={15} color="b" />
    </Flex>
  )
}

export const BadgeHighContrastColor = () => {
  return (
    <div className="l_f-sm">
      <Flex gap="sm">
        <Badge type="numeric" number={15} max={15} color="d" />
        <Badge type="numeric" number={15} max={15} color="s" />
        <Badge type="numeric" number={15} max={15} color="w" />
        <Badge type="numeric" number={15} max={15} color="p" />
        <Badge type="numeric" number={15} max={15} color="se" />
        <Badge type="numeric" number={15} max={15} color="b" />
      </Flex>
      <Flex gap="sm">
        <Badge type="numeric" highContrast number={15} max={15} color="d" />
        <Badge type="numeric" highContrast number={15} max={15} color="s" />
        <Badge type="numeric" highContrast number={15} max={15} color="w" />
        <Badge type="numeric" highContrast number={15} max={15} color="p" />
        <Badge type="numeric" highContrast number={15} max={15} color="se" />
        <Badge type="numeric" highContrast number={15} max={15} color="b" />
      </Flex>
    </div>
  )
}

export const BadgeCorner = () => {
  return (
    <div className="l_f-md">
      <Flex gap="sm">
        <Badge type="numeric" corner="sharp" number={15} max={15} color="d" />
        <Badge type="numeric" corner="xs" number={15} max={15} color="s" />
        <Badge type="numeric" corner="sm" number={15} max={15} color="w" />
        <Badge type="numeric" corner="md" number={15} max={15} color="se" />
        <Badge type="numeric" corner="lg" number={15} max={15} color="se" />
        <Badge type="numeric" corner="circle" number={15} max={15} color="p" />
        <Badge type="numeric" corner="full" number={15} max={15} color="b" />
      </Flex>
      <Flex gap="sm">
        <Badge type="icon" icon={<Check />} corner="sharp" color="d" />
        <Badge type="icon" icon={<Plus />} corner="xs" color="s" />
        <Badge type="icon" icon={<Plane />} corner="sm" color="w" />
        <Badge type="icon" icon={<Apple />} corner="md" color="se" />
        <Badge type="icon" icon={<Alien />} corner="lg" color="se" />
        <Badge type="icon" icon={<ChevronDown />} corner="circle" color="p" />
        <Badge type="icon" icon={<LetterSpacing />} corner="full" color="b" />
      </Flex>
      <Flex gap="sm">
        <Badge type="dot" corner="sharp" color="d" />
        <Badge type="dot" corner="xs" color="s" />
        <Badge type="dot" corner="sm" color="w" />
        <Badge type="dot" corner="md" color="se" />
        <Badge type="dot" corner="lg" color="se" />
        <Badge type="dot" corner="circle" color="p" />
        <Badge type="dot" corner="full" color="b" />
      </Flex>
    </div>
  )
}

export const BadgeIconColor = () => {
  return (
    <Flex gap="sm">
      <Badge type="icon" icon={<Check />} color="d" />
      <Badge type="icon" icon={<Check />} color="s" />
      <Badge type="icon" icon={<Check />} color="w" />
      <Badge type="icon" icon={<Check />} color="p" />
      <Badge type="icon" icon={<Check />} color="se" />
      <Badge type="icon" icon={<Check />} color="b" />
    </Flex>
  )
}

export const BadgeDotColor = () => {
  return (
    <Flex gap="sm">
      <Badge type="dot" color="d" />
      <Badge type="dot" color="s" />
      <Badge type="dot" color="w" />
      <Badge type="dot" color="p" />
      <Badge type="dot" color="se" />
      <Badge type="dot" color="b" />
    </Flex>
  )
}

export const BadgeNumericMaxValue = () => {
  return (
    <Flex gap="sm">
      <Badge type="numeric" number={15} max={10} color="d" />
      <Badge type="numeric" number={1500} max={1000} color="s" />
      <Badge type="numeric" number={5} max={0} color="w" />
      <Badge type="numeric" number={0} max={15} color="p" />
      <Badge type="numeric" showZero number={0} max={15} color="d" />
      <Badge type="numeric" number={15} max={1} color="se" />
      <Badge type="numeric" number={15} max={15} color="b" />
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
      <Badge ref={badgeRef} type="numeric" number={15} max={10} color="d" />
      <Button onClick={handleClick}>Number {count}</Button>
    </Flex>
  )
}

export const BadgeCustomStyle = () => {
  return (
    <Flex gap="sm">
      <Badge type="numeric" number={15} max={10} className="u_danger" />
      <Badge type="numeric" number={15} max={10} className="u_brown" />
      <Badge type="numeric" number={15} max={10} style={{ background: 'red' }} />
      <Badge
        type="numeric"
        number={15}
        max={10}
        style={{ background: 'green', color: 'white', border: '4px solid darkred' }}
      />
    </Flex>
  )
}

export const BadgePolymorphic = () => {
  return (
    <Flex gap="sm">
      <Badge as="button" onClick={() => alert('Hello')} type="numeric" number={15} max={10} className="u_danger" />
      <Badge as="a" href="#Hello" type="numeric" number={15} max={10} className="u_brown" />
      <Badge as="span" type="numeric" number={15} max={10} style={{ background: 'red' }} />
      <Badge
        as="kbd"
        type="numeric"
        number={15}
        max={10}
        style={{ background: 'green', color: 'white', border: '4px solid darkred' }}
      />
    </Flex>
  )
}

export function ButtonCornerDefaults() {
  return (
    <div className="l_f-sm">
      <Flex gap="sm" style={{ '--badge-rad': '0' } as CSSProperties}>
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

      <Flex gap="sm" style={{ '--badge-rad': '4px' } as CSSProperties}>
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
      <Flex gap="sm" style={{ '--badge-rad': '8px' } as CSSProperties}>
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

      <Flex gap="sm" style={{ '--badge-rad': '20px' } as CSSProperties}>
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

export const Playground: StoryObj<typeof Badge> = {}
