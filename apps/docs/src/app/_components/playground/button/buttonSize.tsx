import { Button, Flex, IconButton } from '@pillar-ui/core'
import { ZoomPlus } from '@pillar-ui/icons'

export function ButtonSize() {
  return (
    <>
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
    </>
  )
}
