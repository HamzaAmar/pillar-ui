import React, { CSSProperties } from 'react'
import { Button, Flex, Paper } from '@pillar-ui/core'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Eye, Github, Plus, ThumbDown, ThumbUp } from '@pillar-ui/icons'

export default {
  title: 'Components/Button',
} as ComponentMeta<typeof Button>

const Hello: ComponentStory<typeof Button> = ({ ...args }) => <Button {...args} />

export const Playground = Hello.bind({})

export function ButtonsColors() {
  return (
    <Flex gap="sm">
      <Button color="success">Green</Button>
      <Button color="warning">Orange</Button>
      <Button color="danger">Red</Button>
      <Button color="secondary">Secondary</Button>
      <Button color="surface">Surface</Button>
      <Button color="primary">Primary</Button>
    </Flex>
  )
}

export function ButtonsTransforms() {
  return (
    <div>
      <h1>with Props</h1>
      <Flex gap="sm">
        <Button transform="uppercase" color="success">
          Green
        </Button>
        <Button transform="capitalize" color="warning">
          Orange
        </Button>
        <Button transform="lowercase" color="danger">
          Red
        </Button>
      </Flex>
      <h1>with Global Capitalize</h1>
      <Flex gap="sm" style={{ '--button-transform': 'capitalize' } as CSSProperties}>
        <Button color="success">Green</Button>
        <Button color="warning">Orange</Button>
        <Button color="danger">Red</Button>
      </Flex>
      <h1>with Global lowercase</h1>
      <Flex gap="sm" style={{ '--button-transform': 'lowercase' } as CSSProperties}>
        <Button color="success">Green</Button>
        <Button color="warning">Orange</Button>
        <Button color="danger">Red</Button>
      </Flex>
      <h1>with Global uppercase</h1>
      <Flex gap="sm" style={{ '--button-transform': 'uppercase' } as CSSProperties}>
        <Button color="success">Green</Button>
        <Button color="warning">Orange</Button>
        <Button color="danger">Red</Button>
      </Flex>
      <h1>Default</h1>
      <Flex gap="sm">
        <Button color="success">Green</Button>
        <Button color="warning">Orange</Button>
        <Button color="danger">Red</Button>
      </Flex>
    </div>
  )
}

export function ButtonsVariants() {
  return (
    <div className="l_flow__md">
      <Flex gap="sm">
        <Button color="success">Green</Button>
        <Button color="warning">Orange</Button>
        <Button color="danger">Red</Button>
        <Button color="secondary">Secondary</Button>
        <Button color="surface">Surface</Button>
        <Button color="primary">Primary</Button>
      </Flex>
      <Flex gap="sm">
        <Button variant="outline" color="success">
          Green
        </Button>
        <Button variant="outline" color="warning">
          Orange
        </Button>
        <Button variant="outline" color="danger">
          Red
        </Button>
        <Button variant="outline" color="secondary">
          Secondary
        </Button>
        <Button variant="outline" color="surface">
          Surface
        </Button>
        <Button variant="outline" color="primary">
          Primary
        </Button>
      </Flex>
      <Flex gap="sm">
        <Button variant="soft" color="success">
          Green
        </Button>
        <Button variant="soft" color="warning">
          Orange
        </Button>
        <Button variant="soft" color="danger">
          Red
        </Button>
        <Button variant="soft" color="secondary">
          Secondary
        </Button>
        <Button variant="soft" color="surface">
          Surface
        </Button>
        <Button variant="soft" color="primary">
          Primary
        </Button>
      </Flex>
      <Flex gap="sm">
        <Button variant="link" color="success">
          Green
        </Button>
        <Button variant="link" color="warning">
          Orange
        </Button>
        <Button variant="link" color="danger">
          Red
        </Button>
        <Button variant="link" color="secondary">
          Secondary
        </Button>
        <Button variant="link" color="surface">
          Surface
        </Button>
        <Button variant="link" color="primary">
          Primary
        </Button>
      </Flex>
      <Flex gap="sm">
        <Button variant="text" color="success">
          Green
        </Button>
        <Button variant="text" color="warning">
          Orange
        </Button>
        <Button variant="text" color="danger">
          Red
        </Button>
        <Button variant="text" color="secondary">
          Secondary
        </Button>
        <Button variant="text" color="surface">
          Surface
        </Button>
        <Button variant="text" color="primary">
          Primary
        </Button>
      </Flex>
    </div>
  )
}

