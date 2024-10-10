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
    <Flex gap="4">
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
    <Flex gap="4">
      <Button color="su">Green</Button>
      <Button color="w">Orange</Button>
      <Button color="d">Red</Button>
      <Button color="se">Secondary</Button>
      <Button color="b">bg</Button>
      <Button color="p">Primary</Button>
      <Button color="i">Info</Button>
    </Flex>
  )
}

export function ButtonsAsInline() {
  return (
    <Flex gap="4">
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

const SIZES = ['1', '2', '3', '4', '5', '6', '7', '8', '9'] as const

export function ButtonsIcons() {
  return (
    <div className="Sf-6">
      {SIZES.map((size) => (
        <div key={size}>
          <Text weight="7" size="8">
            {size} Button
          </Text>
          <Flex gap="4" wrap>
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
      <Flex gap="4" wrap>
        <Button transform="uppercase" color="su">
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
      <Flex gap="4" style={{ '--bu-transform': 'capitalize' } as CSSProperties}>
        <Button color="su">Green</Button>
        <Button color="w">Orange</Button>
        <Button color="d">Red</Button>
      </Flex>
      <h1>with Global lowercase</h1>
      <Flex gap="4" style={{ '--bu-transform': 'lowercase' } as CSSProperties}>
        <Button color="su">Green</Button>
        <Button color="w">Orange</Button>
        <Button color="d">Red</Button>
      </Flex>
      <h1>with Global uppercase</h1>
      <Flex gap="4" style={{ '--bu-transform': 'uppercase' } as CSSProperties}>
        <Button color="su">Green</Button>
        <Button color="w">Orange</Button>
        <Button color="d">Red</Button>
      </Flex>
      <h1>Default</h1>
      <Flex gap="4">
        <Button color="su">Green</Button>
        <Button color="w">Orange</Button>
        <Button color="d">Red</Button>
      </Flex>
    </div>
  )
}

export function ButtonsVariants() {
  return (
    <div className="Sf-4">
      {VARIANTS.map((variant) => (
        <Flex key={variant} gap="4">
          <Button color="su" variant={variant}>
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
    <div className="Sf-4">
      <h1>Regular</h1>
      <Flex gap="4" wrap>
        <Button corner="0" color="su">
          Green
        </Button>
        <Button corner="3" color="w">
          Orange
        </Button>
        <Button corner="2" color="d">
          Red
        </Button>
        <Button corner="3" color="se">
          Secondary
        </Button>
        <Button corner="4" color="b">
          bg
        </Button>
        <Button corner="5" color="p">
          Primary
        </Button>
        <Button corner="h1" color="p">
          Primary
        </Button>
        <Button corner="h2" color="p">
          Primary
        </Button>
        <Button corner="h3" color="p">
          Primary
        </Button>

        <Button corner="h4" color="p">
          Primary
        </Button>
        <Button corner="h5" color="p">
          Primary
        </Button>
        <Button corner="h6" color="p">
          Primary
        </Button>
      </Flex>
      <h1>Specify the button Corner circle</h1>

      <Flex gap="4" style={{ '--bu-rad': '1000px' } as CSSProperties}>
        <Button color="su">Green</Button>
        <Button color="w">Orange</Button>
        <Button color="d">Red</Button>
        <Button color="se">Secondary</Button>
        <Button color="b">bg</Button>
        <Button color="p">Primary</Button>
      </Flex>

      <h1>Specify the button Corner Medium</h1>

      <Flex gap="4" style={{ '--bu-rad': 'var(--rad-md)' } as CSSProperties}>
        <Button color="su">Green</Button>
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
    <Flex gap="4" items="center" wrap>
      <Button size="1" color="su">
        Green
      </Button>
      <Button size="2" color="w">
        Orange
      </Button>
      <Button size="3" color="d">
        Red
      </Button>
      <Button size="4" color="se">
        Secondary
      </Button>
      <Button size="5" color="b">
        bg
      </Button>
      <Button size="6" color="p">
        Primary
      </Button>
    </Flex>
  )
}

export function ButtonsFluid() {
  return (
    <Flex gap="5" direction="col">
      <Button fluid icon={<ThumbUp />} iconPosition="end" size="1" color="su">
        Green
      </Button>
      <Button fluid icon={<ThumbDown />} size="2" color="w">
        Orange
      </Button>
      <Button fluid icon={<Plus />} iconPosition="end" size="3" color="d">
        Red
      </Button>
      <Button fluid icon={<Github />} size="4" color="se">
        Secondary
      </Button>
      <Button fluid icon={<Eye />} iconPosition="end" size="5" color="b">
        bg
      </Button>
      <Button fluid icon={<ThumbUp />} size="6" color="p">
        Primary
      </Button>
      <Button fluid icon={<ThumbUp />} iconPosition="end" size="7" color="su">
        Purple
      </Button>
      <Button fluid icon={<ThumbUp />} size="8" color="se">
        Brown
      </Button>
      <Button fluid icon={<ThumbUp />} iconPosition="end" size="9" color="se">
        Brown
      </Button>
    </Flex>
  )
}

export function ButtonsState() {
  return (
    <Flex items="center" gap="3">
      <Button state="idle" color="su">
        Idle
      </Button>
      <Button state="loading" color="su">
        Loading
      </Button>
      <Button disabled color="su">
        Disabled
      </Button>
    </Flex>
  )
}

export function ButtonLoadingState() {
  return (
    <Flex gap="4" items="center" wrap>
      <Button state="loading" size="1" color="su">
        Green
      </Button>
      <Button state="loading" size="2" color="w">
        Orange
      </Button>
      <Button state="loading" size="3" color="d">
        Red
      </Button>
      <Button state="loading" size="4" color="se">
        Secondary
      </Button>
      <Button state="loading" size="5" color="b">
        bg
      </Button>
      <Button state="loading" size="6" color="p">
        Primary
      </Button>
      <Button state="loading" size="7" color="su">
        Purple
      </Button>
      <Button state="loading" size="8" color="se">
        Brown
      </Button>
      <Button state="loading" size="9" color="se">
        Brown
      </Button>
    </Flex>
  )
}

export function ButtonsCustomStyle() {
  return (
    <Flex items="center" gap="3">
      <Button style={{ background: 'orange' }} state="idle" color="su">
        Hello world
      </Button>
      <Button className="Cse" color="su">
        Hello world
      </Button>
    </Flex>
  )
}

export function ButtonsLength() {
  return (
    <Flex items="center" gap="3" wrap>
      <Button state="idle" color="su">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam asperiores a vitae expedita nostrum
        perspiciatis est excepturi, eligendi facere vel quis, et in dolores eos voluptates libero, adipisci
        necessitatibus voluptatum?
      </Button>
      <Button color="su">Hello world</Button>

      <Button color="su">H</Button>
    </Flex>
  )
}

export function ButtonCornerDefaults() {
  return (
    <div className="Sf-3">
      <Flex gap="4">
        <Paper corner="0">
          <Button color="su">Green</Button>
        </Paper>
        <Paper corner="2">
          <Button color="su">Green</Button>
        </Paper>
        <Paper corner="3">
          <Button color="su">Green</Button>
        </Paper>
        <Paper corner="4">
          <Button color="su">Green</Button>
        </Paper>
        <Button color="su">Green</Button>
      </Flex>

      <Flex gap="4" style={{ '--bu-rad': '5px' } as CSSProperties}>
        <Paper corner="0">
          <Button color="su">Green</Button>
        </Paper>
        <Paper corner="2">
          <Button color="su">Green</Button>
        </Paper>
        <Paper corner="3">
          <Button color="su">Green</Button>
        </Paper>
        <Paper corner="4">
          <Button color="su">Green</Button>
        </Paper>
        <Button color="su">Green</Button>
      </Flex>
      <Flex gap="4" style={{ '--bu-rad': '10px' } as CSSProperties}>
        <Button color="su">Green</Button>
        <Button color="su">Green</Button>
        <Button color="su">Green</Button>
        <Button color="su">Green</Button>
        <Button color="su">Green</Button>
      </Flex>

      <Flex gap="4" style={{ '--bu-rad': '50px' } as CSSProperties}>
        <Paper corner="0">
          <Button color="su">Green</Button>
        </Paper>
        <Paper corner="2">
          <Button color="su">Green</Button>
        </Paper>
        <Paper corner="3">
          <Button color="su">Green</Button>
        </Paper>
        <Paper corner="4">
          <Button color="su">Green</Button>
        </Paper>
        <Button color="su">Green</Button>
      </Flex>
    </div>
  )
}

export function ButtonTransformDefaults() {
  return (
    <div className="Sf-3">
      <Flex gap="4" style={{ '--bu-transform': 'lowercase' } as CSSProperties}>
        <Button transform="uppercase" color="su">
          green
        </Button>
        <Button transform="capitalize-once" color="su">
          green
        </Button>
        <Button transform="lowercase" color="su">
          green
        </Button>
        <Button color="su">Green</Button>
      </Flex>
      <Button color="su">Green</Button>
    </div>
  )
}
export function ButtonSizeDefaults() {
  return (
    <div className="Sf-3">
      <Flex gap="4" style={{ '--bu-size': '8px' } as CSSProperties}>
        <Button size="2" color="su">
          green
        </Button>
        <Button size="3" color="su">
          green
        </Button>
        <Button size="4" color="su">
          green
        </Button>
        <Button size="5" color="su">
          green
        </Button>
        <Button size="6" color="su">
          green
        </Button>
        <Button size="7" color="su">
          green
        </Button>
        <Button size="8" color="su">
          green
        </Button>
        <Button color="su">Green</Button>
      </Flex>

      <Button color="su">Green</Button>
    </div>
  )
}
