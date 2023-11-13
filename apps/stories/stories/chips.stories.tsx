import * as React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Chips, Flex, Button, Paper } from '@pillar-ui/core'
import { DotsHorizontal, Plus } from '@pillar-ui/icons'

export default {
  title: 'Components/Chips',
  component: Chips,
  args: {
    children: 'Hello world',
  },
} as ComponentMeta<typeof Chips>

const Template: ComponentStory<typeof Chips> = (args) => <Chips {...args} />
export const Playground = Template.bind({})

export const ChipsColor = () => (
  <Flex gap="xs">
    <Chips color="danger" variant="solid">
      Hello
    </Chips>
    <Chips color="warning" variant="solid">
      Hello
    </Chips>
    <Chips color="success" variant="solid">
      Hello
    </Chips>

    <Chips color="primary" variant="solid">
      Hello
    </Chips>
    <Chips color="secondary" variant="solid">
      Hello
    </Chips>

    <Chips color="surface" variant="solid">
      Hello
    </Chips>
  </Flex>
)

export const ChipsVariants = () => (
  <div className="l_flow__md">
    <Flex gap="xs">
      <Chips color="danger" variant="outline">
        Hello
      </Chips>
      <Chips color="warning" variant="outline">
        Hello
      </Chips>
      <Chips color="success" variant="outline">
        Hello
      </Chips>

      <Chips color="primary" variant="outline">
        Hello
      </Chips>
      <Chips color="secondary" variant="outline">
        Hello
      </Chips>
      <Chips color="surface" variant="outline">
        Hello
      </Chips>
    </Flex>
    <Flex gap="xs">
      <Chips color="danger" variant="soft">
        Hello
      </Chips>
      <Chips color="warning" variant="soft">
        Hello
      </Chips>
      <Chips color="success" variant="soft">
        Hello
      </Chips>
      <Chips color="primary" variant="soft">
        Hello
      </Chips>
      <Chips color="secondary" variant="soft">
        Hello
      </Chips>
      <Chips color="surface" variant="soft">
        Hello
      </Chips>
    </Flex>
    <Flex gap="xs">
      <Chips color="danger" variant="solid">
        Hello
      </Chips>
      <Chips color="warning" variant="solid">
        Hello
      </Chips>
      <Chips color="success" variant="solid">
        Hello
      </Chips>
      <Chips color="primary" variant="solid">
        Hello
      </Chips>
      <Chips color="secondary" variant="solid">
        Hello
      </Chips>
      <Chips color="surface" variant="solid">
        Hello
      </Chips>
    </Flex>
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
    <Flex gap="xs" style={{ '--chip-corner': '1rem' } as React.CSSProperties}>
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
    <Flex gap="xs" style={{ '--chip-corner': '0' } as React.CSSProperties}>
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
        style.backgroundColor = 'var(--primary-8)'
        style.borderColor = 'var(--primary-12)'
        style.borderColor = 'var(--primary-11)'
        return
      }
      style.background = 'var(--secondary-8)'
      style.color = 'var(--secondary-12)'
      style.borderColor = 'var(--secondary-11)'
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
    <div className="l_flow__sm">
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

      <Flex gap="sm" style={{ '--chip-corner': '1px' } as React.CSSProperties}>
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
      <Flex gap="sm" style={{ '--chip-corner': '8px' } as React.CSSProperties}>
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

      <Flex gap="sm" style={{ '--chip-corner': '20px' } as React.CSSProperties}>
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

export const ChipsHighContrastSolid = () => (
  <div className="l_flow__md">
    <Flex gap="xs">
      <Chips color="danger" variant="solid">
        Hello
      </Chips>
      <Chips color="warning" variant="solid">
        Hello
      </Chips>
      <Chips color="success" variant="solid">
        Hello
      </Chips>

      <Chips color="primary" variant="solid">
        Hello
      </Chips>
      <Chips color="secondary" variant="solid">
        Hello
      </Chips>
      <Chips color="surface" variant="solid">
        Hello
      </Chips>
    </Flex>
    <Flex gap="xs">
      <Chips color="danger" variant="solid" highContrast>
        Hello
      </Chips>
      <Chips color="warning" variant="solid" highContrast>
        Hello
      </Chips>
      <Chips color="success" variant="solid" highContrast>
        Hello
      </Chips>

      <Chips color="primary" variant="solid" highContrast>
        Hello
      </Chips>
      <Chips color="secondary" variant="solid" highContrast>
        Hello
      </Chips>
      <Chips color="surface" variant="solid" highContrast>
        Hello
      </Chips>
    </Flex>
  </div>
)

export const ChipsHighContrastOutline = () => (
  <div className="l_flow__md">
    <Flex gap="xs">
      <Chips color="danger" variant="outline">
        Hello
      </Chips>
      <Chips color="warning" variant="outline">
        Hello
      </Chips>
      <Chips color="success" variant="outline">
        Hello
      </Chips>

      <Chips color="primary" variant="outline">
        Hello
      </Chips>
      <Chips color="secondary" variant="outline">
        Hello
      </Chips>
      <Chips color="surface" variant="outline">
        Hello
      </Chips>
    </Flex>
    <Flex gap="xs">
      <Chips color="danger" variant="outline" highContrast>
        Hello
      </Chips>
      <Chips color="warning" variant="outline" highContrast>
        Hello
      </Chips>
      <Chips color="success" variant="outline" highContrast>
        Hello
      </Chips>

      <Chips color="primary" variant="outline" highContrast>
        Hello
      </Chips>
      <Chips color="secondary" variant="outline" highContrast>
        Hello
      </Chips>
      <Chips color="surface" variant="outline" highContrast>
        Hello
      </Chips>
    </Flex>
  </div>
)

export const ChipsHighContrastSoft = () => (
  <div className="l_flow__md">
    <Flex gap="xs">
      <Chips color="danger" variant="soft">
        Hello
      </Chips>
      <Chips color="warning" variant="soft">
        Hello
      </Chips>
      <Chips color="success" variant="soft">
        Hello
      </Chips>

      <Chips color="primary" variant="soft">
        Hello
      </Chips>
      <Chips color="secondary" variant="soft">
        Hello
      </Chips>
      <Chips color="surface" variant="soft">
        Hello
      </Chips>
    </Flex>
    <Flex gap="xs">
      <Chips color="danger" variant="soft" highContrast>
        Hello
      </Chips>
      <Chips color="warning" variant="soft" highContrast>
        Hello
      </Chips>
      <Chips color="success" variant="soft" highContrast>
        Hello
      </Chips>

      <Chips color="primary" variant="soft" highContrast>
        Hello
      </Chips>
      <Chips color="secondary" variant="soft" highContrast>
        Hello
      </Chips>
      <Chips color="surface" variant="soft" highContrast>
        Hello
      </Chips>
    </Flex>
  </div>
)
