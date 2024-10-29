import { Avatar, Button, Flex, Paper } from '@pillar-ui/core'

const Home = () => {
  return (
    <Paper p="5">
      <Flex gap="4" items="center">
        <Avatar title="Hel" />
        <Button color="d">Reset</Button>
        <Button>Add</Button>
      </Flex>
    </Paper>
  )
}

export default Home
