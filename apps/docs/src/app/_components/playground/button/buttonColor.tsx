import { Button, Flex, IconButton } from '@pillar-ui/core'
import { ZoomPlus } from '@pillar-ui/icons'

export function ButtonColor() {
  return (
    <>
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
    </>
  )
}
