import { Button, Flex, IconButton } from '@pillar-ui/core'
import { ZoomPlus } from '@pillar-ui/icons'

export function ButtonSize() {
  return (
    <>
      <Flex gap="4" items="center" wrap>
        <Button size="3xs">Hello World</Button>
        <Button gap="2">Hello World</Button>
        <Button gap="3">Hello World</Button>
        <Button gap="5">Hello World</Button>
        <Button gap="6">Hello World</Button>
        <Button gap="7">Hello World</Button>
        <Button gap="8">Hello World</Button>
        <Button gap="9">Hello World</Button>
      </Flex>

      <Flex gap="4" items="center" wrap>
        <IconButton title="Heelo" icon={<ZoomPlus />} gap="2" />
        <IconButton title="Heelo" icon={<ZoomPlus />} gap="3" />
        <IconButton title="Heelo" icon={<ZoomPlus />} gap="3" />
        <IconButton title="Heelo" icon={<ZoomPlus />} gap="5" />
        <IconButton title="Heelo" icon={<ZoomPlus />} gap="6" />
        <IconButton title="Heelo" icon={<ZoomPlus />} gap="7" />
        <IconButton title="Heelo" icon={<ZoomPlus />} gap="8" />
      </Flex>
    </>
  )
}
