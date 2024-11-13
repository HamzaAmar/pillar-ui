import { IconButton } from '@pillar-ui/core'
import { UserAdd } from '@pillar-ui/icons'

export function IconButtonDisabled() {
  return (
    <>
      <IconButton title="Hello" icon={<UserAdd />} />
      <IconButton title="Hello" icon={<UserAdd />} disabled />
    </>
  )
}
