import { Button } from '@pillar-ui/core'

export function ButtonState() {
  return (
    <>
      <Button state="idle" color="su">
        Idle
      </Button>
      <Button state="loading" color="su">
        Loading
      </Button>
      <Button disabled color="su">
        Disabled
      </Button>
    </>
  )
}
