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
    <div className="Sf-4">
      <Flex items="center" gap="4">
        <Badge size="1" type="numeric" number={15} max={15} />
        <Badge size="2" type="numeric" number={15} max={15} />
        <Badge size="3" type="numeric" number={15} max={15} />
        <Badge size="4" type="numeric" number={15} max={15} />
        <Badge size="5" type="numeric" number={15} max={15} />
        <Badge size="6" type="numeric" number={15} max={15} />
        <Badge size="8" type="numeric" number={15} max={15} />
        <Badge size="9" type="numeric" number={15} max={15} />
      </Flex>
      <Flex items="center" gap="4">
        <Badge size="1" type="icon" icon={<Check />} />
        <Badge size="2" type="icon" icon={<Plus />} />
        <Badge size="3" type="icon" icon={<Plane />} />
        <Badge size="4" type="icon" icon={<Apple />} />
        <Badge size="5" type="icon" icon={<Alien />} />
        <Badge size="6" type="icon" icon={<ChevronDown />} />
        <Badge size="8" type="icon" icon={<LetterSpacing />} />
        <Badge size="9" type="icon" icon={<SuperScript />} />
      </Flex>
      <Flex items="center" gap="4">
        <Badge size="1" type="dot" />
        <Badge size="2" type="dot" />
        <Badge size="3" type="dot" />
        <Badge size="4" type="dot" />
        <Badge size="5" type="dot" />
        <Badge size="6" type="dot" />
        <Badge size="8" type="dot" />
        <Badge size="9" type="dot" />
      </Flex>
    </div>
  )
}

const VARIANTS = ['solid', 'mixed'] as const

export const BadgeVariantNumeric = () => {
  return (
    <div className="Sf-4">
      {VARIANTS.map((variant) => (
        <Flex items="center" gap="4">
          <Badge size="1" type="numeric" variant={variant} number={15} max={15} />
          <Badge size="2" type="numeric" variant={variant} number={15} max={15} />
          <Badge size="3" type="numeric" variant={variant} number={15} max={15} />
          <Badge size="4" type="numeric" variant={variant} number={15} max={15} />
          <Badge size="5" type="numeric" variant={variant} number={15} max={15} />
          <Badge size="6" type="numeric" variant={variant} number={15} max={15} />
          <Badge size="8" type="numeric" variant={variant} number={15} max={15} />
          <Badge size="9" type="numeric" variant={variant} number={15} max={15} />
        </Flex>
      ))}
    </div>
  )
}

export const BadgeVariantDot = () => {
  return (
    <div className="Sf-4">
      {VARIANTS.map((variant) => (
        <Flex items="center" gap="4">
          <Badge size="1" type="dot" variant={variant} />
          <Badge size="2" type="dot" variant={variant} />
          <Badge size="3" type="dot" variant={variant} />
          <Badge size="4" type="dot" variant={variant} />
          <Badge size="5" type="dot" variant={variant} />
          <Badge size="6" type="dot" variant={variant} />
          <Badge size="8" type="dot" variant={variant} />
          <Badge size="9" type="dot" variant={variant} />
        </Flex>
      ))}
    </div>
  )
}

export const BadgeVariantIcon = () => {
  return (
    <div className="Sf-4">
      {VARIANTS.map((variant) => (
        <Flex items="center" gap="4">
          <Badge size="1" type="icon" variant={variant} icon={<Apple />} />
          <Badge size="2" type="icon" variant={variant} icon={<Apple />} />
          <Badge size="3" type="icon" variant={variant} icon={<Apple />} />
          <Badge size="4" type="icon" variant={variant} icon={<Apple />} />
          <Badge size="5" type="icon" variant={variant} icon={<Apple />} />
          <Badge size="6" type="icon" variant={variant} icon={<Apple />} />
          <Badge size="8" type="icon" variant={variant} icon={<Apple />} />
          <Badge size="9" type="icon" variant={variant} icon={<Apple />} />
        </Flex>
      ))}
    </div>
  )
}

export const BadgeNumericColor = () => {
  return (
    <Flex gap="4">
      <Badge type="numeric" number={15} max={15} color="d" />
      <Badge type="numeric" number={15} max={15} color="su" />
      <Badge type="numeric" number={15} max={15} color="w" />
      <Badge type="numeric" number={15} max={15} color="p" />
      <Badge type="numeric" number={15} max={15} color="se" />
      <Badge type="numeric" number={15} max={15} color="b" />
      <Badge type="numeric" number={15} max={15} color="i" />
    </Flex>
  )
}

export const BadgeCorner = () => {
  return (
    <div className="Sf-4">
      <Flex gap="4">
        <Badge type="numeric" corner="0" number={15} max={15} color="d" />
        <Badge type="numeric" corner="1" number={15} max={15} color="su" />
        <Badge type="numeric" corner="2" number={15} max={15} color="w" />
        <Badge type="numeric" corner="3" number={15} max={15} color="se" />
        <Badge type="numeric" corner="4" number={15} max={15} color="se" />
        <Badge type="numeric" corner="circle" number={15} max={15} color="p" />
        <Badge type="numeric" corner="full" number={15} max={15} color="b" />
      </Flex>
      <Flex gap="4">
        <Badge type="icon" icon={<Check />} corner="0" color="d" />
        <Badge type="icon" icon={<Plus />} corner="1" color="su" />
        <Badge type="icon" icon={<Plane />} corner="2" color="w" />
        <Badge type="icon" icon={<Apple />} corner="3" color="se" />
        <Badge type="icon" icon={<Alien />} corner="4" color="se" />
        <Badge type="icon" icon={<ChevronDown />} corner="circle" color="p" />
        <Badge type="icon" icon={<LetterSpacing />} corner="full" color="b" />
      </Flex>
      <Flex gap="4">
        <Badge type="dot" corner="0" color="d" />
        <Badge type="dot" corner="1" color="su" />
        <Badge type="dot" corner="2" color="w" />
        <Badge type="dot" corner="3" color="se" />
        <Badge type="dot" corner="4" color="se" />
        <Badge type="dot" corner="circle" color="p" />
        <Badge type="dot" corner="full" color="b" />
      </Flex>
    </div>
  )
}

