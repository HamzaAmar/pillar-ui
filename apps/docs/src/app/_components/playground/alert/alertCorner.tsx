import { Alert } from '@pillar-ui/core'

export const AlertCorner = () => {
  return (
    <>
      <Alert title="Success!" corner="sharp" />
      <Alert title="Success!" corner="3" />
      <Alert title="Success!" corner="md" />
      <Alert title="Success!" corner="lg" />
      <Alert title="Success!" corner="xl" />
      <Alert title="Success!" corner="full" />
    </>
  )
}
