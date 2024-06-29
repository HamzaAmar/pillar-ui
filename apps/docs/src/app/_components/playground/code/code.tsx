import { Avatar, Code, Flex, Paper } from '~/component/core/pillar'
import React from 'react'

export const CodePlayGround = () => {
  return (
    <Paper className="playground" border p="sm" background="surface-3" corner="sm">
      <Avatar title="Success!" color="danger" />
      <Avatar title="Success!" color="warning" />
      <Avatar title="Success!" color="success" />
      <Avatar title="Success!" color="primary" />
      <Avatar title="Success!" color="surface" />
      <Avatar title="Success!" color="secondary" />
    </Paper>
  )
}

export const CodeSizes = () => {
  return (
    <Paper
      as={Flex}
      gap="sm"
      direction="column"
      className="playground"
      border
      p="sm"
      background="surface-3"
      corner="sm"
    >
      <Code size="2xs">{`console.log('Hello world Every thing is OK')`}</Code>
      <Code size="xs">{`console.log('Hello world Every thing is OK')`}</Code>
      <Code size="sm">{`console.log('Hello world Every thing is OK')`}</Code>
      <Code size="md">{`console.log('Hello world Every thing is OK')`}</Code>
      <Code size="lg">{`console.log('Hello world Every thing is OK')`}</Code>
      <Code size="xl">{`console.log('Hello world Every thing is OK')`}</Code>
      <Code size="2xl">{`console.log('Hello world Every thing is OK')`}</Code>
    </Paper>
  )
}

export const CodeCorners = () => {
  return (
    <Paper
      as={Flex}
      gap="sm"
      direction="column"
      className="playground"
      border
      p="sm"
      background="surface-3"
      corner="sm"
    >
      <Code corner="sharp">{`console.log('Hello world Every thing is OK')`}</Code>
      <Code corner="xs">{`console.log('Hello world Every thing is OK')`}</Code>
      <Code corner="sm">{`console.log('Hello world Every thing is OK')`}</Code>
      <Code corner="md">{`console.log('Hello world Every thing is OK')`}</Code>
      <Code corner="lg">{`console.log('Hello world Every thing is OK')`}</Code>
      <Code corner="circle">{`console.log('Hello world Every thing is OK')`}</Code>
      <Code corner="full">{`console.log('Hello world Every thing is OK')`}</Code>
    </Paper>
  )
}

export const CodeColors = () => {
  return (
    <Paper
      as={Flex}
      gap="sm"
      direction="column"
      className="playground"
      border
      p="sm"
      background="surface-3"
      corner="sm"
    >
      <Code color="danger">{`console.log('Hello world Every thing is OK')`}</Code>
      <Code color="success">{`console.log('Hello world Every thing is OK')`}</Code>
      <Code color="warning">{`console.log('Hello world Every thing is OK')`}</Code>
      <Code color="primary">{`console.log('Hello world Every thing is OK')`}</Code>
      <Code color="surface">{`console.log('Hello world Every thing is OK')`}</Code>
      <Code color="secondary">{`console.log('Hello world Every thing is OK')`}</Code>
    </Paper>
  )
}
