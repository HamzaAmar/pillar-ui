import { Alert } from '@pillar-ui/core'

export const AlertVariant = () => {
  return (
    <>
      <Alert variant="shadow" title="Hello world" />
      <Alert variant="solid" title="Hello world" />
      <Alert variant="mixed" title="Hello world" />
      <Alert variant="soft" title="Hello world" />
      <Alert variant="outline" title="Hello world" />
    </>
  )
}
