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
export const Playground = {}

export const ChipsColor = () => (
  <Flex gap="xs">
    <Chips color="dan" variant="solid">
      Hello
    </Chips>
    <Chips color="war" variant="solid">
      Hello
    </Chips>
    <Chips color="suc" variant="solid">
      Hello
    </Chips>

    <Chips color="pri" variant="solid">
      Hello
    </Chips>
    <Chips color="sec" variant="solid">
      Hello
    </Chips>

    <Chips color="bg" variant="solid">
      Hello
    </Chips>
  </Flex>
)

const VARIANTS = ['solid', 'mixed', 'soft', 'outline'] as const

export const ChipsVariants = () => (
  <div className="l_f-md">
    {VARIANTS.map((variant) => (
      <Flex key={variant} gap="xs">
        <Chips color="dan" variant={variant}>
          Hello
        </Chips>
        <Chips color="war" variant={variant}>
          Hello
        </Chips>
        <Chips color="suc" variant={variant}>
          Hello
        </Chips>

        <Chips color="pri" variant={variant}>
          Hello
        </Chips>
        <Chips color="sec" variant={variant}>
          Hello
        </Chips>
        <Chips color="bg" variant={variant}>
          Hello
        </Chips>
      </Flex>
    ))}
  </div>
)

export const ChipsSize = () => (
  <div>
    <h1>With Props</h1>

    <Flex gap="xs" items="center">
      <Chips size="2xs" variant="outline">
        Hello
      </Chips>
      <Chips size="xs" variant="outline">
        Hello
      </Chips>
      <Chips size="sm" variant="outline">
        Hello
      </Chips>
      <Chips size="md" variant="outline">
        Hello
      </Chips>
      <Chips size="lg" variant="outline">
        Hello
      </Chips>
      <Chips size="xl" variant="outline">
        Hello
      </Chips>
      <Chips size="2xl" variant="outline">
        Hello
      </Chips>
    </Flex>
    <h1>With 2rem</h1>
    <Flex gap="xs" style={{ '--chip-size': '2rem' } as React.CSSProperties}>
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
    <Flex gap="xs" style={{ '--chip-size': '1em' } as React.CSSProperties}>
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
  <div className="l_fow__sm">
    <h1>With Props</h1>
    <Flex gap="xs">
      <Chips corner="sharp" variant="outline">
        Hello
      </Chips>
      <Chips corner="xs" variant="outline">
        Hello
      </Chips>
      <Chips corner="sm" variant="outline">
        Hello
      </Chips>
      <Chips corner="md" variant="outline">
        Hello
      </Chips>
      <Chips corner="lg" variant="outline">
        Hello
      </Chips>
      <Chips corner="xl" variant="outline">
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
    <Flex gap="xs" style={{ '--chip-rad': '1rem' } as React.CSSProperties}>
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
    <Flex gap="xs" style={{ '--chip-rad': '0' } as React.CSSProperties}>
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
  <Flex gap="xs" items="center">
    <Chips size="2xs" variant="outline">
      Hello
      <Plus />
    </Chips>
    <Chips size="xs" variant="outline">
      <Plus />
      Hello
    </Chips>
    <Chips size="sm" variant="outline">
      Hello
      <Plus />
    </Chips>
    <Chips size="md" variant="outline">
      <Plus />
      Hello
    </Chips>
    <Chips size="lg" variant="outline">
      Hello
      <Plus />
    </Chips>
    <Chips size="xl" variant="outline">
      <Plus />
      Hello
    </Chips>
    <Chips size="2xl" variant="outline">
      Hello
      <DotsHorizontal />
    </Chips>
  </Flex>
)

export const ChipsStrange = () => (
  <Flex gap="xs" items="center">
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
        style.backgroundColor = 'var(--pri-8)'
        style.borderColor = 'var(--pri-12)'
        style.borderColor = 'var(--pri-11)'
        return
      }
      style.background = 'var(--sec-8)'
      style.color = 'var(--sec-12)'
      style.borderColor = 'var(--sec-11)'
      return
    }
  }

  return (
    <Flex gap="sm">
      <Chips ref={chipsRef} variant="outline">
        Hello
      </Chips>
      <Button onClick={handleClick}>Number {count}</Button>
    </Flex>
  )
}

export function ChipsCornerDefaults() {
  return (
    <div className="l_f-sm">
      <Flex gap="sm">
        <Paper corner="sharp">
          <Chips>Hello</Chips>
        </Paper>
        <Paper corner="sm">
          <Chips>Hello</Chips>
        </Paper>
        <Paper corner="md">
          <Chips>Hello</Chips>
        </Paper>
        <Paper corner="lg">
          <Chips>Hello</Chips>
        </Paper>
        <Chips>Hello</Chips>
      </Flex>

      <Flex gap="sm" style={{ '--chip-rad': '1px' } as React.CSSProperties}>
        <Paper corner="sharp">
          <Chips>Hello</Chips>
        </Paper>
        <Paper corner="sm">
          <Chips>Hello</Chips>
        </Paper>
        <Paper corner="md">
          <Chips>Hello</Chips>
        </Paper>
        <Paper corner="lg">
          <Chips>Hello</Chips>
        </Paper>
        <Chips>Hello</Chips>
      </Flex>
      <Flex gap="sm" style={{ '--chip-rad': '8px' } as React.CSSProperties}>
        <Paper corner="sharp">
          <Chips>Hello</Chips>
        </Paper>
        <Paper corner="sm">
          <Chips>Hello</Chips>
        </Paper>
        <Paper corner="md">
          <Chips>Hello</Chips>
        </Paper>
        <Paper corner="lg">
          <Chips>Hello</Chips>
        </Paper>
        <Chips>Hello</Chips>
      </Flex>

      <Flex gap="sm" style={{ '--chip-rad': '20px' } as React.CSSProperties}>
        <Paper corner="sharp">
          <Chips>Hello</Chips>
        </Paper>
        <Paper corner="sm">
          <Chips>Hello</Chips>
        </Paper>
        <Paper corner="md">
          <Chips>Hello</Chips>
        </Paper>
        <Paper corner="lg">
          <Chips>Hello</Chips>
        </Paper>
        <Chips>Hello</Chips>
      </Flex>
    </div>
  )
}