export function ButtonsCorners() {
  return (
    <div className="l_flow__md">
      <h1>Regular</h1>
      <Flex gap="sm">
        <Button corner="sharp" color="success">
          Green
        </Button>
        <Button corner="xs" color="warning">
          Orange
        </Button>
        <Button corner="sm" color="danger">
          Red
        </Button>
        <Button corner="md" color="secondary">
          Secondary
        </Button>
        <Button corner="lg" color="surface">
          Surface
        </Button>
        <Button corner="xl" color="primary">
          Primary
        </Button>
      </Flex>
      <h1>Specify the button Corner circle</h1>

      <Flex gap="sm" style={{ '--button-corner': '1000px' } as CSSProperties}>
        <Button color="success">Green</Button>
        <Button color="warning">Orange</Button>
        <Button color="danger">Red</Button>
        <Button color="secondary">Secondary</Button>
        <Button color="surface">Surface</Button>
        <Button color="primary">Primary</Button>
      </Flex>

      <h1>Specify the button Corner Medium</h1>

      <Flex gap="sm" style={{ '--button-corner': 'var(--corner-md)' } as CSSProperties}>
        <Button color="success">Green</Button>
        <Button color="warning">Orange</Button>
        <Button color="danger">Red</Button>
        <Button color="secondary">Secondary</Button>
        <Button color="surface">Surface</Button>
        <Button color="primary">Primary</Button>
      </Flex>
    </div>
  )
}

export function ButtonSizes() {
  return (
    <Flex gap="sm" items="center" wrap>
      <Button size="3xs" color="success">
        Green
      </Button>
      <Button size="2xs" color="warning">
        Orange
      </Button>
      <Button size="xs" color="danger">
        Red
      </Button>
      <Button size="sm" color="secondary">
        Secondary
      </Button>
      <Button size="md" color="surface">
        Surface
      </Button>
      <Button size="lg" color="primary">
        Primary
      </Button>
    </Flex>
  )
}

export function ButtonsFluid() {
  return (
    <div className="l_flow__md">
      <Button fluid icon={<ThumbUp />} iconPosition="end" size="3xs" color="success">
        Green
      </Button>
      <Button fluid icon={<ThumbDown />} size="2xs" color="warning">
        Orange
      </Button>
      <Button fluid icon={<Plus />} iconPosition="end" size="xs" color="danger">
        Red
      </Button>
      <Button fluid icon={<Github />} size="sm" color="secondary">
        Secondary
      </Button>
      <Button fluid icon={<Eye />} iconPosition="end" size="md" color="surface">
        Surface
      </Button>
      <Button fluid icon={<ThumbUp />} size="lg" color="primary">
        Primary
      </Button>
      <Button fluid icon={<ThumbUp />} iconPosition="end" size="xl" color="success">
        Purple
      </Button>
      <Button fluid icon={<ThumbUp />} size="2xl" color="secondary">
        Brown
      </Button>
      <Button fluid icon={<ThumbUp />} iconPosition="end" size="3xl" color="secondary">
        Brown
      </Button>
    </div>
  )
}

export function ButtonsState() {
  return (
    <Flex items="center" gap="xs">
      <Button state="idle" color="success">
        Idle
      </Button>
      <Button state="loading" color="success">
        Loading
      </Button>
      <Button disabled color="success">
        Disabled
      </Button>
    </Flex>
  )
}

export function ButtonLoadingState() {
  return (
    <Flex gap="sm" items="center" wrap>
      <Button state="loading" size="3xs" color="success">
        Green
      </Button>
      <Button state="loading" size="2xs" color="warning">
        Orange
      </Button>
      <Button state="loading" size="xs" color="danger">
        Red
      </Button>
      <Button state="loading" size="sm" color="secondary">
        Secondary
      </Button>
      <Button state="loading" size="md" color="surface">
        Surface
      </Button>
      <Button state="loading" size="lg" color="primary">
        Primary
      </Button>
      <Button state="loading" size="xl" color="success">
        Purple
      </Button>
      <Button state="loading" size="2xl" color="secondary">
        Brown
      </Button>
      <Button state="loading" size="3xl" color="secondary">
        Brown
      </Button>
    </Flex>
  )
}

export function ButtonsCustomStyle() {
  return (
    <Flex items="center" gap="xs">
      <Button style={{ background: 'orange' }} state="idle" color="success">
        Hello world
      </Button>
      <Button className="u_secondary" color="success">
        Hello world
      </Button>
    </Flex>
  )
}

