import { Avatar, AvatarGroup, Button, Chips, Flex, Paper } from '@pillar-ui/core'

export default function Home() {
  return (
    <main className="Sf-3">
      <Paper p="5" flow="5">
        <Flex gap="4">
          <Chips>Hello</Chips>
          <Chips>Hello</Chips>
          <Chips>Hello</Chips>
          <Chips>Hello</Chips>
          <Chips>Hello</Chips>
        </Flex>
        <Button>Hello</Button>
      </Paper>

      <AvatarGroup corner="0" layout="grid">
        <Avatar title="Hello World" />
        <Avatar title="Hello World" />
      </AvatarGroup>
    </main>
  )
}
