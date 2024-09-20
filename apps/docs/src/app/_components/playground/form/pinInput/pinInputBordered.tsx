import { PinInput } from '@pillar-ui/core'

export const PinInputBordered = () => {
  return (
    <>
      <PinInput autoFocus variant="bordered" />
      <PinInput disabled variant="bordered" />
      <PinInput readOnly variant="bordered" />
    </>
  )
}
