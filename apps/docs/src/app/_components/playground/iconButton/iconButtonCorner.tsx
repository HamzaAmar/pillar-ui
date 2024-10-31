import { IconButton, Paper } from '@pillar-ui/core'
import { Netflex } from '@pillar-ui/icons'

export function IconButtonCorner() {
  return (
    <>
      <IconButton title="Heelo" icon={<Netflex />} corner="0" />
      <IconButton title="Heelo" icon={<Netflex />} corner="1" />
      <IconButton title="Heelo" icon={<Netflex />} corner="2" />
      <IconButton title="Heelo" icon={<Netflex />} corner="3" />
      <IconButton title="Heelo" icon={<Netflex />} corner="4" />
      <IconButton title="Heelo" icon={<Netflex />} corner="5" />
      <IconButton title="Heelo" icon={<Netflex />} corner="circle" />
      <IconButton title="Heelo" icon={<Netflex />} corner="full" />
    </>
  )
}
