import { Button, Flex, IconButton, Paper } from '@pillar-ui/core'
import { ZoomPlus } from '@pillar-ui/icons'

export function ButtonCorner() {
  return (
    <Paper className="playground" border flow="4" background="b-3" corner="2">
      <Flex gap="4" items="center" wrap>
        <Button corner="0">Hello World</Button>
        <Button corner="3">Hello World</Button>
        <Button corner="3">Hello World</Button>
        <Button corner="4">Hello World</Button>
        <Button corner="5">Hello World</Button>
        <Button corner="circle">Hello World</Button>
        <Button corner="full">Hello World</Button>
      </Flex>

      <Flex gap="4" items="center" wrap>
        <IconButton title="Heelo" icon={<ZoomPlus />} corner="0" />
        <IconButton title="Heelo" icon={<ZoomPlus />} corner="3" />
        <IconButton title="Heelo" icon={<ZoomPlus />} corner="3" />
        <IconButton title="Heelo" icon={<ZoomPlus />} corner="4" />
        <IconButton title="Heelo" icon={<ZoomPlus />} corner="5" />
        <IconButton title="Heelo" icon={<ZoomPlus />} corner="circle" />
        <IconButton title="Heelo" icon={<ZoomPlus />} corner="full" />
      </Flex>
    </Paper>
  )
}
