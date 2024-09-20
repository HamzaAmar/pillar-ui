import { Alert } from '@pillar-ui/core'

export const AlertVariant = () => {
  return (
    <>
      <Alert title="Danger Here" variant="solid" />
      <Alert title="Danger Here" variant="outline" />
      <Alert title="Danger Here" variant="soft" />
      <Alert title="Danger Here" variant="mixed" />
    </>
  )
}
