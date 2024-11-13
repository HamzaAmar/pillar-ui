import { IconButton } from '@pillar-ui/core'
import { Netflex } from '@pillar-ui/icons'

export function IconButtonState() {
  return (
    <>
      <IconButton title="Hello" icon={<Netflex />} state="idle" />
      <IconButton title="Hello" icon={<Netflex />} state="loading" />
    </>
  )
}
