import { Avatar, Flex, Paper } from '~/component/core/pillar'
import React from 'react'

const Box = (props: any) => {
  return (
    <Paper
      as={Flex}
      justify="center"
      items="center"
      style={{ width: '30px', height: '30px' }}
      background="bg-6"
      corner="sm"
      {...props}
    />
  )
}

const boxes = Array.from({ length: 5 }, (_, index) => <Box style={{ width: '100px', height: '100px' }} key={index} />)

export const FlexPlayGround = () => {
  return (
    <Paper className="playground" flow="sm" border p="sm" background="bg-3" corner="sm">
      <Avatar title="Success!" color="dan" />
      <Avatar title="Success!" color="war" />
      <Avatar title="Success!" color="suc" />
      <Avatar title="Success!" color="pri" />
      <Avatar title="Success!" color="bg" />
      <Avatar title="Success!" color="sec" />
    </Paper>
  )
}

export const FlexGap = () => {
  return (
    <Paper className="playground" flow="sm" border p="sm" background="bg-3" corner="sm">
      <Flex gap="2xs">{boxes}</Flex>
      <Flex gap="xs">{boxes}</Flex>
      <Flex gap="sm">{boxes}</Flex>
      <Flex gap="md">{boxes}</Flex>
      <Flex gap="lg">{boxes}</Flex>
      <Flex gap="xl">{boxes}</Flex>
      <Flex gap="2xl">{boxes}</Flex>
    </Paper>
  )
}

export const FlexWrap = () => {
  return (
    <Paper className="playground" flow="sm" border p="sm" background="bg-3" corner="sm">
      <Flex wrap gap="sm">
        {boxes}
        {boxes}
        {boxes}
        {boxes}
        {boxes}
        {boxes}
      </Flex>
    </Paper>
  )
}

export const FlexDirection = () => {
  return (
    <Paper className="playground" flow="sm" border p="sm" background="bg-3" corner="sm">
      <Flex gap="sm">{boxes}</Flex>
      <Flex gap="sm" direction="column">
        {boxes}
      </Flex>
    </Paper>
  )
}

export const FlexJustify = () => {
  return (
    <Paper className="playground" flow="xl" border p="sm" background="bg-3" corner="sm">
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
    </Paper>
  )
}

export const FlexItems = () => {
  return (
    <Paper className="playground" flow="sm" border p="sm" background="bg-3" corner="sm">
      <Flex as={Paper} style={{ height: '100px' }} background="bg-5" gap="sm" items="center">
        Hello
      </Flex>
      <Flex as={Paper} style={{ height: '100px' }} background="bg-5" gap="sm" items="end">
        Hello
      </Flex>
      <Flex as={Paper} style={{ height: '100px' }} background="bg-5" gap="sm">
        Hello
      </Flex>
    </Paper>
  )
}

export const FlexNested = () => {
  return (
    <Paper className="playground" flow="sm" border p="sm" background="bg-3" corner="sm">
      <Flex gap="sm" direction="column">
        <Box className="l_fl-1">header</Box>
        <Flex gap="sm">
          <Box className="l_fl-1">sidebar</Box>
          <Box className="l_fl-2">main</Box>
          <Box className="l_fl-1">sidebar</Box>
        </Flex>
        <Box className="l_fl-1">footer</Box>
      </Flex>
    </Paper>
  )
}
