import { useCounter } from '@pillar-ui/hooks' // Adjust the import path as needed

import type { CounterButtonProps } from './counterButton.type'
import { Minus, Plus } from '../icons'

const shared = { type: 'button', className: 'c-b u_center' } as const

export const CounterButton = ({ value = 1, min = 1, max = Infinity, step = 1 }: CounterButtonProps) => {
  const init = { value, min, max, step }
  const { count, setCount, increment, decrement } = useCounter(init)

  return (
    <div className="f-l u_gap-sm c-b_cnt">
      <button {...shared} onClick={() => decrement()} aria-label="Decrement value" disabled={count <= min}>
        <Minus width="1em" />
      </button>

      <input
        className="cb-f"
        type="number"
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
