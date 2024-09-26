import { Button } from '@pillar-ui/core'

export function ButtonState() {
  return (
    <>
      <Button state="idle" color="s">
        Idle
      </Button>
      <Button state="loading" color="s">
        Loading
      </Button>
      <Button disabled color="s">
        Disabled
      </Button>
    </>
  )
}
