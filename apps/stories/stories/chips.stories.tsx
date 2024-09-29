import * as React from 'react'
import { Meta } from '@storybook/react'
import { Chips, Flex, Button, Paper } from '@pillar-ui/core'
import { DotsHorizontal, Plus } from '@pillar-ui/icons'

const meta: Meta<typeof Chips> = {
  title: 'Components/Chips',
  component: Chips,
  args: {
    children: 'Hello world',
  },
}

export default meta
export const Playground = {
  children: 'Hello world',
}

export const ChipsColor = () => (
  <Flex gap="3">
    <Chips color="d" variant="solid">
      Hello
    </Chips>
    <Chips color="w" variant="solid">
      Hello
    </Chips>
    <Chips color="su" variant="solid">
      Hello
    </Chips>

    <Chips color="p" variant="solid">
      Hello
    </Chips>
    <Chips color="se" variant="solid">
      Hello
    </Chips>

    <Chips color="b" variant="solid">
      Hello
    </Chips>
    <Chips color="i" variant="solid">
      Hello
    </Chips>
  </Flex>
)

const VARIANTS = ['solid', 'mixed', 'soft', 'outline'] as const

export const ChipsVariants = () => (
  <div className="Sf4">
    {VARIANTS.map((variant) => (
      <Flex key={variant} gap="3">
        <Chips color="d" variant={variant}>
          Hello
        </Chips>
        <Chips color="w" variant={variant}>
          Hello
        </Chips>
        <Chips color="su" variant={variant}>
          Hello
        </Chips>

        <Chips color="p" variant={variant}>
          Hello
        </Chips>
        <Chips color="se" variant={variant}>
          Hello
        </Chips>
        <Chips color="b" variant={variant}>
          Hello
        </Chips>
        <Chips color="i" variant={variant}>
          Hello
        </Chips>
      </Flex>
    ))}
  </div>
)

export const ChipsSize = () => (
  <div>
    <h1>With Props</h1>

    <Flex gap="3" items="center">
      <Chips size="2" variant="outline">
        Hello
      </Chips>
      <Chips size="3" variant="outline">
        Hello
      </Chips>
      <Chips size="4" variant="outline">
        Hello
      </Chips>
      <Chips size="5" variant="outline">
        Hello
      </Chips>
      <Chips size="6" variant="outline">
        Hello
      </Chips>
      <Chips size="7" variant="outline">
        Hello
      </Chips>
      <Chips size="8" variant="outline">
        Hello
      </Chips>
    </Flex>
    <h1>With 2rem</h1>
    <Flex gap="3" style={{ '--chip-size': '2rem' } as React.CSSProperties}>
      <Chips variant="outline">Hello</Chips>
      <Chips variant="outline">Hello</Chips>
      <Chips variant="outline">Hello</Chips>
      <Chips variant="outline">Hello</Chips>
      <Chips variant="outline">Hello</Chips>
      <Chips variant="outline">Hello</Chips>
      <Chips variant="outline">Hello</Chips>
      <Chips variant="outline">Hello</Chips>
    </Flex>
    <h1>With 1em</h1>
    <Flex gap="3" style={{ '--chip-size': '1em' } as React.CSSProperties}>
      <Chips variant="outline">Hello</Chips>
      <Chips variant="outline">Hello</Chips>
      <Chips variant="outline">Hello</Chips>
      <Chips variant="outline">Hello</Chips>
      <Chips variant="outline">Hello</Chips>
      <Chips variant="outline">Hello</Chips>
      <Chips variant="outline">Hello</Chips>
      <Chips variant="outline">Hello</Chips>
    </Flex>
  </div>
)

export const ChipsCorner = () => (
  <div className="Sf4">
    <h1>With Props</h1>
    <Flex gap="3">
      <Chips corner="0" variant="outline">
        Hello
      </Chips>
      <Chips corner="3" variant="outline">
        Hello
      </Chips>
      <Chips corner="2" variant="outline">
        Hello
      </Chips>
      <Chips corner="3" variant="outline">
        Hello
      </Chips>
      <Chips corner="4" variant="outline">
        Hello
      </Chips>
      <Chips corner="5" variant="outline">
        Hello
      </Chips>
      <Chips corner="full" variant="outline">
        Hello
      </Chips>
      <Chips corner="circle" variant="outline">
        Hello
      </Chips>
    </Flex>
    <h1>With 1rem radius</h1>
    <Flex gap="3" style={{ '--chip-rad': '1rem' } as React.CSSProperties}>
      <Chips variant="outline">Hello</Chips>
      <Chips variant="outline">Hello</Chips>
      <Chips variant="outline">Hello</Chips>
      <Chips variant="outline">Hello</Chips>
      <Chips variant="outline">Hello</Chips>
      <Chips variant="outline">Hello</Chips>
      <Chips variant="outline">Hello</Chips>
      <Chips variant="outline">Hello</Chips>
    </Flex>
    <h1>With Sharp</h1>
    <Flex gap="3" style={{ '--chip-rad': '0' } as React.CSSProperties}>
      <Chips variant="outline">Hello</Chips>
      <Chips variant="outline">Hello</Chips>
      <Chips variant="outline">Hello</Chips>
      <Chips variant="outline">Hello</Chips>
      <Chips variant="outline">Hello</Chips>
      <Chips variant="outline">Hello</Chips>
      <Chips variant="outline">Hello</Chips>
      <Chips variant="outline">Hello</Chips>
    </Flex>
  </div>
)

