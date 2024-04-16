import React, { CSSProperties } from 'react'
import { Button, Flex, Paper, Text } from '@pillar-ui/core'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Ballon, Bluetooth, Eight, Eye, Facebook, Github, Plus, ThumbDown, ThumbUp, X } from '@pillar-ui/icons'

export default {
  title: 'Components/Button',
} as ComponentMeta<typeof Button>

const VARIANTS = ['shadow', 'solid', 'mixed', 'soft', 'outline', 'link', 'text'] as const

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

export function ButtonsAsInline() {
  return (
    <Flex gap="sm">
      <Button as="span">Inline Button</Button>
      <Button as="b">Inline Button</Button>
      <Button icon={<X />} as="a" href="#">
        Inline Button
      </Button>
      <Button iconPosition="end" icon={<X />} as="a" href="#">
        Inline Button
      </Button>
    </Flex>
  )
}

const SIZES = ['3xs', '2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'] as const

export function ButtonsIcons() {
  return (
    <div className="l_flow__xl">
      {SIZES.map((size) => (
        <div key={size}>
          <Text size="lg">{size} Button</Text>
          <Flex gap="sm">
            <Button size={size}>No Icon Button</Button>
            <Button size={size} icon={<X />}>
              Icon Button
            </Button>
            <Button size={size} icon={<Eight />}>
              Icon Button
            </Button>

            <Button size={size} icon={<Ballon />}>
              Icon Button
            </Button>

            <Button size={size} icon={<Bluetooth />}>
              Icon Button
            </Button>

            <Button size={size} icon={<Facebook />}>
              Icon Button
            </Button>
          </Flex>
        </div>
      ))}
    </div>
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
      {VARIANTS.map((variant) => (
        <Flex key={variant} gap="sm">
          <Button color="success" variant={variant}>
            Green
          </Button>
          <Button color="warning" variant={variant}>
            Orange
          </Button>
          <Button color="danger" variant={variant}>
            Red
          </Button>
          <Button color="secondary" variant={variant}>
            Secondary
          </Button>
          <Button color="surface" variant={variant}>
            Surface
          </Button>
          <Button color="primary" variant={variant}>
            Primary
          </Button>
        </Flex>
      ))}
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
