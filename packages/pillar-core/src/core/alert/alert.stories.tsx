import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Alert, Flex } from '..'

export default {
  title: 'Components/Core/Alert',
  component: Alert,
  args: {
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima illum quidem facilis harum velit veritatis! Voluptatum, quos ipsa! Magnam exercitationem repellat, aspernatur porro optio tempore vero dolorem suscipit vitae delectus.',
  },
} as ComponentMeta<typeof Alert>

export const AlertColor = () => {
  return (
    <Flex gap="sm" direction="column">
      <Alert
        type="danger"
        title="hello"
        message="hello world my name is hamza miloud amar iam a full stack javascript developer"
      />
      <Alert
        type="warning"
        title="hello"
        message="hello world my name is hamza miloud amar iam a full stack javascript developer"
      />
      <Alert
        type="success"
        title="hello"
        message="hello world my name is hamza miloud amar iam a full stack javascript developer"
      />
      <Alert
        type="info"
        title="hello"
        message="hello world my name is hamza miloud amar iam a full stack javascript developer"
      />
    </Flex>
  )
}

export const AlertCorner = () => {
  return (
    <Flex gap="sm" direction="column">
      <Alert
        corner="2xs"
        title="hello"
        message="hello world my name is hamza miloud amar iam a full stack javascript developer"
      />
      <Alert
        corner="xs"
        title="hello"
        message="hello world my name is hamza miloud amar iam a full stack javascript developer"
      />
      <Alert
        corner="sm"
        title="hello"
        message="hello world my name is hamza miloud amar iam a full stack javascript developer"
      />
      <Alert
        corner="md"
        title="hello"
        message="hello world my name is hamza miloud amar iam a full stack javascript developer"
      />
      <Alert
        corner="lg"
        title="hello"
        message="hello world my name is hamza miloud amar iam a full stack javascript developer"
      />
      <Alert
        corner="xl"
        title="hello"
        message="hello world my name is hamza miloud amar iam a full stack javascript developer"
      />
      <Alert
        corner="2xl"
        title="hello"
        message="hello world my name is hamza miloud amar iam a full stack javascript developer"
      />
      <Alert
        corner="sharp"
        title="hello"
        message="hello world my name is hamza miloud amar iam a full stack javascript developer"
      />
      <Alert
        corner="full"
        title="hello"
        message="hello world my name is hamza miloud amar iam a full stack javascript developer"
      />
    </Flex>
  )
}

export const AlertVariant = () => {
  return (
    <Flex direction="column" gap="sm">
      <Alert
        variant="solid"
        title="hello"
        message="hello world my name is hamza miloud amar iam a full stack javascript developer"
      />
      <Alert
        variant="outline"
        title="hello"
        message="hello world my name is hamza miloud amar iam a full stack javascript developer"
      />
      <Alert
        variant="soft"
        title="hello"
        message="hello world my name is hamza miloud amar iam a full stack javascript developer"
      />
    </Flex>
  )
}

export const AlertIcon = () => {
  return (
    <Flex direction="column" gap="sm">
      <Alert
        type="danger"
        showIcon
        title="hello"
        message="hello world my name is hamza miloud amar iam a full stack javascript developer"
      />
      <Alert
        type="success"
        showIcon
        title="hello"
        message="hello world my name is hamza miloud amar iam a full stack javascript developer"
      />
      <Alert
        type="warning"
        showIcon
        title="hello"
        message="hello world my name is hamza miloud amar iam a full stack javascript developer"
      />
      <Alert
        type="info"
        showIcon
        title="hello"
        message="hello world my name is hamza miloud amar iam a full stack javascript developer"
      />
    </Flex>
  )
}

export const AlertTitleIcon = () => {
  return (
    <Flex direction="column" gap="sm">
      <Alert type="danger" showIcon title="hello" />
      <Alert type="success" showIcon title="hello" />
      <Alert type="warning" showIcon title="hello" />
      <Alert type="info" showIcon title="hello" />
    </Flex>
  )
}

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />
export const Playground = Template.bind({})
Playground.args = {}
