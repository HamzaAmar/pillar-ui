import React from 'react'
import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { Chips, Flex } from '@pillar/core'
import { Close } from '@pillar/icons'

export default {
  title: 'Components/Chips',
  component: Chips,
  args: {
    children: 'Hello World',
  },
} as ComponentMeta<typeof Chips>

const Template: ComponentStory<typeof Chips> = (args) => <Chips {...args} />

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
    <Chips color="brown" variant="solid">
      Hello
    </Chips>
    <Chips color="indigo" variant="solid">
      Hello
    </Chips>
    <Chips color="violet" variant="solid">
      Hello
    </Chips>
    <Chips color="purple" variant="solid">
      Hello
    </Chips>
    <Chips color="slate" variant="solid">
      Hello
    </Chips>
  </Flex>
)

export const ChipsVariants = () => (
  <div className="l_flow">
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
      <Chips color="brown" variant="outline">
        Hello
      </Chips>
      <Chips color="purple" variant="outline">
        Hello
      </Chips>
      <Chips color="indigo" variant="outline">
        Hello
      </Chips>
      <Chips color="violet" variant="outline">
        Hello
      </Chips>
      <Chips color="slate" variant="outline">
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
      <Chips color="brown" variant="soft">
        Hello
      </Chips>
      <Chips color="purple" variant="soft">
        Hello
      </Chips>
      <Chips color="indigo" variant="soft">
        Hello
      </Chips>
      <Chips color="violet" variant="soft">
        Hello
      </Chips>
      <Chips color="slate" variant="soft">
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
      <Chips color="brown" variant="solid">
        Hello
      </Chips>
      <Chips color="purple" variant="solid">
        Hello
      </Chips>
      <Chips color="indigo" variant="solid">
        Hello
      </Chips>
      <Chips color="violet" variant="solid">
        Hello
      </Chips>
      <Chips color="slate" variant="solid">
        Hello
      </Chips>
    </Flex>
  </div>
)

export const ChipsSize = () => (
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
)

export const ChipsCorner = () => (
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
)

export const ChipsIcons = () => (
  <Flex gap="xs" items="center">
    <Chips size="3xs" prefix={<Close />} variant="outline">
      Hello
    </Chips>
    <Chips size="2xs" suffix={<Close />} variant="outline">
      Hello
    </Chips>
    <Chips size="xs" prefix={<Close />} variant="outline">
      Hello
    </Chips>
    <Chips size="sm" suffix={<Close />} variant="outline">
      Hello
    </Chips>
    <Chips size="md" prefix={<Close />} variant="outline">
      Hello
    </Chips>
    <Chips size="lg" suffix={<Close />} variant="outline">
      Hello
    </Chips>
    <Chips size="xl" prefix={<Close />} variant="outline">
      Hello
    </Chips>
    <Chips size="2xl" suffix={<Close />} variant="outline">
      Hello
    </Chips>
    <Chips size="3xl" prefix={<Close />} variant="outline">
      Hello
    </Chips>
  </Flex>
)

export const Playground = Template.bind({})
