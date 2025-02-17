import React, { CSSProperties, useState } from 'react'
import { Meta } from '@storybook/react'
import { Alert, Button, Flex, Heading } from '@pillar-ui/core'
import { CircleInfo, CircleWarning } from '@pillar-ui/icons'

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  args: {
    title: 'hello',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima illum quidem facilis harum velit veritatis! Voluptatum, quos ipsa! Magnam exercitationem repellat, aspernatur porro optio tempore vero dolorem suscipit vitae delectus.',
  },
  argTypes: {
    color: ['red', 'blue'],
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
    <Flex gap="4" direction="col">
      <AlertBase color="d" as="span" />
      <AlertBase color="w" />
      <AlertBase color="su" />
      <AlertBase color="se" />
      <AlertBase color="p" />
      <AlertBase color="b" />
      <AlertBase color="i" />
    </Flex>
  )
}

export const AlertControlled = () => {
  const [open, setOpen] = useState(true)

  function onClose() {
    setOpen((isOpen) => (isOpen ? false : true))
  }
  return (
    <Flex gap="4" direction="col">
      <Button onClick={onClose}>{open ? 'Hide' : 'Open'} The Alert</Button>
      <AlertBase color="d" visible={open} onClose={onClose} closable />
    </Flex>
  )
}

export const AlertSizes = () => {
  return (
    <Flex gap="4" direction="col">
      <AlertBase size="2" />
      <AlertBase
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet pariatur voluptatem suscipit deleniti similique, corrupti harum hic eaque quis, cumque, tenetur sunt rerum odit! Neque aspernatur voluptate consectetur assumenda commodi."
        size="2"
      />
      <AlertBase size="3" />
      <AlertBase
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet pariatur voluptatem suscipit deleniti similique, corrupti harum hic eaque quis, cumque, tenetur sunt rerum odit! Neque aspernatur voluptate consectetur assumenda commodi."
        size="3"
      />
      <AlertBase size="4" />
      <AlertBase
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet pariatur voluptatem suscipit deleniti similique, corrupti harum hic eaque quis, cumque, tenetur sunt rerum odit! Neque aspernatur voluptate consectetur assumenda commodi."
        size="4"
      />
      <AlertBase size="5" />
      <AlertBase
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet pariatur voluptatem suscipit deleniti similique, corrupti harum hic eaque quis, cumque, tenetur sunt rerum odit! Neque aspernatur voluptate consectetur assumenda commodi."
        size="5"
      />
      <AlertBase size="6" />
      <AlertBase
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet pariatur voluptatem suscipit deleniti similique, corrupti harum hic eaque quis, cumque, tenetur sunt rerum odit! Neque aspernatur voluptate consectetur assumenda commodi."
        size="6"
      />
      <AlertBase size="7" />
      <AlertBase
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet pariatur voluptatem suscipit deleniti similique, corrupti harum hic eaque quis, cumque, tenetur sunt rerum odit! Neque aspernatur voluptate consectetur assumenda commodi."
        size="7"
      />
      <AlertBase size="8" />
      <AlertBase
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet pariatur voluptatem suscipit deleniti similique, corrupti harum hic eaque quis, cumque, tenetur sunt rerum odit! Neque aspernatur voluptate consectetur assumenda commodi."
        size="8"
      />

      <Flex direction="col" gap="4" style={{ '--al-size': '20px' } as CSSProperties}>
        <AlertBase title="Defautl Size 20px" />
      </Flex>
    </Flex>
  )
}

export const AlertCorner = () => {
  return (
    <Flex gap="4" direction="col">
      <AlertBase corner="0" />
      <AlertBase corner="3" />
      <AlertBase corner="2" />
      <AlertBase corner="3" />
      <AlertBase corner="4" />
      <AlertBase corner="5" />
      <AlertBase corner="full" />

      <Flex direction="col" gap="4" style={{ '--al-rad': '20px' } as CSSProperties}>
        <AlertBase title="Defautl Size 20px" />
      </Flex>
    </Flex>
  )
}

export const AlertVariant = () => {
  return (
    <div className="Sf-4">
      <Flex direction="col" gap="4">
        <AlertBase variant="shadow" color="w" />
        <AlertBase variant="solid" color="w" />
        <AlertBase variant="outline" color="w" />
        <AlertBase variant="soft" color="w" />
        <AlertBase variant="mixed" color="w" />
      </Flex>
    </div>
  )
}

export const AlertIcon = () => {
  return (
    <Flex direction="col" gap="4">
      <AlertBase icon={<CircleWarning width="16" />} />
      <AlertBase icon={<CircleWarning width="20" />} />
      <AlertBase icon={<CircleInfo width="36" />} />
    </Flex>
  )
}

export const AlertAction = () => {
  return (
    <Flex direction="col" gap="4">
      <AlertBase closable />
      <AlertBase
        closable
        action={
          <Button variant="mixed" color="d" size="3">
            Close
          </Button>
        }
      />
      <AlertBase />
    </Flex>
  )
}

export const AlertInline = () => {
  return (
    <Flex direction="col" gap="4">
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
    <Flex direction="col" gap="4">
      <Alert color="d" title="hello" />
      <Alert color="su" message="hello world something is wrong in the app here we go" />
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
