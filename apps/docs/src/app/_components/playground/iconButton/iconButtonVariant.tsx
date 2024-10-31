import { IconButton } from '@pillar-ui/core'
import { ZoomPlus } from '@pillar-ui/icons'

export function IconButtonVariant() {
  return (
    <>
      <IconButton title="Hello" color="d" variant="shadow" icon={<ZoomPlus />} />
      <IconButton title="Hello" color="d" variant="solid" icon={<ZoomPlus />} />
      <IconButton title="Hello" color="d" variant="mixed" icon={<ZoomPlus />} />
      <IconButton title="Hello" color="d" variant="soft" icon={<ZoomPlus />} />
      <IconButton title="Hello" color="d" variant="outline" icon={<ZoomPlus />} />
      <IconButton title="Hello" color="d" variant="text" icon={<ZoomPlus />} />
    </>
  )
}
