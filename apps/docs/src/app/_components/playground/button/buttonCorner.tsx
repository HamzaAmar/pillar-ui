import { Button, Flex, IconButton, Paper } from '@pillar-ui/core'
import { ZoomPlus } from '@pillar-ui/icons'

export function ButtonCorner() {
  return (
    <Paper className="playground" border flow="sm" size="4" background="b-3" corner="sm">
      <Flex gap="4" items="center" wrap>
        <Button corner="sharp">Hello World</Button>
        <Button corner="3">Hello World</Button>
        <Button corner="md">Hello World</Button>
        <Button corner="lg">Hello World</Button>
        <Button corner="xl">Hello World</Button>
        <Button corner="circle">Hello World</Button>
        <Button corner="full">Hello World</Button>
      </Flex>

      <Flex gap="4" items="center" wrap>
        <IconButton title="Heelo" icon={<ZoomPlus />} corner="sharp" />
        <IconButton title="Heelo" icon={<ZoomPlus />} corner="3" />
        <IconButton title="Heelo" icon={<ZoomPlus />} corner="md" />
        <IconButton title="Heelo" icon={<ZoomPlus />} corner="lg" />
        <IconButton title="Heelo" icon={<ZoomPlus />} corner="xl" />
        <IconButton title="Heelo" icon={<ZoomPlus />} corner="circle" />
        <IconButton title="Heelo" icon={<ZoomPlus />} corner="full" />
      </Flex>
    </Paper>
  )
}