export const BadgeIconColor = () => {
  return (
    <Flex gap="4">
      <Badge type="icon" icon={<Check />} color="d" />
      <Badge type="icon" icon={<Check />} color="su" />
      <Badge type="icon" icon={<Check />} color="w" />
      <Badge type="icon" icon={<Check />} color="p" />
      <Badge type="icon" icon={<Check />} color="se" />
      <Badge type="icon" icon={<Check />} color="b" />
    </Flex>
  )
}

export const BadgeDotColor = () => {
  return (
    <Flex gap="4">
      <Badge type="dot" color="d" />
      <Badge type="dot" color="su" />
      <Badge type="dot" color="w" />
      <Badge type="dot" color="p" />
      <Badge type="dot" color="se" />
      <Badge type="dot" color="b" />
    </Flex>
  )
}

export const BadgeNumericMaxValue = () => {
  return (
    <Flex gap="4">
      <Badge type="numeric" number={15} max={10} color="d" />
      <Badge type="numeric" number={1500} max={1000} color="su" />
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
    <Flex gap="4">
      <Badge ref={badgeRef} type="numeric" number={15} max={10} color="d" />
      <Button onClick={handleClick}>Number {count}</Button>
    </Flex>
  )
}

export const BadgeCustomStyle = () => {
  return (
    <Flex gap="4">
      <Badge type="numeric" number={15} max={10} className="Cd" />
      <Badge type="numeric" number={15} max={10} className="Ci" />
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
    <Flex gap="4">
      <Badge as="button" onClick={() => alert('Hello')} type="numeric" number={15} max={10} className="Cd" />
      <Badge as="a" href="#Hello" type="numeric" number={15} max={10} className="Ci" />
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
    <div className="Sf-3">
      <Flex gap="4" style={{ '--badge-rad': '0' } as CSSProperties}>
        <Paper corner="0">
          <Badge type="numeric" number={15} max={15} />
        </Paper>
        <Paper corner="2">
          <Badge type="numeric" number={15} max={15} />
        </Paper>
        <Paper corner="3">
          <Badge type="numeric" number={15} max={15} />
        </Paper>
        <Paper corner="4">
          <Badge type="numeric" number={15} max={15} />
        </Paper>
        <Badge type="numeric" number={15} max={15} />
      </Flex>

      <Flex gap="4" style={{ '--badge-rad': '4px' } as CSSProperties}>
        <Paper corner="0">
          <Badge type="numeric" number={15} max={15} />
        </Paper>
        <Paper corner="2">
          <Badge type="numeric" number={15} max={15} />
        </Paper>
        <Paper corner="3">
          <Badge type="numeric" number={15} max={15} />
        </Paper>
        <Paper corner="4">
          <Badge type="numeric" number={15} max={15} />
        </Paper>
        <Badge type="numeric" number={15} max={15} />
      </Flex>
      <Flex gap="4" style={{ '--badge-rad': '8px' } as CSSProperties}>
        <Paper corner="0">
          <Badge type="numeric" number={15} max={15} />
        </Paper>
        <Paper corner="2">
          <Badge type="numeric" number={15} max={15} />
        </Paper>
        <Paper corner="3">
          <Badge type="numeric" number={15} max={15} />
        </Paper>
        <Paper corner="4">
          <Badge type="numeric" number={15} max={15} />
        </Paper>
        <Badge type="numeric" number={15} max={15} />
      </Flex>

      <Flex gap="4" style={{ '--badge-rad': '20px' } as CSSProperties}>
        <Paper corner="0">
          <Badge type="numeric" number={15} max={15} />
        </Paper>
        <Paper corner="2">
          <Badge type="numeric" number={15} max={15} />
        </Paper>
        <Paper corner="3">
          <Badge type="numeric" number={15} max={15} />
        </Paper>
        <Paper corner="4">
          <Badge type="numeric" number={15} max={15} />
        </Paper>
        <Badge type="numeric" number={15} max={15} />
      </Flex>
    </div>
  )
}

export const BadgeIssues = () => {
  return (
    <Flex gap="4">
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta animi assumenda debitis sed totam porro odit,
        nihil, possimus, recusandae ea minus voluptatum molestiae nesciunt iusto quod cupiditate temporibus eligendi
        magnam.possimus, recusandae ea minus voluptatum molestiae nesciunt iusto quod cupiditate temporibus eligendi
        magnam.possimus, recusandae ea minus voluptatum molestiae nesciunt iusto quod cupiditate temporibus eligendi
        magnam.
      </p>
      <Badge type="numeric" number={15} max={10} color="d" />
    </Flex>
  )
}

export const Playground: StoryObj<typeof Badge> = {}
