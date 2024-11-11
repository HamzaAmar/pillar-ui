'use client'
import { useCounter } from '@pillar-ui/hooks' // Adjust the import path as needed
import { Minus, Plus } from '../icons'

import type { CounterButtonProps } from './counterButton.type'

const shared = { type: 'button', className: 'c-b F-c' } as const

export const CounterButton = ({ value = 1, min = 1, max = Infinity, step = 1 }: CounterButtonProps) => {
  const init = { min, max, step }
  const { count, setCount, increment, decrement } = useCounter({ value, ...init })

  return (
    <div className="fl- Sg-4 cb-C">
      <button {...shared} onClick={() => decrement()} aria-label="Decrement value" disabled={count <= min}>
        <Minus width="1em" />
      </button>

      <input
        className="cb-F"
        type="number"
        value={count}
        {...init}
        onChange={(e) => setCount(+e.target.value)}
        aria-label="Counter value"
      />

      <button {...shared} onClick={() => increment()} aria-label="Increment value" disabled={count >= max}>
        <Plus width="1em" />
      </button>
    </div>
  )
}

export type { CounterButtonProps } from './counterButton.type'
