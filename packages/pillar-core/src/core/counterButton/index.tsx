import { useCounter } from '@pillar-ui/hooks' // Adjust the import path as needed
import { Flex } from '../flex'

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
    <Flex gap="sm" className="c-b_cnt">
      <Flex
        as="button"
        items="center"
        className="c-b"
        type="button"
        onClick={() => decrement()}
        aria-label="Decrement value"
        disabled={count <= min}
      >
        <Minus width="1em" />
      </Flex>

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
        className="flex u_it-center c-b"
        type="button"
        onClick={() => increment()}
        aria-label="Increment value"
        disabled={count >= max}
      >
        <Plus width="1em" />
      </button>
    </Flex>
  )
}

export type { CounterButtonProps } from './counterButton.type'
