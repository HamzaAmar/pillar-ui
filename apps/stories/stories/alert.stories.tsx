import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Alert, Flex } from '@pillar/core'
import { Check, CircleCheck, CircleInfo, CircleWarning } from '@pillar/icons'

export default {
  title: 'Components/Alert',
  component: Alert,
  args: {
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima illum quidem facilis harum velit veritatis! Voluptatum, quos ipsa! Magnam exercitationem repellat, aspernatur porro optio tempore vero dolorem suscipit vitae delectus.',
  },
} as ComponentMeta<typeof Alert>

function AlertBase(props) {
  return (
    <Alert
      {...props}
      title="hello"
      message="hello world my name is hamza miloud amar iam a full stack javascript developer"
    />
  )
}

export const AlertColors = () => {
  return (
    <Flex gap="sm" direction="column">
      <AlertBase color="danger" />
      <AlertBase color="brown" />
      <AlertBase color="warning" />
      <AlertBase color="success" />
      <AlertBase color="purple" />
      <AlertBase color="violet" />
      <AlertBase color="indigo" />
      <AlertBase color="slate" />
    </Flex>
  )
}

export const AlertSizes = () => {
  return (
    <Flex gap="sm" direction="column">
      <AlertBase size="3xs" />
      <AlertBase size="2xs" />
      <AlertBase size="xs" />
      <AlertBase size="sm" />
      <AlertBase size="md" />
      <AlertBase size="lg" />
      <AlertBase size="xl" />
      <AlertBase size="2xl" />
      <AlertBase size="3xl" />
    </Flex>
  )
}

export const AlertCorner = () => {
  return (
    <Flex gap="sm" direction="column">
      <AlertBase corner="sharp" />
      <AlertBase corner="xs" />
      <AlertBase corner="sm" />
      <AlertBase corner="md" />
      <AlertBase corner="lg" />
      <AlertBase corner="xl" />
      <AlertBase corner="full" />
    </Flex>
  )
}

export const AlertVariant = () => {
  return (
    <Flex direction="column" gap="sm">
      <AlertBase variant="solid" />
      <AlertBase variant="outline" />
      <AlertBase variant="soft" />
    </Flex>
  )
}

export const AlertIcon = () => {
  return (
    <Flex direction="column" gap="sm">
      <AlertBase icon={<CircleWarning width="20" />} color="danger" />
      <AlertBase icon={<CircleCheck width="20" />} color="success" />
      <AlertBase icon={<CircleWarning width="20" />} color="warning" />
      <AlertBase icon={<CircleInfo width="20" />} color="info" />
    </Flex>
  )
}

export const AlertInline = () => {
  return (
    <Flex direction="column" gap="sm">
      <AlertBase inline />
      <AlertBase inline />
      <AlertBase inline />
      <AlertBase inline />
      <AlertBase inline icon={<CircleWarning width="20" />} />
      <AlertBase inline closable />
      <AlertBase inline icon={<CircleWarning width="20" />} closable />
    </Flex>
  )
}

export const AlertTitleIcon = () => {
  return (
    <Flex direction="column" gap="sm">
      <Alert color="danger" title="hello" />
      <Alert color="success" message="hello world something is wrong in the app here we go" />
      <Alert color="warning" icon={<CircleWarning width="20" />} title="hello" />
      <Alert
        color="warning"
        icon={<CircleWarning width="20" />}
        message="hello world something is wrong in the app here we go"
      />
      <Alert
        color="warning"
        icon={<CircleWarning width="20" />}
        title="hello"
        message="hello world something is wrong in the app here we go"
      />
    </Flex>
  )
}

export const AlertCustomStyle = () => {
  return (
    <Flex direction="column" gap="sm">
      <Alert color="danger" title="hello" style={{ background: 'green' }} />
      <Alert color="danger" title="hello" className="u_violet" />
    </Flex>
  )
}

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />
export const Playground = Template.bind({})
Playground.args = {}
