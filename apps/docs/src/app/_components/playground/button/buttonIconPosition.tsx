import { Button } from '@pillar-ui/core'
import { Close } from '@pillar-ui/icons'

export function ButtonIconPosition() {
  return (
    <>
      <Button icon={<Close />}>Hello World</Button>
      <Button icon={<Close />} iconPosition="end">
        Hello World
      </Button>
      <Button icon={<Close />} iconPosition="start">
        Hello World
      </Button>
    </>
  )
}
