import { Switch } from '@pillar-ui/core'

export const SwitchDisabled = () => {
  return (
    <>
      <Switch label="Hello" disabled />
      <Switch label="Hello" disabled defaultPressed />
    </>
  )
}
