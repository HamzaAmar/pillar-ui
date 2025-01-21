import { Button } from '@pillar-ui/core'

export function ButtonTransform() {
  return (
    <>
      <Button transform="uppercase">hello world</Button>
      <Button transform="lowercase">hello world</Button>
      <Button transform="capitalize-once">hello world</Button>
      <Button transform="capitalize">hello world</Button>
    </>
  )
}
