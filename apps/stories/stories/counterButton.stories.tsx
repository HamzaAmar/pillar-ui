import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { CounterButton } from '@pillar-ui/core'

export default {
  title: 'Components/CounterButton',
  component: CounterButton,
} as ComponentMeta<typeof CounterButton>

export function ButtonCounterColor() {
  return (
    <div className="l_flow__sm">
      <CounterButton />
      <CounterButton />
      <CounterButton />
      <CounterButton />
    </div>
  )
}

export function ButtonCounterMinMax() {
  return (
    <div className="l_flow__sm">
      <CounterButton max={5} />
      <CounterButton min={5} />
      <CounterButton min={5} max={20} />
      <CounterButton min={5} max={20} step={4} />
    </div>
  )
}
