import { Close, Maximize, Minimize, Plus, ZoomPlus } from '@pillar-ui/icons'
import { Button, IconButton, Flex, Paper } from '@pillar-ui/core'
import React from 'react'

export function ButtonPlayGround() {
  return <div>Hello</div>
}

const VARIANTS = ['shadow', 'solid', 'mixed', 'soft', 'outline', 'link', 'text'] as const

export function ButtonColors() {
  return (
    <Paper className="playground" border flow="md" p="sm" background="bg-3" corner="sm">
      <Flex gap="sm" items="center" wrap>
        <Button color="dan">Hello World</Button>
        <Button color="war">Hello World</Button>
        <Button color="suc">Hello World</Button>
        <Button color="pri">Hello World</Button>
        <Button color="sec">Hello World</Button>
        <Button color="bg">Hello World</Button>
      </Flex>

      <Flex gap="sm" items="center" wrap>
        <IconButton title="hello" variant="solid" icon={<ZoomPlus />} color="dan" />
        <IconButton title="hello" variant="solid" icon={<ZoomPlus />} color="war" />
        <IconButton title="hello" variant="solid" icon={<ZoomPlus />} color="suc" />
        <IconButton title="hello" variant="solid" icon={<ZoomPlus />} color="pri" />
        <IconButton title="hello" variant="solid" icon={<ZoomPlus />} color="sec" />
        <IconButton title="hello" variant="solid" icon={<ZoomPlus />} color="bg" />
      </Flex>
    </Paper>
  )
}

export function ButtonSizes() {
  return (
    <Paper className="playground" border flow="sm" p="sm" background="bg-3" corner="sm">
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

export function ButtonCorners() {
  return (
    <Paper className="playground" border flow="sm" p="sm" background="bg-3" corner="sm">
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

export function ButtonVariants() {
  return (
    <Paper className="playground" flow="xl" p="sm" background="bg-3" corner="sm">
      {VARIANTS.map((variant) => (
        <Flex key={variant} gap="sm">
          <Button color="suc" variant={variant}>
            Green
          </Button>
          <Button color="war" variant={variant}>
            Orange
          </Button>
          <Button color="dan" variant={variant}>
            Red
          </Button>
          <Button color="sec" variant={variant}>
            Secondary
          </Button>
          <Button color="bg" variant={variant}>
            bg
          </Button>
          <Button color="pri" variant={variant}>
            Primary
          </Button>
        </Flex>
      ))}
    </Paper>
  )
}

export function ButtonIcons() {
  return (
    <Paper className="playground" border flow="sm" p="sm" background="bg-3" corner="sm">
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

export function ButtonIconPosition() {
  return (
    <Paper className="playground" border flow="sm" p="sm" background="bg-3" corner="sm">
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

export function ButtonFluid() {
  return (
    <Paper className="playground" border flow="sm" p="sm" background="bg-3" corner="sm">
      <Button fluid color="dan">
        Hello World
      </Button>
      <Button fluid color="war">
        Hello World
      </Button>
      <Button fluid color="suc">
        Hello World
      </Button>
      <Button fluid color="pri">
        Hello World
      </Button>
      <Button fluid color="sec">
        Hello World
      </Button>
      <Button fluid color="bg">
        Hello World
      </Button>
    </Paper>
  )
}

export function ButtonsState() {
  return (
    <Paper className="playground" as={Flex} items="center" gap="sm" border p="sm" background="bg-3" corner="sm">
      <Button state="idle" color="suc">
        Idle
      </Button>
      <Button state="loading" color="suc">
        Loading
      </Button>
      <Button disabled color="suc">
        Disabled
      </Button>
    </Paper>
  )
}

export function ButtonsCustomStyle() {
  return (
    <Paper className="playground" as={Flex} items="center" gap="sm" border p="sm" background="bg-3" corner="sm">
      <Button style={{ background: 'orange' }} state="idle" color="suc">
        Hello world
      </Button>
      <Button className="u_secondary">Hello world</Button>
    </Paper>
  )
}
