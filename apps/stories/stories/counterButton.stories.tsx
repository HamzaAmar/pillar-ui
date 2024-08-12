import React from 'react'
import { Meta } from '@storybook/react'
import { CounterButton } from '@pillar-ui/core'

const meta: Meta<typeof CounterButton> = {
  title: 'Components/CounterButton',
  component: CounterButton,
}
export default meta
export function ButtonCounterColor() {
  return (
    <div className="l_f-sm">
      <CounterButton />
      <CounterButton />
      <CounterButton />
      <CounterButton />
    </div>
  )
}

export function ButtonCounterMinMax() {
  return (
    <div className="l_f-sm">
      <CounterButton max={5} />
      <CounterButton min={5} />
      <CounterButton min={5} max={20} />
      <CounterButton min={5} max={20} step={4} />
    </div>
  )
}
