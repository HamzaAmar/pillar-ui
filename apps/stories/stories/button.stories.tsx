import React from 'react'
import { Button, Flex } from '@pillar/core'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ThumbUp } from '@pillar/icons'

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
      <Button color="surface">Slate</Button>
      <Button color="primary">Primary</Button>
    </Flex>
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
        <Button color="surface">Slate</Button>
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
          Slate
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
          Slate
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
          Slate
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
          Slate
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
        Slate
      </Button>
      <Button corner="xl" color="primary">
        Primary
      </Button>
    </Flex>
  )
}

export function ButtonSizes() {
  return (
    <Flex gap="sm" items="center">
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
        Slate
      </Button>
      <Button size="lg" color="primary">
        Primary
      </Button>
      <Button size="xl" color="secondary">
        Purple
      </Button>
      <Button size="2xl" color="secondary">
        Brown
      </Button>
      <Button size="3xl" color="secondary">
        Brown
      </Button>
    </Flex>
  )
}

export function ButtonIcons() {
  return (
    <Flex gap="sm" items="center" wrap>
      <Button size="3xs" color="success">
        No Icon
      </Button>
      <Button icon={<ThumbUp />} iconPosition="end" size="3xs" color="success">
        Green
      </Button>
      <Button icon={<ThumbUp />} size="2xs" color="warning">
        Orange
      </Button>
      <Button icon={<ThumbUp />} iconPosition="end" size="xs" color="danger">
        Red
      </Button>
      <Button icon={<ThumbUp />} size="sm" color="secondary">
        Secondary
      </Button>
      <Button icon={<ThumbUp />} iconPosition="end" size="md" color="surface">
        Slate
      </Button>
      <Button icon={<ThumbUp />} size="lg" color="primary">
        Primary
      </Button>
      <Button icon={<ThumbUp />} iconPosition="end" size="xl" color="success">
        Purple
      </Button>
      <Button icon={<ThumbUp />} size="2xl" color="secondary">
        Brown
      </Button>
      <Button icon={<ThumbUp />} iconPosition="end" size="3xl" color="secondary">
        Brown
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
      <Button fluid icon={<ThumbUp />} size="2xs" color="warning">
        Orange
      </Button>
      <Button fluid icon={<ThumbUp />} iconPosition="end" size="xs" color="danger">
        Red
      </Button>
      <Button fluid icon={<ThumbUp />} size="sm" color="secondary">
        Secondary
      </Button>
      <Button fluid icon={<ThumbUp />} iconPosition="end" size="md" color="surface">
        Slate
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
        Slate
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
