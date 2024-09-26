import React, { CSSProperties } from 'react'
import { Button, Flex, Paper, Text } from '@pillar-ui/core'
import { Meta, StoryObj } from '@storybook/react'
import { Ballon, Bluetooth, Eight, Eye, Facebook, Github, Plus, ThumbDown, ThumbUp, X } from '@pillar-ui/icons'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  args: {
    children: 'Hello',
  },
}
export default meta

const VARIANTS = ['shadow', 'solid', 'mixed', 'soft', 'outline', 'link', 'text'] as const

export const Playground: StoryObj<typeof Button> = {}

export function HtmlButton() {
  return (
    <Flex gap="sm">
      <button>Green</button>
      <button>Green</button>
      <button>Green</button>
      <button>Green</button>
      <button>Green</button>
      <button>Green</button>
      <button>Green</button>
      <button>Green</button>
    </Flex>
  )
}

export function ButtonsColors() {
  return (
    <Flex gap="sm">
      <Button color="s">Green</Button>
      <Button color="w">Orange</Button>
      <Button color="d">Red</Button>
      <Button color="se">Secondary</Button>
      <Button color="b">bg</Button>
      <Button color="p">Primary</Button>
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
    <div className="l_f-xl">
      {SIZES.map((size) => (
        <div key={size}>
          <Text weight="bold" size="2xl">
            {size} Button
          </Text>
          <Flex gap="sm" wrap>
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
      <Flex gap="sm" wrap>
        <Button transform="uppercase" color="s">
          Green
        </Button>
        <Button transform="capitalize" color="w">
          Orange
        </Button>
        <Button transform="lowercase" color="d">
          Red
        </Button>
      </Flex>
      <h1>with Global Capitalize</h1>
      <Flex gap="sm" style={{ '--button-transform': 'capitalize' } as CSSProperties}>
        <Button color="s">Green</Button>
        <Button color="w">Orange</Button>
        <Button color="d">Red</Button>
      </Flex>
      <h1>with Global lowercase</h1>
      <Flex gap="sm" style={{ '--button-transform': 'lowercase' } as CSSProperties}>
        <Button color="s">Green</Button>
        <Button color="w">Orange</Button>
        <Button color="d">Red</Button>
      </Flex>
      <h1>with Global uppercase</h1>
      <Flex gap="sm" style={{ '--button-transform': 'uppercase' } as CSSProperties}>
        <Button color="s">Green</Button>
        <Button color="w">Orange</Button>
        <Button color="d">Red</Button>
      </Flex>
      <h1>Default</h1>
      <Flex gap="sm">
        <Button color="s">Green</Button>
        <Button color="w">Orange</Button>
        <Button color="d">Red</Button>
      </Flex>
    </div>
  )
}

export function ButtonsVariants() {
  return (
    <div className="l_f-md">
      {VARIANTS.map((variant) => (
        <Flex key={variant} gap="sm">
          <Button color="s" variant={variant}>
            Green
          </Button>
          <Button color="w" variant={variant}>
            Orange
          </Button>
          <Button color="d" variant={variant}>
            Red
          </Button>
          <Button color="se" variant={variant}>
            Secondary
          </Button>
          <Button color="b" variant={variant}>
            bg
          </Button>
          <Button color="p" variant={variant}>
            Primary
          </Button>
        </Flex>
      ))}
    </div>
  )
}

export function ButtonsCorners() {
  return (
    <div className="l_f-md">
      <h1>Regular</h1>
      <Flex gap="sm" wrap>
        <Button corner="sharp" color="s">
          Green
        </Button>
        <Button corner="xs" color="w">
          Orange
        </Button>
        <Button corner="sm" color="d">
          Red
        </Button>
        <Button corner="md" color="se">
          Secondary
        </Button>
        <Button corner="lg" color="b">
          bg
        </Button>
        <Button corner="xl" color="p">
          Primary
        </Button>
        <Button corner="h-1" color="p">
          Primary
        </Button>
        <Button corner="h-2" color="p">
          Primary
        </Button>
        <Button corner="h-3" color="p">
          Primary
        </Button>

        <Button corner="h-4" color="p">
          Primary
        </Button>
        <Button corner="h-5" color="p">
          Primary
        </Button>
        <Button corner="h-6" color="p">
          Primary
        </Button>
      </Flex>
      <h1>Specify the button Corner circle</h1>

      <Flex gap="sm" style={{ '--button-rad': '1000px' } as CSSProperties}>
        <Button color="s">Green</Button>
        <Button color="w">Orange</Button>
        <Button color="d">Red</Button>
        <Button color="se">Secondary</Button>
        <Button color="b">bg</Button>
        <Button color="p">Primary</Button>
      </Flex>

      <h1>Specify the button Corner Medium</h1>

      <Flex gap="sm" style={{ '--button-rad': 'var(--rad-md)' } as CSSProperties}>
        <Button color="s">Green</Button>
        <Button color="w">Orange</Button>
        <Button color="d">Red</Button>
        <Button color="se">Secondary</Button>
        <Button color="b">bg</Button>
        <Button color="p">Primary</Button>
      </Flex>
    </div>
  )
}

export function ButtonSizes() {
  return (
    <Flex gap="sm" items="center" wrap>
      <Button size="3xs" color="s">
        Green
      </Button>
      <Button size="2xs" color="w">
        Orange
      </Button>
      <Button size="xs" color="d">
        Red
      </Button>
      <Button size="sm" color="se">
        Secondary
      </Button>
      <Button size="md" color="b">
        bg
      </Button>
      <Button size="lg" color="p">
        Primary
      </Button>
    </Flex>
  )
}

export function ButtonsFluid() {
  return (
    <Flex gap="md" direction="column">
      <Button fluid icon={<ThumbUp />} iconPosition="end" size="3xs" color="s">
        Green
      </Button>
      <Button fluid icon={<ThumbDown />} size="2xs" color="w">
        Orange
      </Button>
      <Button fluid icon={<Plus />} iconPosition="end" size="xs" color="d">
        Red
      </Button>
      <Button fluid icon={<Github />} size="sm" color="se">
        Secondary
      </Button>
      <Button fluid icon={<Eye />} iconPosition="end" size="md" color="b">
        bg
      </Button>
      <Button fluid icon={<ThumbUp />} size="lg" color="p">
        Primary
      </Button>
      <Button fluid icon={<ThumbUp />} iconPosition="end" size="xl" color="s">
        Purple
      </Button>
      <Button fluid icon={<ThumbUp />} size="2xl" color="se">
        Brown
      </Button>
      <Button fluid icon={<ThumbUp />} iconPosition="end" size="3xl" color="se">
        Brown
      </Button>
    </Flex>
  )
}

export function ButtonsState() {
  return (
    <Flex items="center" gap="xs">
      <Button state="idle" color="s">
        Idle
      </Button>
      <Button state="loading" color="s">
        Loading
      </Button>
      <Button disabled color="s">
        Disabled
      </Button>
    </Flex>
  )
}

export function ButtonLoadingState() {
  return (
    <Flex gap="sm" items="center" wrap>
      <Button state="loading" size="3xs" color="s">
        Green
      </Button>
      <Button state="loading" size="2xs" color="w">
        Orange
      </Button>
      <Button state="loading" size="xs" color="d">
        Red
      </Button>
      <Button state="loading" size="sm" color="se">
        Secondary
      </Button>
      <Button state="loading" size="md" color="b">
        bg
      </Button>
      <Button state="loading" size="lg" color="p">
        Primary
      </Button>
      <Button state="loading" size="xl" color="s">
        Purple
      </Button>
      <Button state="loading" size="2xl" color="se">
        Brown
      </Button>
      <Button state="loading" size="3xl" color="se">
        Brown
      </Button>
    </Flex>
  )
}

export function ButtonsCustomStyle() {
  return (
    <Flex items="center" gap="xs">
      <Button style={{ background: 'orange' }} state="idle" color="s">
        Hello world
      </Button>
      <Button className="u_secondary" color="s">
        Hello world
      </Button>
    </Flex>
  )
}

export function ButtonsLength() {
  return (
    <Flex items="center" gap="xs" wrap>
      <Button state="idle" color="s">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam asperiores a vitae expedita nostrum
        perspiciatis est excepturi, eligendi facere vel quis, et in dolores eos voluptates libero, adipisci
        necessitatibus voluptatum?
      </Button>
      <Button color="s">Hello world</Button>

      <Button color="s">H</Button>
    </Flex>
  )
}

export function ButtonCornerDefaults() {
  return (
    <div className="l_f-sm">
      <Flex gap="sm">
        <Paper corner="sharp">
          <Button color="s">Green</Button>
        </Paper>
        <Paper corner="sm">
          <Button color="s">Green</Button>
        </Paper>
        <Paper corner="md">
          <Button color="s">Green</Button>
        </Paper>
        <Paper corner="lg">
          <Button color="s">Green</Button>
        </Paper>
        <Button color="s">Green</Button>
      </Flex>

      <Flex gap="sm" style={{ '--button-rad': '5px' } as CSSProperties}>
        <Paper corner="sharp">
          <Button color="s">Green</Button>
        </Paper>
        <Paper corner="sm">
          <Button color="s">Green</Button>
        </Paper>
        <Paper corner="md">
          <Button color="s">Green</Button>
        </Paper>
        <Paper corner="lg">
          <Button color="s">Green</Button>
        </Paper>
        <Button color="s">Green</Button>
      </Flex>
      <Flex gap="sm" style={{ '--button-rad': '10px' } as CSSProperties}>
        <Paper corner="sharp">
          <Button color="s">Green</Button>
        </Paper>
        <Paper corner="sm">
          <Button color="s">Green</Button>
        </Paper>
        <Paper corner="md">
          <Button color="s">Green</Button>
        </Paper>
        <Paper corner="lg">
          <Button color="s">Green</Button>
        </Paper>
        <Button color="s">Green</Button>
      </Flex>

      <Flex gap="sm" style={{ '--button-rad': '20px' } as CSSProperties}>
        <Paper corner="sharp">
          <Button color="s">Green</Button>
        </Paper>
        <Paper corner="sm">
          <Button color="s">Green</Button>
        </Paper>
        <Paper corner="md">
          <Button color="s">Green</Button>
        </Paper>
        <Paper corner="lg">
          <Button color="s">Green</Button>
        </Paper>
        <Button color="s">Green</Button>
      </Flex>
    </div>
  )
}

export function ButtonTransformDefaults() {
  return (
    <div className="l_f-sm">
      <Flex gap="sm" style={{ '--button-transform': 'lowercase' } as CSSProperties}>
        <Button transform="uppercase" color="s">
          green
        </Button>
        <Button transform="first-letter-only" color="s">
          green
        </Button>
        <Button transform="lowercase" color="s">
          green
        </Button>
        <Button color="s">Green</Button>
      </Flex>
      <Button color="s">Green</Button>
    </div>
  )
}
export function ButtonSizeDefaults() {
  return (
    <div className="l_f-sm">
      <Flex gap="sm" style={{ '--button-size': '8px' } as CSSProperties}>
        <Button size="2xs" color="s">
          green
        </Button>
        <Button size="xs" color="s">
          green
        </Button>
        <Button size="sm" color="s">
          green
        </Button>
        <Button size="md" color="s">
          green
        </Button>
        <Button size="lg" color="s">
          green
        </Button>
        <Button size="xl" color="s">
          green
        </Button>
        <Button size="2xl" color="s">
          green
        </Button>
        <Button color="s">Green</Button>
      </Flex>

      <Button color="s">Green</Button>
    </div>
  )
}
