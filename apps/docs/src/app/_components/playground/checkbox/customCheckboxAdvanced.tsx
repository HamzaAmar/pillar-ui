import { Avatar, Badge, Chips, CustomCheckbox, Flex, CheckboxGroup, Text } from '@pillar-ui/core'
import React from 'react'

interface UserProps {
  online?: boolean
  name?: string
  email?: string
  job?: string
}

const User = ({ online = false, name, email, job }: UserProps) => {
  return (
    <Flex items="center" justify="between" gap="5">
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
        <Chips>{online ? 'Online' : 'Offline'}</Chips>
        <Chips color="b" variant="soft">
          {job}
        </Chips>
      </Flex>
    </Flex>
  )
}

export const CustomCheckboxAdvanced = () => {
  return (
    <CheckboxGroup legend="Choose Your Best option" name="hello" direction="row">
      <CustomCheckbox>
        <User name="John Doe" email="john@doe.com" job="AI engineer" online />
      </CustomCheckbox>
      <CustomCheckbox>
        <User name="Hamza Miloud" email="hamza@gmail.com" job="Frontend Developer" online={false} />
      </CustomCheckbox>
    </CheckboxGroup>
  )
}