export const ChipsIcons = () => (
  <Flex gap="3" items="center">
    <Chips size="2" variant="outline">
      Hello
      <Plus />
    </Chips>
    <Chips size="3" variant="outline">
      <Plus />
      Hello
    </Chips>
    <Chips size="4" variant="outline">
      Hello
      <Plus />
    </Chips>
    <Chips size="5" variant="outline">
      <Plus />
      Hello
    </Chips>
    <Chips size="6" variant="outline">
      Hello
      <Plus />
    </Chips>
    <Chips size="7" variant="outline">
      <Plus />
      Hello
    </Chips>
    <Chips size="8" variant="outline">
      Hello
      <DotsHorizontal />
    </Chips>
  </Flex>
)

export const ChipsStrange = () => (
  <Flex gap="3" items="center">
    <Chips variant="outline">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse architecto recusandae quibusdam molestias velit
      corrupti, ullam blanditiis earum, pariatur, sunt delectus reiciendis! Rerum nesciunt optio perferendis unde
      necessitatibus, dolore nobis?
    </Chips>
    <Chips variant="outline">H</Chips>
  </Flex>
)

export const ChipsRefForwarded = () => {
  const chipsRef = React.useRef<HTMLDivElement>(null)
  const [count, setCount] = React.useState(1)

  const handleClick = () => {
    setCount((count) => count + 1)
    if (chipsRef.current?.style) {
      const { style } = chipsRef.current
      if (count % 2 === 0) {
        style.backgroundColor = 'var(--P8)'
        style.borderColor = 'var(--P12)'
        style.borderColor = 'var(--P11)'
        return
      }
      style.background = 'var(--Se8)'
      style.color = 'var(--Se12)'
      style.borderColor = 'var(--Se11)'
      return
    }
  }

  return (
    <Flex gap="4">
      <Chips ref={chipsRef} variant="outline">
        Hello
      </Chips>
      <Button onClick={handleClick}>Number {count}</Button>
    </Flex>
  )
}

export function ChipsCornerDefaults() {
  return (
    <div className="Sf3">
      <Flex gap="4">
        <Paper corner="0">
          <Chips>Hello</Chips>
        </Paper>
        <Paper corner="2">
          <Chips>Hello</Chips>
        </Paper>
        <Paper corner="3">
          <Chips>Hello</Chips>
        </Paper>
        <Paper corner="4">
          <Chips>Hello</Chips>
        </Paper>
        <Chips>Hello</Chips>
      </Flex>

      <Flex gap="4" style={{ '--chip-rad': '1px' } as React.CSSProperties}>
        <Paper corner="0">
          <Chips>Hello</Chips>
        </Paper>
        <Paper corner="2">
          <Chips>Hello</Chips>
        </Paper>
        <Paper corner="3">
          <Chips>Hello</Chips>
        </Paper>
        <Paper corner="4">
          <Chips>Hello</Chips>
        </Paper>
        <Chips>Hello</Chips>
      </Flex>
      <Flex gap="4" style={{ '--chip-rad': '8px' } as React.CSSProperties}>
        <Paper corner="0">
          <Chips>Hello</Chips>
        </Paper>
        <Paper corner="2">
          <Chips>Hello</Chips>
        </Paper>
        <Paper corner="3">
          <Chips>Hello</Chips>
        </Paper>
        <Paper corner="4">
          <Chips>Hello</Chips>
        </Paper>
        <Chips>Hello</Chips>
      </Flex>

      <Flex gap="4" style={{ '--chip-rad': '20px' } as React.CSSProperties}>
        <Chips>Hello</Chips>
        <Chips>Hello</Chips>
        <Chips>Hello</Chips>
        <Chips>Hello</Chips>
        <Chips>Hello</Chips>
      </Flex>
    </div>
  )
}
