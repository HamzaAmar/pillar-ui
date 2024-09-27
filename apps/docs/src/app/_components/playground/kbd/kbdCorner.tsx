import { Kbd } from '@pillar-ui/core'

export const KbdCorner = () => {
  return (
    <>
      <Kbd title="Esc" corner="0" />
      <Kbd title="Esc" />
      <Kbd title="Esc" corner="3" />
      <Kbd title="Esc" corner="3" />
      <Kbd title="Esc" corner="5" />
      <Kbd title="Esc" corner="full" />
      <Kbd title="Esc" corner="circle" />
    </>
  )
}
