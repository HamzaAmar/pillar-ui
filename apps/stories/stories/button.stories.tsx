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
      <Button color="green">Green</Button>
      <Button color="orange">Orange</Button>
      <Button color="red">Red</Button>
      <Button color="violet">Violet</Button>
      <Button color="slate">Slate</Button>
      <Button color="indigo">Indigo</Button>
      <Button color="purple">Purple</Button>
      <Button color="brown">Brown</Button>
    </Flex>
  )
}

export function ButtonsVariants() {
  return (
    <div className="l_flow">
      <Flex gap="sm">
        <Button color="green">Green</Button>
        <Button color="orange">Orange</Button>
        <Button color="red">Red</Button>
        <Button color="violet">Violet</Button>
        <Button color="slate">Slate</Button>
        <Button color="indigo">Indigo</Button>
        <Button color="purple">Purple</Button>
        <Button color="brown">Brown</Button>
      </Flex>
      <Flex gap="sm">
        <Button variant="outline" color="green">
          Green
        </Button>
        <Button variant="outline" color="orange">
          Orange
        </Button>
        <Button variant="outline" color="red">
          Red
        </Button>
        <Button variant="outline" color="violet">
          Violet
        </Button>
        <Button variant="outline" color="slate">
          Slate
        </Button>
        <Button variant="outline" color="indigo">
          Indigo
        </Button>
        <Button variant="outline" color="purple">
          Purple
        </Button>
        <Button variant="outline" color="brown">
          Brown
        </Button>
      </Flex>
      <Flex gap="sm">
        <Button variant="soft" color="green">
          Green
        </Button>
        <Button variant="soft" color="orange">
          Orange
        </Button>
        <Button variant="soft" color="red">
          Red
        </Button>
        <Button variant="soft" color="violet">
          Violet
        </Button>
        <Button variant="soft" color="slate">
          Slate
        </Button>
        <Button variant="soft" color="indigo">
          Indigo
        </Button>
        <Button variant="soft" color="purple">
          Purple
        </Button>
        <Button variant="soft" color="brown">
          Brown
        </Button>
      </Flex>
      <Flex gap="sm">
        <Button variant="link" color="green">
          Green
        </Button>
        <Button variant="link" color="orange">
          Orange
        </Button>
        <Button variant="link" color="red">
          Red
        </Button>
        <Button variant="link" color="violet">
          Violet
        </Button>
        <Button variant="link" color="slate">
          Slate
        </Button>
        <Button variant="link" color="indigo">
          Indigo
        </Button>
        <Button variant="link" color="purple">
          Purple
        </Button>
        <Button variant="link" color="brown">
          Brown
        </Button>
      </Flex>
      <Flex gap="sm">
        <Button variant="text" color="green">
          Green
        </Button>
        <Button variant="text" color="orange">
          Orange
        </Button>
        <Button variant="text" color="red">
          Red
        </Button>
        <Button variant="text" color="violet">
          Violet
        </Button>
        <Button variant="text" color="slate">
          Slate
        </Button>
        <Button variant="text" color="indigo">
          Indigo
        </Button>
        <Button variant="text" color="purple">
          Purple
        </Button>
        <Button variant="text" color="brown">
          Brown
        </Button>
      </Flex>
    </div>
  )
}

export function ButtonsCorners() {
  return (
    <Flex gap="sm">
      <Button corner="sharp" color="green">
        Green
      </Button>
      <Button corner="xs" color="orange">
        Orange
      </Button>
      <Button corner="sm" color="red">
        Red
      </Button>
      <Button corner="md" color="violet">
        Violet
      </Button>
      <Button corner="lg" color="slate">
        Slate
      </Button>
      <Button corner="xl" color="indigo">
        Indigo
      </Button>
      <Button corner="circle" color="purple">
        Purple
      </Button>
      <Button corner="full" color="brown">
        Brown
      </Button>
    </Flex>
  )
}

