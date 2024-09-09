import { useCounter } from '@pillar-ui/hooks' // Adjust the import path as needed

import type { CounterButtonProps } from './counterButton.type'
import { Minus, Plus } from '../icons'

export const CounterButton = ({ value = 1, min = 1, max = Infinity, step = 1 }: CounterButtonProps) => {
  const { count, setCount, increment, decrement } = useCounter({
    value,
    min,
    max,
    step,
  })

  return (
    <div className="f-l u_gap-sm c-b_cnt">
      <button
        className="c-b u_center"
        type="button"
        onClick={() => decrement()}
        aria-label="Decrement value"
        disabled={count <= min}
      >
        <Minus width="1em" />
      </button>

      <input
        className="cb-f"
        type="number"
        value={count}
        step={step}
        min={min}
        max={max}
        onChange={(e) => setCount(+e.target.value)}
        aria-label="Counter value"
      />

      <button
        className="c-b u_center"
        type="button"
        onClick={() => increment()}
        aria-label="Increment value"
        disabled={count >= max}
      >
        <Plus width="1em" />
      </button>
    </div>
  )
}

export type { CounterButtonProps } from './counterButton.type'