export function ButtonsLongText() {
  return (
    <Flex items="center" gap="xs" wrap>
      <Button style={{ background: 'orange' }} state="idle" color="success">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam asperiores a vitae expedita nostrum
        perspiciatis est excepturi, eligendi facere vel quis, et in dolores eos voluptates libero, adipisci
        necessitatibus voluptatum?
      </Button>
      <Button className="u_secondary" color="success">
        Hello world
      </Button>
    </Flex>
  )
}

export function ButtonCornerDefaults() {
  return (
    <div className="l_flow__sm">
      <Flex gap="sm">
        <Paper corner="sharp">
          <Button color="success">Green</Button>
        </Paper>
        <Paper corner="sm">
          <Button color="success">Green</Button>
        </Paper>
        <Paper corner="md">
          <Button color="success">Green</Button>
        </Paper>
        <Paper corner="lg">
          <Button color="success">Green</Button>
        </Paper>
        <Button color="success">Green</Button>
      </Flex>

      <Flex gap="sm" style={{ '--button-corner': '5px' } as CSSProperties}>
        <Paper corner="sharp">
          <Button color="success">Green</Button>
        </Paper>
        <Paper corner="sm">
          <Button color="success">Green</Button>
        </Paper>
        <Paper corner="md">
          <Button color="success">Green</Button>
        </Paper>
        <Paper corner="lg">
          <Button color="success">Green</Button>
        </Paper>
        <Button color="success">Green</Button>
      </Flex>
      <Flex gap="sm" style={{ '--button-corner': '10px' } as CSSProperties}>
        <Paper corner="sharp">
          <Button color="success">Green</Button>
        </Paper>
        <Paper corner="sm">
          <Button color="success">Green</Button>
        </Paper>
        <Paper corner="md">
          <Button color="success">Green</Button>
        </Paper>
        <Paper corner="lg">
          <Button color="success">Green</Button>
        </Paper>
        <Button color="success">Green</Button>
      </Flex>

      <Flex gap="sm" style={{ '--button-corner': '20px' } as CSSProperties}>
        <Paper corner="sharp">
          <Button color="success">Green</Button>
        </Paper>
        <Paper corner="sm">
          <Button color="success">Green</Button>
        </Paper>
        <Paper corner="md">
          <Button color="success">Green</Button>
        </Paper>
        <Paper corner="lg">
          <Button color="success">Green</Button>
        </Paper>
        <Button color="success">Green</Button>
      </Flex>
    </div>
  )
}

export function ButtonTransformDefaults() {
  return (
    <div className="l_flow__sm">
      <Flex gap="sm" style={{ '--button-transform': 'lowercase' } as CSSProperties}>
        <Button transform="uppercase" color="success">
          green
        </Button>
        <Button transform="first-letter-only" color="success">
          green
        </Button>
        <Button transform="lowercase" color="success">
          green
        </Button>
        <Button color="success">Green</Button>
      </Flex>
      <Button color="success">Green</Button>
    </div>
  )
}
export function ButtonSizeDefaults() {
  return (
    <div className="l_flow__sm">
      <Flex gap="sm" style={{ '--button-size': '8px' } as CSSProperties}>
        <Button size="2xs" color="success">
          green
        </Button>
        <Button size="xs" color="success">
          green
        </Button>
        <Button size="sm" color="success">
          green
        </Button>
        <Button size="md" color="success">
          green
        </Button>
        <Button size="lg" color="success">
          green
        </Button>
        <Button size="xl" color="success">
          green
        </Button>
        <Button size="2xl" color="success">
          green
        </Button>
        <Button color="success">Green</Button>
      </Flex>

      <Button color="success">Green</Button>
    </div>
  )
}

export function ButtonHighContrastSolid() {
  return (
    <div>
      <div>
        <h1>High Contrast</h1>
        <Flex gap="sm">
          <Button variant="solid" highContrast color="success">
            green
          </Button>
          <Button variant="solid" highContrast color="danger">
            green
          </Button>
          <Button variant="solid" highContrast color="info">
            green
          </Button>
          <Button variant="solid" highContrast color="warning">
            green
          </Button>
          <Button variant="solid" highContrast color="primary">
            green
          </Button>
          <Button variant="solid" highContrast color="secondary">
            green
          </Button>
          <Button variant="solid" highContrast color="surface">
            green
          </Button>
          <Button variant="solid" highContrast>
            Green
          </Button>
        </Flex>
      </div>
      <div>
        <h1>Low Contrast</h1>
        <Flex gap="sm">
          <Button variant="solid" color="success">
            green
          </Button>
          <Button variant="solid" color="danger">
            green
          </Button>
          <Button variant="solid" color="info">
            green
          </Button>
          <Button variant="solid" color="warning">
            green
          </Button>
          <Button variant="solid" color="primary">
            green
          </Button>
          <Button variant="solid" color="secondary">
            green
          </Button>
          <Button variant="solid" color="surface">
            green
          </Button>
          <Button variant="solid">Green</Button>
        </Flex>
      </div>
    </div>
  )
}

