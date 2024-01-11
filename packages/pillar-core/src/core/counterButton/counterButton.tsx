import { useCounter } from '@pillar-ui/hooks' // Adjust the import path as needed
import { Flex } from '../flex'
import { Minus, Plus } from '@pillar-ui/icons'
import { CounterButtonProps } from './counterButton.type'

const CounterButton = ({ value = 1, min = 1, max = Infinity, step = 1 }: CounterButtonProps) => {
  const { count, setCount, increment, decrement } = useCounter({
    value,
    min,
    max,
    step,
  })

  return (
    <Flex gap="sm" className="counter-button--container">
      <Flex
        as="button"
        items="center"
        className="counter-button counter--decrement-button"
        type="button"
        onClick={() => decrement()}
        aria-label="Decrement value"
        disabled={count <= min}
      >
        <Minus width="1em" />
      </Flex>

      <input
        className="counter--input"
        type="number"
        value={count}
        step={step}
        min={min}
        max={max}
        onChange={(e) => setCount(+e.target.value)}
        aria-label="Counter value"
      />

      <Flex
        as="button"
        items="center"
        className="counter-button counter--increment-button"
        type="button"
        onClick={() => increment()}
        aria-label="Increment value"
        disabled={count >= max}
      >
        <Plus width="1em" />
      </Flex>
    </Flex>
  )
}

export default CounterButton
