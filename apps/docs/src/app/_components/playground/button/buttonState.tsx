import { Button } from '@pillar-ui/core'

export function ButtonState() {
  return (
    <>
      <Button state="idle" color="suc">
        Idle
      </Button>
      <Button state="loading" color="suc">
        Loading
      </Button>
      <Button disabled color="suc">
        Disabled
      </Button>
    </>
  )
}
