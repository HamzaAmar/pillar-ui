import React from 'react'
import type { Meta } from '@storybook/react'

import { Flex, Paper } from '@pillar-ui/core'

const meta: Meta<typeof Flex> = {
  title: 'Components/Flex',
  component: Flex,
  args: {
    children: 'Hello world',
  },
}
export default meta
const Box = (props: any) => {
  return (
    <Paper
      as={Flex}
      justify="center"
      items="center"
      style={{ height: '100px' }}
      background="b-6"
      corner="2"
      {...props}
    />
  )
}

const boxes = Array.from({ length: 5 }, (_, index) => <Box style={{ width: '100px', height: '100px' }} key={index} />)

export const FlexGap = () => {
  return (
    <div className="Sf3">
      <Flex gap="2">{boxes}</Flex>
      <Flex gap="3">{boxes}</Flex>
      <Flex gap="4">{boxes}</Flex>
      <Flex gap="5">{boxes}</Flex>
      <Flex gap="6">{boxes}</Flex>
      <Flex gap="7">{boxes}</Flex>
      <Flex gap="8">{boxes}</Flex>
    </div>
  )
}

export const FlexWrap = () => {
  return (
    <div className="Sf3">
      <Flex gap="2" wrap>
        {boxes}
        {boxes}
      </Flex>
      <Flex gap="3" wrap>
        {boxes}
        {boxes}
      </Flex>
      <Flex gap="4" wrap>
        {boxes}
        {boxes}
      </Flex>
      <Flex gap="5" wrap>
        {boxes}
        {boxes}
      </Flex>
      <Flex gap="6" wrap>
        {boxes}
        {boxes}
      </Flex>
      <Flex gap="7" wrap>
        {boxes}
        {boxes}
      </Flex>
      <Flex gap="8" wrap>
        {boxes}
        {boxes}
      </Flex>
    </div>
  )
}

export const FlexDirection = () => {
  return (
    <div className="Sf3">
      <Flex gap="4">{boxes}</Flex>
      <Flex gap="4" direction="column">
        {boxes}
      </Flex>
    </div>
  )
}

export const FlexJustify = () => {
  return (
    <div className="Sf5">
      <Flex gap="4">{boxes}</Flex>
      <Flex gap="4" justify="center">
        {boxes}
      </Flex>
      <Flex gap="4" justify="end">
        {boxes}
      </Flex>
      <Flex gap="4" justify="between">
        {boxes}
      </Flex>
      <Flex gap="4" justify="around">
        {boxes}
      </Flex>
      <Flex gap="4" justify="evenly">
        {boxes}
      </Flex>
    </div>
  )
}

export const FlexItems = () => {
  return (
    <div className="Sf3">
      <Flex as={Paper} height="96p" background="b-5" gap="4" items="center">
        Hello
      </Flex>
      <Flex as={Paper} height="96p" background="b-5" gap="4" items="end">
        Hello
      </Flex>
      <Flex as={Paper} height="96p" background="b-5" gap="4">
        Hello
      </Flex>
    </div>
  )
}

export const FlexNested = () => {
  return (
    <Flex gap="4" direction="column">
      <Box className="l_fl-1">header</Box>
      <Flex gap="4">
        <Box className="l_fl-1">sidebar</Box>
        <Box className="l_fl-2">main</Box>
        <Box className="l_fl-1">sidebar</Box>
      </Flex>
      <Box className="l_fl-1">footer</Box>
    </Flex>
  )
}

export const RegularFlex = {}
