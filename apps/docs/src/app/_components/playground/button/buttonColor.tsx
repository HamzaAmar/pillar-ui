import { Button, Flex, IconButton } from '@pillar-ui/core'
import { ZoomPlus } from '@pillar-ui/icons'

export function ButtonColor() {
  return (
    <>
      <Flex gap="4" items="center" wrap>
        <Button color="d">Hello World</Button>
        <Button color="w">Hello World</Button>
        <Button color="su">Hello World</Button>
        <Button color="p">Hello World</Button>
        <Button color="se">Hello World</Button>
        <Button color="b">Hello World</Button>
      </Flex>

      <Flex gap="4" items="center" wrap>
        <IconButton title="hello" variant="solid" icon={<ZoomPlus />} color="d" />
        <IconButton title="hello" variant="solid" icon={<ZoomPlus />} color="w" />
        <IconButton title="hello" variant="solid" icon={<ZoomPlus />} color="su" />
        <IconButton title="hello" variant="solid" icon={<ZoomPlus />} color="p" />
        <IconButton title="hello" variant="solid" icon={<ZoomPlus />} color="se" />
        <IconButton title="hello" variant="solid" icon={<ZoomPlus />} color="b" />
      </Flex>
    </>
  )
}
