import { Avatar, Code, Flex, Paper } from '~/component/core/pillar'
import React from 'react'

export const CodePlayGround = () => {
  return (
    <Paper className="playground" border p="sm" background="bg-3" corner="sm">
      <Avatar title="Success!" color="dan" />
      <Avatar title="Success!" color="war" />
      <Avatar title="Success!" color="suc" />
      <Avatar title="Success!" color="pri" />
      <Avatar title="Success!" color="bg" />
      <Avatar title="Success!" color="sec" />
    </Paper>
  )
}

export const CodeSizes = () => {
  return (
    <Paper as={Flex} gap="sm" direction="column" className="playground" border p="sm" background="bg-3" corner="sm">
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
    <Paper as={Flex} gap="sm" direction="column" className="playground" border p="sm" background="bg-3" corner="sm">
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
    <Paper as={Flex} gap="sm" direction="column" className="playground" border p="sm" background="bg-3" corner="sm">
      <Code color="dan">{`console.log('Hello world Every thing is OK')`}</Code>
      <Code color="suc">{`console.log('Hello world Every thing is OK')`}</Code>
      <Code color="war">{`console.log('Hello world Every thing is OK')`}</Code>
      <Code color="pri">{`console.log('Hello world Every thing is OK')`}</Code>
      <Code color="bg">{`console.log('Hello world Every thing is OK')`}</Code>
      <Code color="sec">{`console.log('Hello world Every thing is OK')`}</Code>
    </Paper>
  )
}
