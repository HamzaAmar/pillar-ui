import { PinInput } from '@pillar-ui/core'

export const PinInputLength = () => {
  return (
    <>
      <PinInput />
      <PinInput length={5} />
      <PinInput length={6} />
      <PinInput length={7} />
      <PinInput length={8} />
      <PinInput length={10} />
    </>
  )
}
