import { useCallback, useState } from 'react'

/**
 * A custom React hook to manage a stepper component with multiple steps.
 *
 * @param {number} maxSteps - The maximum number of steps in the sequence.
 * @param {number} [initialStep=0] - The initial step in the sequence (default is 0).
 *
 * @returns {{
 *   currentStep: number,         // The current active step in the sequence.
 *   setCurrentStep: (step: number) => void, // A function to set the current step.
 *   goToNextStep: () => void,    // A function to go to the next step in the sequence.
 *   goToPreviousStep: () => void, // A function to go to the previous step in the sequence.
 *   jumpToStep: (step: number) => void, // A function to jump to a specified step in the sequence.
 *   jumpToLastStep: () => void,  // A function to jump to the last step in the sequence.
 *   jumpToFirstStep: () => void, // A function to jump to the first step in the sequence.
 *   isFirst: boolean,            // A boolean indicating if the current step is the first step.
 *   isLast: boolean              // A boolean indicating if the current step is the last step.
 * }}
 *   An object containing stepper information and utility functions.
 *   - **currentStep**: The current active step in the sequence.
 *   - **setCurrentStep**: A function to set the current step.
 *   - **goToNextStep**: A function to go to the next step in the sequence.
 *   - **goToPreviousStep**: A function to go to the previous step in the sequence.
 *   - **jumpToStep**: A function to jump to a specified step in the sequence.
 *   - **jumpToLastStep**: A function to jump to the last step in the sequence.
 *   - **jumpToFirstStep**: A function to jump to the first step in the sequence.
 *   - **isFirst**: `true` if the current step is the first step, otherwise `false`.
 *   - **isLast**: `true` if the current step is the last step, otherwise `false`.
 *
 * @example
 * // Example usage in a functional component:
 * function StepperComponent() {
 *   const totalSteps = 3;
 *   const { currentStep, goToNextStep, goToPreviousStep, jumpToStep, isFirst, isLast } = useStepper(totalSteps);
 *
 *   return (
 *     <div>
 *       <h1>Step {currentStep}</h1>
 *       <button onClick={goToPreviousStep} disabled={isFirst}>
 *         Previous
 *       </button>
 *       <button onClick={goToNextStep} disabled={isLast}>
 *         Next
 *       </button>
 *       <button onClick={() => jumpToStep(1)}>Go to Step 1</button>
 *       <button onClick={() => jumpToStep(2)}>Go to Step 2</button>
 *       <button onClick={() => jumpToStep(3)}>Go to Step 3</button>
 *     </div>
 *   );
 * }
 */
export function useStepper(maxSteps: number, initialStep: number = 0) {
  const [currentStep, setCurrentStep] = useState(initialStep)

  const goToNextStep = useCallback(() => {
    setCurrentStep((step) => Math.min(step + 1, maxSteps))
  }, [maxSteps])

  /**
   * Goes to the previous step in the sequence.
   */
  const goToPreviousStep = useCallback(() => {
    setCurrentStep((step) => Math.max(step - 1, initialStep))
  }, [initialStep])

  /**
   * Jumps to the specified step in the sequence.
   *
   * @param {number} step - The step to jump to.
   */
  const jumpToStep = useCallback(
    (step: number) => {
      if (step <= initialStep) {
        console.warn(
          `Your current step (${currentStep}) is smaller than your intended step size (${step}). We will reset you to step ${initialStep}.`
        )
        setCurrentStep(initialStep)
        return
      }
      if (step > maxSteps) {
        console.warn(
          `Your current step (${step}) is bigger than your intended maxSteps (${maxSteps}). We will send you to last step ${maxSteps}.`
        )
        setCurrentStep(maxSteps)
        return
      }
      setCurrentStep(step)
    },
    [initialStep, maxSteps, currentStep]
  )

  const jumpToLastStep = useCallback(() => {
    setCurrentStep(maxSteps)
  }, [maxSteps])

  const jumpToFirstStep = useCallback(() => {
    setCurrentStep(initialStep)
  }, [initialStep])

  const isFirst = currentStep === initialStep
  const isLast = currentStep === maxSteps

  return {
    currentStep,
    setCurrentStep,
    goToNextStep,
    goToPreviousStep,
    jumpToStep,
    jumpToLastStep,
    jumpToFirstStep,
    isFirst,
    isLast,
  }
}
