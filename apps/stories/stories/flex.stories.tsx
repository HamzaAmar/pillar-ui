import React from 'react'
import type { ComponentStory, ComponentMeta } from '@storybook/react'

import { Flex, Paper } from '@pillar/core'

export default {
  title: 'Components/Flex',
  component: Flex,
  args: {
    children: 'Hello world',
  },
} as ComponentMeta<typeof Flex>
const Box = (props: any) => {
  return <Paper as={Flex} justify="center" items="center" height="100px" background="slate-6" corner="sm" {...props} />
}

const boxes = Array.from({ length: 5 }, (_, index) => <Box width="100px" key={index} />)

export const FlexGap = () => {
  return (
    <div className="l_flow__sm">
      <Flex gap="2xs">{boxes}</Flex>
      <Flex gap="xs">{boxes}</Flex>
      <Flex gap="sm">{boxes}</Flex>
      <Flex gap="md">{boxes}</Flex>
      <Flex gap="lg">{boxes}</Flex>
      <Flex gap="xl">{boxes}</Flex>
      <Flex gap="2xl">{boxes}</Flex>
    </div>
  )
}

export const FlexWrap = () => {
  return (
    <div className="l_flow__sm">
      <Flex gap="2xs" wrap>
        {boxes}
        {boxes}
      </Flex>
      <Flex gap="xs" wrap>
        {boxes}
        {boxes}
      </Flex>
      <Flex gap="sm" wrap>
        {boxes}
        {boxes}
      </Flex>
      <Flex gap="md" wrap>
        {boxes}
        {boxes}
      </Flex>
      <Flex gap="lg" wrap>
        {boxes}
        {boxes}
      </Flex>
      <Flex gap="xl" wrap>
        {boxes}
        {boxes}
      </Flex>
      <Flex gap="2xl" wrap>
        {boxes}
        {boxes}
      </Flex>
    </div>
  )
}

export const FlexDirection = () => {
  return (
    <div className="l_flow__sm">
      <Flex gap="sm">{boxes}</Flex>
      <Flex gap="sm" direction="column">
        {boxes}
      </Flex>
    </div>
  )
}

export const FlexJustify = () => {
  return (
    <div className="l_flow__lg">
      <Flex gap="sm">{boxes}</Flex>
      <Flex gap="sm" justify="center">
        {boxes}
      </Flex>
      <Flex gap="sm" justify="end">
        {boxes}
      </Flex>
      <Flex gap="sm" justify="between">
        {boxes}
      </Flex>
      <Flex gap="sm" justify="around">
        {boxes}
      </Flex>
      <Flex gap="sm" justify="evenly">
        {boxes}
      </Flex>
    </div>
  )
}

export const FlexItems = () => {
  return (
    <div className="l_flow__sm">
      <Flex as={Paper} height="100px" background="slate-5" gap="sm" items="center">
        Hello
      </Flex>
      <Flex as={Paper} height="100px" background="slate-5" gap="sm" items="end">
        Hello
      </Flex>
      <Flex as={Paper} height="100px" background="slate-5" gap="sm">
        Hello
      </Flex>
    </div>
  )
}

export const FlexNested = () => {
  return (
    <Flex gap="sm" direction="column">
      <Box className="l_flex-1">header</Box>
      <Flex gap="sm">
        <Box className="l_flex-1">sidebar</Box>
        <Box className="l_flex-2">main</Box>
        <Box className="l_flex-1">sidebar</Box>
      </Flex>
      <Box className="l_flex-1">footer</Box>
    </Flex>
  )
}

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />

export const RegularFlex = Template.bind({})
