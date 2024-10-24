import { IconButton, Paper } from '@pillar-ui/core'
import { ZoomPlus } from '@pillar-ui/icons'

export function ButtonCorner() {
  return (
    <>
      <IconButton title="Heelo" icon={<ZoomPlus />} corner="0" />
      <IconButton title="Heelo" icon={<ZoomPlus />} corner="1" />
      <IconButton title="Heelo" icon={<ZoomPlus />} corner="2" />
      <IconButton title="Heelo" icon={<ZoomPlus />} corner="3" />
      <IconButton title="Heelo" icon={<ZoomPlus />} corner="4" />
      <IconButton title="Heelo" icon={<ZoomPlus />} corner="5" />
      <IconButton title="Heelo" icon={<ZoomPlus />} corner="circle" />
      <IconButton title="Heelo" icon={<ZoomPlus />} corner="full" />
    </>
  )
}