export function ButtonHighContrastOutline() {
  return (
    <div>
      <div>
        <h1>High Contrast</h1>
        <Flex gap="sm">
          <Button variant="outline" highContrast color="success">
            green
          </Button>
          <Button variant="outline" highContrast color="danger">
            green
          </Button>
          <Button variant="outline" highContrast color="info">
            green
          </Button>
          <Button variant="outline" highContrast color="warning">
            green
          </Button>
          <Button variant="outline" highContrast color="primary">
            green
          </Button>
          <Button variant="outline" highContrast color="secondary">
            green
          </Button>
          <Button variant="outline" highContrast color="surface">
            green
          </Button>
          <Button variant="outline" highContrast>
            Green
          </Button>
        </Flex>
      </div>
      <div>
        <h1>Low Contrast</h1>
        <Flex gap="sm">
          <Button variant="outline" color="success">
            green
          </Button>
          <Button variant="outline" color="danger">
            green
          </Button>
          <Button variant="outline" color="info">
            green
          </Button>
          <Button variant="outline" color="warning">
            green
          </Button>
          <Button variant="outline" color="primary">
            green
          </Button>
          <Button variant="outline" color="secondary">
            green
          </Button>
          <Button variant="outline" color="surface">
            green
          </Button>
          <Button variant="outline">Green</Button>
        </Flex>
      </div>
    </div>
  )
}

export function ButtonHighContrastSoft() {
  return (
    <div>
      <div>
        <h1>High Contrast</h1>
        <Flex gap="sm">
          <Button variant="soft" highContrast color="success">
            green
          </Button>
          <Button variant="soft" highContrast color="danger">
            green
          </Button>
          <Button variant="soft" highContrast color="info">
            green
          </Button>
          <Button variant="soft" highContrast color="warning">
            green
          </Button>
          <Button variant="soft" highContrast color="primary">
            green
          </Button>
          <Button variant="soft" highContrast color="secondary">
            green
          </Button>
          <Button variant="soft" highContrast color="surface">
            green
          </Button>
          <Button variant="soft" highContrast>
            Green
          </Button>
        </Flex>
      </div>
      <div>
        <h1>Low Contrast</h1>
        <Flex gap="sm">
          <Button variant="soft" color="success">
            green
          </Button>
          <Button variant="soft" color="danger">
            green
          </Button>
          <Button variant="soft" color="info">
            green
          </Button>
          <Button variant="soft" color="warning">
            green
          </Button>
          <Button variant="soft" color="primary">
            green
          </Button>
          <Button variant="soft" color="secondary">
            green
          </Button>
          <Button variant="soft" color="surface">
            green
          </Button>
          <Button variant="soft">Green</Button>
        </Flex>
      </div>
    </div>
  )
}

export function ButtonHighContrastText() {
  return (
    <div>
      <div>
        <h1>High Contrast</h1>
        <Flex gap="sm">
          <Button variant="text" highContrast color="success">
            green
          </Button>
          <Button variant="text" highContrast color="danger">
            green
          </Button>
          <Button variant="text" highContrast color="info">
            green
          </Button>
          <Button variant="text" highContrast color="warning">
            green
          </Button>
          <Button variant="text" highContrast color="primary">
            green
          </Button>
          <Button variant="text" highContrast color="secondary">
            green
          </Button>
          <Button variant="text" highContrast color="surface">
            green
          </Button>
          <Button variant="text" highContrast>
            Green
          </Button>
        </Flex>
      </div>
      <div>
        <h1>Low Contrast</h1>
        <Flex gap="sm">
          <Button variant="text" color="success">
            green
          </Button>
          <Button variant="text" color="danger">
            green
          </Button>
          <Button variant="text" color="info">
            green
          </Button>
          <Button variant="text" color="warning">
            green
          </Button>
          <Button variant="text" color="primary">
            green
          </Button>
          <Button variant="text" color="secondary">
            green
          </Button>
          <Button variant="text" color="surface">
            green
          </Button>
          <Button variant="text">Green</Button>
        </Flex>
      </div>
    </div>
  )
}
