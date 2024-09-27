import { Button, Flex, IconButton } from '@pillar-ui/core'
import { ZoomPlus } from '@pillar-ui/icons'

export function ButtonSize() {
  return (
    <>
      <Flex gap="4" items="center" wrap>
        <Button size="1">Hello World</Button>
        <Button size="2">Hello World</Button>
        <Button size="3">Hello World</Button>
        <Button size="5">Hello World</Button>
        <Button size="6">Hello World</Button>
        <Button size="7">Hello World</Button>
        <Button size="8">Hello World</Button>
        <Button size="9">Hello World</Button>
      </Flex>

      <Flex gap="4" items="center" wrap>
        <IconButton title="Heelo" icon={<ZoomPlus />} size="2" />
        <IconButton title="Heelo" icon={<ZoomPlus />} size="3" />
        <IconButton title="Heelo" icon={<ZoomPlus />} size="3" />
        <IconButton title="Heelo" icon={<ZoomPlus />} size="5" />
        <IconButton title="Heelo" icon={<ZoomPlus />} size="6" />
        <IconButton title="Heelo" icon={<ZoomPlus />} size="7" />
        <IconButton title="Heelo" icon={<ZoomPlus />} size="8" />
      </Flex>
    </>
  )
}
