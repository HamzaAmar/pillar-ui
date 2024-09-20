import { Button } from '@pillar-ui/core'
import { Close, Maximize, Minimize } from '@pillar-ui/icons'

export function ButtonIcon() {
  return (
    <>
      <Button icon={<Close />}>Hello World</Button>
      <Button iconPosition="start" icon={<Maximize />}>
        Hello World
      </Button>
      <Button iconPosition="end" icon={<Minimize />}>
        Hello World
      </Button>
    </>
  )
}
