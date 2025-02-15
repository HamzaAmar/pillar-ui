import { Avatar, Chips, Flex, Grid, Paper, Text } from '@pillar-ui/core'

interface UserProps {
  id: number
  online?: boolean
  name?: string
  email?: string
  job?: string
}

const USERS: UserProps[] = [
  {
    id: 1,
    name: 'Hamza Miloud Amar',
    email: 'hamza@gmail.com',
    job: 'Frontend Developer',
    online: true,
  },
  {
    id: 2,
    name: 'John Doe',
    email: 'john-doe@gmail.com',
    job: 'Backend Developer',
    online: false,
  },
]

const User = ({ online = false, name, email, job }: UserProps) => {
  const COLOR = online ? 'su' : 'd'
  const STATUS = online ? 'Online' : 'Offline'
  return (
    <Flex as={Paper} p="4" corner="2" border items="center" justify="between" gap="5">
      <Flex gap="3">
        <Avatar title="John Doe" size="4" />
        <div>
          <Text size="4" weight="5">
            {name}
          </Text>
          <Text size="3" color="b" low>
            {email}
          </Text>
        </div>
      </Flex>
      <Flex gap="2" items="center">
        <Chips color={COLOR}>{STATUS}</Chips>
        <Chips color="b" variant="soft">
          {job}
        </Chips>
      </Flex>
    </Flex>
  )
}

export const CardUser = () => {
  return (
    <Grid cols={{ default: '1fr', md: '1fr 1fr' }} gap="4" items="center">
      {USERS.map((user) => (
        <User key={user.id} {...user} />
      ))}
    </Grid>
  )
}
