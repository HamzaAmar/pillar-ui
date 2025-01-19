import React, { CSSProperties } from 'react'
import { Button, Flex, IconButton, Paper, Text } from '@pillar-ui/core'
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

export function ButtonsColors() {
  return (
    <div>
      <Flex gap="4">
        <Button color="su">Green</Button>
        <Button color="w">Orange</Button>
        <Button color="d">Red</Button>
        <Button color="se">Secondary</Button>
        <Button color="b">bg</Button>
        <Button color="p">Primary</Button>
        <Button color="i">Info</Button>
      </Flex>
      <Flex gap="4">
        <IconButton title="Hello world" icon={<ThumbUp />} color="su" />
        <IconButton title="Hello world" icon={<ThumbUp />} color="w" />
        <IconButton title="Hello world" icon={<ThumbUp />} color="d" />
        <IconButton title="Hello world" icon={<ThumbUp />} color="se" />
        <IconButton title="Hello world" icon={<ThumbUp />} color="b" />
        <IconButton title="Hello world" icon={<ThumbUp />} color="p" />
        <IconButton title="Hello world" icon={<ThumbUp />} color="i" />
      </Flex>
    </div>
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
        <Flex gap="4" wrap key={size}>
          <Button size={size} icon={<X />} iconPosition="end">
            No Icon Button
          </Button>
          <Button size={size} icon={<X />}>
            Icon Button
          </Button>
        </Flex>
      ))}
    </div>
  )
}

export function ButtonsTransforms() {
  return (
    <div>
      <Button transform="uppercase" color="su">
        Green
      </Button>
      <Button transform="capitalize" color="w">
        Orange
      </Button>
      <Button transform="lowercase" color="d">
        Red
      </Button>
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

      <div className="Sf-4">
        {VARIANTS.map((variant) => (
          <Flex key={variant} gap="4">
            <IconButton title="Hello world" icon={<ThumbUp />} variant={variant} color="su" />
            <IconButton title="Hello world" icon={<ThumbUp />} variant={variant} color="w" />
            <IconButton title="Hello world" icon={<ThumbUp />} variant={variant} color="d" />
            <IconButton title="Hello world" icon={<ThumbUp />} variant={variant} color="se" />
            <IconButton title="Hello world" icon={<ThumbUp />} variant={variant} color="b" />
            <IconButton title="Hello world" icon={<ThumbUp />} variant={variant} color="p" />
          </Flex>
        ))}
      </div>
    </div>
  )
}

export function ButtonsCorners() {
  return (
    <div className="Sf-4">
      <h1>Regular</h1>
      <Flex gap="4" wrap>
        <Button corner="0">Green</Button>
        <Button corner="3">Orange</Button>
        <Button corner="2">Red</Button>
        <Button corner="3">Secondary</Button>
        <Button corner="4">bg</Button>
        <Button corner="5">Primary</Button>
        <Button corner="h1">Primary</Button>
        <Button corner="h2">Primary</Button>
        <Button corner="h3">Primary</Button>

        <Button corner="h4">Primary</Button>
        <Button corner="h5">Primary</Button>
        <Button corner="h6">Primary</Button>
      </Flex>

      <Flex gap="4" wrap>
        <IconButton title="Hello world" icon={<ThumbUp />} corner="0" />
        <IconButton title="Hello world" icon={<ThumbUp />} corner="3" />
        <IconButton title="Hello world" icon={<ThumbUp />} corner="2" />
        <IconButton title="Hello world" icon={<ThumbUp />} corner="3" />
        <IconButton title="Hello world" icon={<ThumbUp />} corner="4" />
        <IconButton title="Hello world" icon={<ThumbUp />} corner="5" />
        <IconButton title="Hello world" icon={<ThumbUp />} corner="full" />
      </Flex>
    </div>
  )
}

export function ButtonSizes() {
  return (
    <div>
      <Flex gap="4" items="center" wrap>
        <Button size="1">Green</Button>
        <Button size="2">Orange</Button>
        <Button size="3">Red</Button>
        <Button size="4">Secondary</Button>
        <Button size="5">bg</Button>
        <Button size="6">Primary</Button>
        <Button size="7">Primary</Button>
        <Button size="8">Primary</Button>
      </Flex>
      <Flex gap="4" items="center">
        <IconButton title="Hello world" size="1" icon={<ThumbUp />} />
        <IconButton title="Hello world" size="2" icon={<ThumbUp />} />
        <IconButton title="Hello world" size="3" icon={<ThumbUp />} />
        <IconButton title="Hello world" size="4" icon={<ThumbUp />} />
        <IconButton title="Hello world" size="5" icon={<ThumbUp />} />
        <IconButton title="Hello world" size="6" icon={<ThumbUp />} />
        <IconButton title="Hello world" size="7" icon={<ThumbUp />} />
        <IconButton title="Hello world" size="8" icon={<ThumbUp />} />
        <IconButton title="Hello world" size="9" icon={<ThumbUp />} />
      </Flex>
    </div>
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

export function ButtonDefaults() {
  return (
    <div className="Sf-3">
      <div style={{ '--bu-size': '8px' } as CSSProperties}>
        <Button>green</Button>
      </div>
      <div style={{ '--bu-transform': 'uppercase' } as CSSProperties}>
        <Button>green</Button>
      </div>
      <div style={{ '--bu-rad': '50px' } as CSSProperties}>
        <Button>green</Button>
      </div>
    </div>
  )
}

export function ButtonIssues() {
  return (
    <div className="Sf-3">
      <Flex>
        <p>
          orrupti mollitia alias! Deleniti quam odit, inventore sed unde at dolore aperiam, quod eveniet alias commodi
          sint laborum edit ex, nemo ducimus nesciunt eaque. Laboriosam rerum consectetur porro est possimus, mollitia
          incidunt nihil adipisci, asperiores eveniet eligendi necessitatibus. Vitae sequi tenetur eligendi ipsa ab
          accusamus qui ut voluptas nostrum laudantium! Repellat iste suscipit, aperiam inventore maiores culpa
          architecto iusto voluptatem veritatis! Ex!
        </p>
        <Button>green</Button>
      </Flex>
    </div>
  )
}
