import { PinInput } from '@pillar-ui/core'

export const PinInputOutline = () => {
  return (
    <>
      <PinInput autoFocus variant="outline" />
      <PinInput disabled variant="outline" />
      <PinInput readOnly variant="outline" />
    </>
  )
}
