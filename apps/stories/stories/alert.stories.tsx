import React, { CSSProperties, useState } from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Alert, Button, Flex, Heading } from '@pillar-ui/core'
import { Check, CircleCheck, CircleInfo, CircleWarning } from '@pillar-ui/icons'

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  args: {
    title: 'hello',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima illum quidem facilis harum velit veritatis! Voluptatum, quos ipsa! Magnam exercitationem repellat, aspernatur porro optio tempore vero dolorem suscipit vitae delectus.',
  },
}
export default meta

function AlertBase({
  title = 'hello',
  message = 'hello world my name is hamza miloud amar iam a full stack javascript developer',
  ...rest
}) {
  return <Alert title={title} message={message} {...rest} />
}

export const AlertColors = () => {
  return (
    <Flex gap="4" direction="column">
      <AlertBase color="d" />
      <AlertBase color="w" />
      <AlertBase color="s" />
      <AlertBase color="se" />
      <AlertBase color="p" />
      <AlertBase color="b" />
    </Flex>
  )
}

export const AlertControlled = () => {
  const [open, setOpen] = useState(true)

  function onClose() {
    setOpen((isOpen) => (isOpen ? false : true))
  }
  return (
    <Flex gap="4" direction="column">
      <Button onClick={onClose}>{open ? 'Hide' : 'Open'} The Alert</Button>
      <AlertBase color="d" visible={open} onClose={onClose} closable />
    </Flex>
  )
}

export const AlertSizes = () => {
  return (
    <Flex gap="4" direction="column">
      <AlertBase gap="2" />
      <AlertBase
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet pariatur voluptatem suscipit deleniti similique, corrupti harum hic eaque quis, cumque, tenetur sunt rerum odit! Neque aspernatur voluptate consectetur assumenda commodi."
        gap="2"
      />
      <AlertBase gap="3" />
      <AlertBase
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet pariatur voluptatem suscipit deleniti similique, corrupti harum hic eaque quis, cumque, tenetur sunt rerum odit! Neque aspernatur voluptate consectetur assumenda commodi."
        gap="3"
      />
      <AlertBase size="sm" />
      <AlertBase
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet pariatur voluptatem suscipit deleniti similique, corrupti harum hic eaque quis, cumque, tenetur sunt rerum odit! Neque aspernatur voluptate consectetur assumenda commodi."
        size="sm"
      />
      <AlertBase gap="5" />
      <AlertBase
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet pariatur voluptatem suscipit deleniti similique, corrupti harum hic eaque quis, cumque, tenetur sunt rerum odit! Neque aspernatur voluptate consectetur assumenda commodi."
        gap="5"
      />
      <AlertBase gap="6" />
      <AlertBase
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet pariatur voluptatem suscipit deleniti similique, corrupti harum hic eaque quis, cumque, tenetur sunt rerum odit! Neque aspernatur voluptate consectetur assumenda commodi."
        gap="6"
      />
      <AlertBase gap="7" />
      <AlertBase
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet pariatur voluptatem suscipit deleniti similique, corrupti harum hic eaque quis, cumque, tenetur sunt rerum odit! Neque aspernatur voluptate consectetur assumenda commodi."
        gap="7"
      />
      <AlertBase gap="8" />
      <AlertBase
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet pariatur voluptatem suscipit deleniti similique, corrupti harum hic eaque quis, cumque, tenetur sunt rerum odit! Neque aspernatur voluptate consectetur assumenda commodi."
        gap="8"
      />
    </Flex>
  )
}

export const AlertCorner = () => {
  return (
    <Flex gap="4" direction="column">
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

const Variants = ['shadow', 'solid', 'outline', 'soft', 'mixed']

export const AlertVariant = () => {
  return (
    <div className="l_f-md">
      {Variants.map((variant) => (
        <Flex key={variant} direction="column" gap="4">
          <AlertBase variant={variant} color="w" />
        </Flex>
      ))}
    </div>
  )
}

export const AlertIcon = () => {
  return (
    <Flex direction="column" gap="4">
      <AlertBase icon={<CircleWarning width="20" />} color="d" />
      <AlertBase icon={<CircleCheck width="20" />} color="s" />
      <AlertBase icon={<CircleWarning width="20" />} color="w" />
      <AlertBase icon={<CircleInfo width="20" />} color="i" />
    </Flex>
  )
}

export const AlertAction = () => {
  return (
    <Flex direction="column" gap="4">
      <AlertBase closable />
      <AlertBase />
    </Flex>
  )
}

export const AlertInline = () => {
  return (
    <Flex direction="column" gap="4">
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
    <Flex direction="column" gap="4">
      <Alert color="d" title="hello" />
      <Alert color="s" message="hello world something is wrong in the app here we go" />
      <Alert color="w" icon={<CircleWarning width="20" />} title="hello" />
      <Alert
        color="w"
        icon={<CircleWarning width="20" />}
        message="hello world something is wrong in the app here we go"
      />
      <Alert
        color="w"
        icon={<CircleWarning width="20" />}
        title="hello"
        message="hello world something is wrong in the app here we go"
      />
    </Flex>
  )
}

export const AlertCustomStyle = () => {
  return (
    <Flex direction="column" gap="4">
      <Alert color="d" title="hello" style={{ backgroundColor: 'red' }} />
      <Alert color="d" title="hello" style={{ backgroundColor: 'green' }} closable />
      <Alert color="d" title="hello" style={{ backgroundColor: 'orange' }} variant="outline" />
      <Alert color="d" title="hello" style={{ backgroundColor: 'purple' }} variant="soft" />
      <Alert color="d" title="hello" className="u_secondary" />
      <Alert color="d" title="hello" className="u_secondary" closable />
      <Alert color="d" title="hello" className="u_secondary" variant="outline" />
      <Alert color="d" title="hello" className="u_secondary" variant="soft" />
    </Flex>
  )
}

export const AlertIsomerphic = () => {
  return (
    <Flex direction="column" gap="4">
      <AlertBase as="span" />
      <AlertBase as="article" />
    </Flex>
  )
}

export function AlertCornerDefaults() {
  return (
    <div className="l_f-sm">
      <Heading>Alert Corner 20px corner</Heading>
      <Flex direction="column" gap="4" style={{ '--alert-rad': '20px' } as CSSProperties}>
        <AlertBase variant="solid" />
        <AlertBase variant="soft" />
        <AlertBase variant="outline" />
        <AlertBase variant="text" />
      </Flex>
    </div>
  )
}

export const Playground: StoryObj<typeof Alert> = {}
