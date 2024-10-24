import { IconButton } from '@pillar-ui/core'
import { ZoomPlus } from '@pillar-ui/icons'

export function ButtonVariant() {
  return (
    <>
      <IconButton title="Hello" variant="link" icon={<ZoomPlus />} />
      <IconButton title="Hello" variant="mixed" icon={<ZoomPlus />} />
      <IconButton title="Hello" variant="outline" icon={<ZoomPlus />} />
      <IconButton title="Hello" variant="shadow" icon={<ZoomPlus />} />
      <IconButton title="Hello" variant="soft" icon={<ZoomPlus />} />
      <IconButton title="Hello" variant="solid" icon={<ZoomPlus />} />
      <IconButton title="Hello" variant="text" icon={<ZoomPlus />} />
    </>
  )
}
