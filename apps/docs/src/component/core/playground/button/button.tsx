import { Close, Maximize, Minimize, Plus, ZoomPlus } from '@pillar-ui/icons'
import { Button, IconButton, Flex, Paper } from '@pillar-ui/core'
import React from 'react'

export function ButtonPlayGround() {
  return <div>Hello</div>
}

const VARIANTS = ['shadow', 'solid', 'mixed', 'soft', 'outline', 'link', 'text'] as const

function ButtonColors() {
  return (
    <Paper className="playground" borderColor="opacity-6" flow="md" p="sm" background="surface-3" corner="sm">
      <Flex gap="sm" items="center" wrap>
        <Button color="danger">Hello World</Button>
        <Button color="warning">Hello World</Button>
        <Button color="success">Hello World</Button>
        <Button color="primary">Hello World</Button>
        <Button color="secondary">Hello World</Button>
        <Button color="surface">Hello World</Button>
      </Flex>

      <Flex gap="sm" items="center" wrap>
        <IconButton title="hello" variant="solid" icon={<ZoomPlus />} color="danger" />
        <IconButton title="hello" variant="solid" icon={<ZoomPlus />} color="warning" />
        <IconButton title="hello" variant="solid" icon={<ZoomPlus />} color="success" />
        <IconButton title="hello" variant="solid" icon={<ZoomPlus />} color="primary" />
        <IconButton title="hello" variant="solid" icon={<ZoomPlus />} color="secondary" />
        <IconButton title="hello" variant="solid" icon={<ZoomPlus />} color="surface" />
      </Flex>
    </Paper>
  )
}

function ButtonSizes() {
  return (
    <Paper className="playground" borderColor="opacity-6" flow="sm" p="sm" background="surface-3" corner="sm">
      <Flex gap="sm" items="center" wrap>
        <Button size="3xs">Hello World</Button>
        <Button size="2xs">Hello World</Button>
        <Button size="xs">Hello World</Button>
        <Button size="md">Hello World</Button>
        <Button size="lg">Hello World</Button>
        <Button size="xl">Hello World</Button>
        <Button size="2xl">Hello World</Button>
        <Button size="3xl">Hello World</Button>
      </Flex>

      <Flex gap="sm" items="center" wrap>
        <IconButton title="Heelo" icon={<ZoomPlus />} size="2xs" />
        <IconButton title="Heelo" icon={<ZoomPlus />} size="xs" />
        <IconButton title="Heelo" icon={<ZoomPlus />} size="xs" />
        <IconButton title="Heelo" icon={<ZoomPlus />} size="md" />
        <IconButton title="Heelo" icon={<ZoomPlus />} size="lg" />
        <IconButton title="Heelo" icon={<ZoomPlus />} size="xl" />
        <IconButton title="Heelo" icon={<ZoomPlus />} size="2xl" />
      </Flex>
    </Paper>
  )
}

function ButtonCorners() {
  return (
    <Paper className="playground" borderColor="opacity-6" flow="sm" p="sm" background="surface-3" corner="sm">
      <Flex gap="sm" items="center" wrap>
        <Button corner="sharp">Hello World</Button>
        <Button corner="xs">Hello World</Button>
        <Button corner="md">Hello World</Button>
        <Button corner="lg">Hello World</Button>
        <Button corner="xl">Hello World</Button>
        <Button corner="circle">Hello World</Button>
        <Button corner="full">Hello World</Button>
      </Flex>

      <Flex gap="sm" items="center" wrap>
        <IconButton title="Heelo" icon={<ZoomPlus />} corner="sharp" />
        <IconButton title="Heelo" icon={<ZoomPlus />} corner="xs" />
        <IconButton title="Heelo" icon={<ZoomPlus />} corner="md" />
        <IconButton title="Heelo" icon={<ZoomPlus />} corner="lg" />
        <IconButton title="Heelo" icon={<ZoomPlus />} corner="xl" />
        <IconButton title="Heelo" icon={<ZoomPlus />} corner="circle" />
        <IconButton title="Heelo" icon={<ZoomPlus />} corner="full" />
      </Flex>
    </Paper>
  )
}