export function ButtonSizes() {
  return (
    <Flex gap="sm" items="center">
      <Button size="3xs" color="green">
        Green
      </Button>
      <Button size="2xs" color="orange">
        Orange
      </Button>
      <Button size="xs" color="red">
        Red
      </Button>
      <Button size="sm" color="violet">
        Violet
      </Button>
      <Button size="md" color="slate">
        Slate
      </Button>
      <Button size="lg" color="indigo">
        Indigo
      </Button>
      <Button size="xl" color="purple">
        Purple
      </Button>
      <Button size="2xl" color="brown">
        Brown
      </Button>
      <Button size="3xl" color="brown">
        Brown
      </Button>
    </Flex>
  )
}

export function ButtonIcons() {
  return (
    <Flex gap="sm" items="center" wrap>
      <Button size="3xs" color="green">
        No Icon
      </Button>
      <Button icon={<ThumbUp />} iconPosition="end" size="3xs" color="green">
        Green
      </Button>
      <Button icon={<ThumbUp />} size="2xs" color="orange">
        Orange
      </Button>
      <Button icon={<ThumbUp />} iconPosition="end" size="xs" color="red">
        Red
      </Button>
      <Button icon={<ThumbUp />} size="sm" color="violet">
        Violet
      </Button>
      <Button icon={<ThumbUp />} iconPosition="end" size="md" color="slate">
        Slate
      </Button>
      <Button icon={<ThumbUp />} size="lg" color="indigo">
        Indigo
      </Button>
      <Button icon={<ThumbUp />} iconPosition="end" size="xl" color="purple">
        Purple
      </Button>
      <Button icon={<ThumbUp />} size="2xl" color="brown">
        Brown
      </Button>
      <Button icon={<ThumbUp />} iconPosition="end" size="3xl" color="brown">
        Brown
      </Button>
    </Flex>
  )
}

export function ButtonsFluid() {
  return (
    <div className="l_flow">
      <Button fluid icon={<ThumbUp />} iconPosition="end" size="3xs" color="green">
        Green
      </Button>
      <Button fluid icon={<ThumbUp />} size="2xs" color="orange">
        Orange
      </Button>
      <Button fluid icon={<ThumbUp />} iconPosition="end" size="xs" color="red">
        Red
      </Button>
      <Button fluid icon={<ThumbUp />} size="sm" color="violet">
        Violet
      </Button>
      <Button fluid icon={<ThumbUp />} iconPosition="end" size="md" color="slate">
        Slate
      </Button>
      <Button fluid icon={<ThumbUp />} size="lg" color="indigo">
        Indigo
      </Button>
      <Button fluid icon={<ThumbUp />} iconPosition="end" size="xl" color="purple">
        Purple
      </Button>
      <Button fluid icon={<ThumbUp />} size="2xl" color="brown">
        Brown
      </Button>
      <Button fluid icon={<ThumbUp />} iconPosition="end" size="3xl" color="brown">
        Brown
      </Button>
    </div>
  )
}

export function ButtonsState() {
  return (
    <Flex items="center" gap="xs">
      <Button state="idle" color="green">
        Idle
      </Button>
      <Button state="loading" color="green">
        Loading
      </Button>
      <Button disabled color="green">
        Disabled
      </Button>
    </Flex>
  )
}

export function ButtonsCustomStyle() {
  return (
    <Flex items="center" gap="xs">
      <Button style={{ background: 'orange' }} state="idle" color="green">
        Hello world
      </Button>
      <Button className="u_violet" color="green">
        Hello world
      </Button>
    </Flex>
  )
}

export function ButtonsLongText() {
  return (
    <Flex items="center" gap="xs" wrap>
      <Button style={{ background: 'orange' }} state="idle" color="green">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam asperiores a vitae expedita nostrum
        perspiciatis est excepturi, eligendi facere vel quis, et in dolores eos voluptates libero, adipisci
        necessitatibus voluptatum?
      </Button>
      <Button className="u_violet" color="green">
        Hello world
      </Button>
    </Flex>
  )
}
