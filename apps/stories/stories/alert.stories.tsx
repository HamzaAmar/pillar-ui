import React, { CSSProperties, useState } from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Alert, Button, Flex, Paper } from '@pillar-ui/core'
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
    <Flex gap="sm" direction="column">
      <AlertBase color="danger" />
      <AlertBase color="warning" />
      <AlertBase color="success" />
      <AlertBase color="secondary" />
      <AlertBase color="primary" />
      <AlertBase color="surface" />
    </Flex>
  )
}

export const AlertControlled = () => {
  const [open, setOpen] = useState(true)

  function onClose() {
    setOpen((isOpen) => (isOpen ? false : true))
  }
  return (
    <Flex gap="sm" direction="column">
      <Button onClick={onClose}>{open ? 'Hide' : 'Open'} The Alert</Button>
      <AlertBase color="danger" visible={open} onClose={onClose} closable />
    </Flex>
  )
}

export const AlertSizes = () => {
  return (
    <Flex gap="sm" direction="column">
      <AlertBase size="2xs" />
      <AlertBase
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet pariatur voluptatem suscipit deleniti similique, corrupti harum hic eaque quis, cumque, tenetur sunt rerum odit! Neque aspernatur voluptate consectetur assumenda commodi."
        size="2xs"
      />
      <AlertBase size="xs" />
      <AlertBase
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet pariatur voluptatem suscipit deleniti similique, corrupti harum hic eaque quis, cumque, tenetur sunt rerum odit! Neque aspernatur voluptate consectetur assumenda commodi."
        size="xs"
      />
      <AlertBase size="sm" />
      <AlertBase
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet pariatur voluptatem suscipit deleniti similique, corrupti harum hic eaque quis, cumque, tenetur sunt rerum odit! Neque aspernatur voluptate consectetur assumenda commodi."
        size="sm"
      />
      <AlertBase size="md" />
      <AlertBase
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet pariatur voluptatem suscipit deleniti similique, corrupti harum hic eaque quis, cumque, tenetur sunt rerum odit! Neque aspernatur voluptate consectetur assumenda commodi."
        size="md"
      />
      <AlertBase size="lg" />
      <AlertBase
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet pariatur voluptatem suscipit deleniti similique, corrupti harum hic eaque quis, cumque, tenetur sunt rerum odit! Neque aspernatur voluptate consectetur assumenda commodi."
        size="lg"
      />
      <AlertBase size="xl" />
      <AlertBase
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet pariatur voluptatem suscipit deleniti similique, corrupti harum hic eaque quis, cumque, tenetur sunt rerum odit! Neque aspernatur voluptate consectetur assumenda commodi."
        size="xl"
      />
      <AlertBase size="2xl" />
      <AlertBase
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet pariatur voluptatem suscipit deleniti similique, corrupti harum hic eaque quis, cumque, tenetur sunt rerum odit! Neque aspernatur voluptate consectetur assumenda commodi."
        size="2xl"
      />
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

const Variants = ['solid', 'outline', 'soft', 'mixed']

export const AlertVariant = () => {
  return (
    <div className="l_flow__md">
      {Variants.map((variant) => (
        <Flex key={variant} direction="column" gap="sm">
          <AlertBase variant={variant} color="danger" />
        </Flex>
      ))}
    </div>
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

export const AlertAction = () => {
  return (
    <Flex direction="column" gap="sm">
      <AlertBase closable />
      <AlertBase />
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
      <Alert color="danger" title="hello" style={{ backgroundColor: 'red' }} />
      <Alert color="danger" title="hello" style={{ backgroundColor: 'green' }} closable />
      <Alert color="danger" title="hello" style={{ backgroundColor: 'orange' }} variant="outline" />
      <Alert color="danger" title="hello" style={{ backgroundColor: 'purple' }} variant="soft" />
      <Alert color="danger" title="hello" className="u_secondary" />
      <Alert color="danger" title="hello" className="u_secondary" closable />
      <Alert color="danger" title="hello" className="u_secondary" variant="outline" />
      <Alert color="danger" title="hello" className="u_secondary" variant="soft" />
    </Flex>
  )
}

export const AlertIsomerphic = () => {
  return (
    <Flex direction="column" gap="sm">
      <AlertBase as="span" />
      <AlertBase as="article" />
    </Flex>
  )
}

export function AlertCornerDefaults() {
  return (
    <div className="l_flow__sm">
      <Flex direction="column" gap="sm">
        <Paper corner="sharp">
          <AlertBase variant="solid" />
        </Paper>
        <Paper corner="sm">
          <AlertBase variant="solid" />
        </Paper>
        <Paper corner="md">
          <AlertBase variant="solid" />
        </Paper>
        <Paper corner="lg">
          <AlertBase variant="solid" />
        </Paper>
        <AlertBase variant="solid" />
      </Flex>

      <Flex direction="column" gap="sm" style={{ '--alert-corner': '5px' } as CSSProperties}>
        <Paper corner="sharp">
          <AlertBase variant="solid" />
        </Paper>
        <Paper corner="sm">
          <AlertBase variant="solid" />
        </Paper>
        <Paper corner="md">
          <AlertBase variant="solid" />
        </Paper>
        <Paper corner="lg">
          <AlertBase variant="solid" />
        </Paper>
        <AlertBase variant="solid" />
      </Flex>
      <Flex direction="column" gap="sm" style={{ '--alert-corner': '10px' } as CSSProperties}>
        <Paper corner="sharp">
          <AlertBase variant="solid" />
        </Paper>
        <Paper corner="sm">
          <AlertBase variant="solid" />
        </Paper>
        <Paper corner="md">
          <AlertBase variant="solid" />
        </Paper>
        <Paper corner="lg">
          <AlertBase variant="solid" />
        </Paper>
        <AlertBase variant="solid" />
      </Flex>

      <Flex direction="column" gap="sm" style={{ '--alert-corner': '20px' } as CSSProperties}>
        <Paper corner="sharp">
          <AlertBase variant="solid" />
        </Paper>
        <Paper corner="sm">
          <AlertBase variant="solid" />
        </Paper>
        <Paper corner="md">
          <AlertBase variant="solid" />
        </Paper>
        <Paper corner="lg">
          <AlertBase variant="solid" />
        </Paper>
        <AlertBase variant="solid" />
      </Flex>
    </div>
  )
}

export const Playground: StoryObj<typeof Alert> = {}
