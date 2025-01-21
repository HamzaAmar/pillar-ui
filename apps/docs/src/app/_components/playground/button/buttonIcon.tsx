import { Button } from '@pillar-ui/core'
import { Close } from '@pillar-ui/icons'

export function ButtonIcon() {
  return (
    <>
      <Button>Hello World</Button>
      <Button icon={<Close />}>Hello World</Button>
    </>
  )
}
