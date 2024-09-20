import { PinInput } from '@pillar-ui/core'

export const PinInputPlaceholder = () => {
  return (
    <>
      <PinInput length={10} />
      <PinInput placeholder="◊" />
      <PinInput placeholder="◉" />
      <PinInput placeholder="●" />
      <PinInput placeholder="◯" />
      <PinInput placeholder="◵" />
      <PinInput placeholder="◬" />
    </>
  )
}