function ButtonVariants() {
  return (
    <Paper className="playground" flow="xl" p="sm" background="surface-3" corner="sm">
      {VARIANTS.map((variant) => (
        <Flex key={variant} gap="sm">
          <Button color="success" variant={variant}>
            Green
          </Button>
          <Button color="warning" variant={variant}>
            Orange
          </Button>
          <Button color="danger" variant={variant}>
            Red
          </Button>
          <Button color="secondary" variant={variant}>
            Secondary
          </Button>
          <Button color="surface" variant={variant}>
            Surface
          </Button>
          <Button color="primary" variant={variant}>
            Primary
          </Button>
        </Flex>
      ))}
    </Paper>
  )
}

function ButtonIcons() {
  return (
    <Paper className="playground" borderColor="opacity-6" flow="sm" p="sm" background="surface-3" corner="sm">
      <Flex gap="sm" items="center" wrap>
        <Button icon={<Close />}>Hello World</Button>
        <Button icon={<Maximize />}>Hello World</Button>
        <Button icon={<Minimize />}>Hello World</Button>
      </Flex>

      <Flex gap="sm" items="center" wrap>
        <IconButton icon={<Close />} title="Close Modal" />
        <IconButton icon={<Maximize />} title="Active Picture In Picture Mode" />
        <IconButton icon={<Minimize />} title="disactive Picture In Picture Mode" />
      </Flex>
    </Paper>
  )
}

function ButtonIconPosition() {
  return (
    <Paper className="playground" borderColor="opacity-6" flow="sm" p="sm" background="surface-3" corner="sm">
      <Flex gap="sm" items="center" wrap>
        <Button icon={<Close />} iconPosition="end">
          Hello World
        </Button>
        <Button icon={<Maximize />}>Hello World</Button>
        <Button icon={<Minimize />} iconPosition="end">
          Hello World
        </Button>
      </Flex>

      <Flex gap="sm" items="center" wrap>
        <IconButton icon={<Close />} title="Close Modal" />
        <IconButton icon={<Maximize />} title="Active Picture In Picture Mode" />
        <IconButton icon={<Minimize />} title="disactive Picture In Picture Mode" />
      </Flex>
    </Paper>
  )
}

function ButtonFluid() {
  return (
    <Paper className="playground" borderColor="opacity-6" flow="sm" p="sm" background="surface-3" corner="sm">
      <Button fluid color="danger">
        Hello World
      </Button>
      <Button fluid color="warning">
        Hello World
      </Button>
      <Button fluid color="success">
        Hello World
      </Button>
      <Button fluid color="primary">
        Hello World
      </Button>
      <Button fluid color="secondary">
        Hello World
      </Button>
      <Button fluid color="surface">
        Hello World
      </Button>
    </Paper>
  )
}

function ButtonsState() {
  return (
    <Paper
      className="playground"
      as={Flex}
      items="center"
      gap="sm"
      borderColor="opacity-6"
      p="sm"
      background="surface-3"
      corner="sm"
    >
      <Button state="idle" color="success">
        Idle
      </Button>
      <Button state="loading" color="success">
        Loading
      </Button>
      <Button disabled color="success">
        Disabled
      </Button>
    </Paper>
  )
}

function ButtonsCustomStyle() {
  return (
    <Paper
      className="playground"
      as={Flex}
      items="center"
      gap="sm"
      borderColor="opacity-6"
      p="sm"
      background="surface-3"
      corner="sm"
    >
      <Button style={{ background: 'orange' }} state="idle" color="success">
        Hello world
      </Button>
      <Button className="u_secondary">Hello world</Button>
    </Paper>
  )
}

ButtonPlayGround.Colors = ButtonColors
ButtonPlayGround.Sizes = ButtonSizes
ButtonPlayGround.Variants = ButtonVariants
ButtonPlayGround.Corners = ButtonCorners
ButtonPlayGround.Icons = ButtonIcons
ButtonPlayGround.IconPosition = ButtonIconPosition
ButtonPlayGround.Fluid = ButtonFluid
ButtonPlayGround.State = ButtonsState
ButtonPlayGround.CustomStyle = ButtonsCustomStyle
