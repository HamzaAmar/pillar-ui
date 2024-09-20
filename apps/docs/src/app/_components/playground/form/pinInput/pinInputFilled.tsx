import { PinInput } from '@pillar-ui/core'

export const PinInputFilled = () => {
  return (
    <>
      <PinInput autoFocus variant="filled" />
      <PinInput disabled variant="filled" />
      <PinInput readOnly variant="filled" />
    </>
  )
}
