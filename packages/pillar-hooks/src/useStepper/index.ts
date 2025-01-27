import { useCallback, useState } from 'react'

/**
 * A custom React hook to manage a stepper component with multiple steps.
 *
 * @param {number} max - The maximum number of steps in the sequence.
 * @param {number} [initial=0] - The initial step in the sequence (default is 0).
 *
 * @returns {{
 *   step: number,         // The current active step in the sequence.
 *   setStep: (step: number) => void, // A function to set the step step.
 *   goToNext: () => void,    // A function to go to the next step in the sequence.
 *   goToPrevious: () => void, // A function to go to the previous step in the sequence.
 *   jumpTo: (step: number) => void, // A function to jump to a specified step in the sequence.
 *   goToLast: () => void,  // A function to jump to the last step in the sequence.
 *   goToFirst: () => void, // A function to jump to the first step in the sequence.
 *   isFirst: boolean,            // A boolean indicating if the step step is the first step.
 *   isLast: boolean              // A boolean indicating if the step step is the last step.
 * }}
 *   An object containing stepper information and utility functions.
 *   - **step**: The step active step in the sequence.
 *   - **setStep**: A function to set the step step.
 *   - **goToNext**: A function to go to the next step in the sequence.
 *   - **goToPrevious**: A function to go to the previous step in the sequence.
 *   - **jumpTo**: A function to jump to a specified step in the sequence.
 *   - **goToLast**: A function to jump to the last step in the sequence.
 *   - **goToFirst**: A function to jump to the first step in the sequence.
 *   - **isFirst**: `true` if the step step is the first step, otherwise `false`.
 *   - **isLast**: `true` if the step step is the last step, otherwise `false`.
 *
 * @example
 * // Example usage in a functional component:
 * function StepperComponent() {
 *   const totalSteps = 3;
 *   const { step, goToNext, goToPrevious, jumpTo, isFirst, isLast } = useStepper(totalSteps);
 *
 *   return (
 *     <div>
 *       <h1>Step {step}</h1>
 *       <button onClick={goToPrevious} disabled={isFirst}>
 *         Previous
 *       </button>
 *       <button onClick={goToNext} disabled={isLast}>
 *         Next
 *       </button>
 *       <button onClick={() => jumpTo(1)}>Go to Step 1</button>
 *       <button onClick={() => jumpTo(2)}>Go to Step 2</button>
 *       <button onClick={() => jumpTo(3)}>Go to Step 3</button>
 *     </div>
 *   );
 * }
 */
export function useStepper(max: number, initial: number = 0) {
  const [step, setStep] = useState(initial)

  const goToNext = useCallback(() => setStep((step) => Math.min(step + 1, max)), [max])

  const goToPrevious = useCallback(() => setStep((step) => Math.max(step - 1, initial)), [initial])

  const jumpTo = useCallback((step: number) => setStep(Math.min(Math.max(step, initial), max)), [initial, max])

  const goToLast = useCallback(() => setStep(max), [max])

  const goToFirst = useCallback(() => setStep(initial), [initial])

  return {
    step,
    setStep,
    goToNext,
    goToPrevious,
    jumpTo,
    goToLast,
    goToFirst,
    isFirst: step === initial,
    isLast: step === max,
  }
}
