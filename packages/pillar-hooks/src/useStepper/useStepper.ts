import { useCallback, useState } from 'react'

/**
 * Custom hook for managing a sequence of steps.
 *
 * @param {number} maxSteps - The maximum number of steps in the sequence.
 * @param {number} [initialStep=0] - The initial step to begin the sequence with. Defaults to `0`.
 * @returns {Object} An object containing the current step and functions for navigating between steps.
 */
export function useStepper(maxSteps: number, initialStep: number = 0) {
  const [currentStep, setCurrentStep] = useState(initialStep)

  /**
   * Goes to the next step in the sequence.
   */
  // function goToNextStep() {
  //   if (currentStep < maxSteps) setCurrentStep((currentStep) => currentStep + 1)
  // }

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

  /**
   * Jumps to the last step in the sequence.
   */
  const jumpToLastStep = useCallback(() => {
    setCurrentStep(maxSteps)
  }, [maxSteps])

  /**
   * Jumps to the first step in the sequence.
   */
  const jumpToFirstStep = useCallback(() => {
    setCurrentStep(initialStep)
  }, [initialStep])

  // Check if the current step is the first step
  const isFirst = currentStep === initialStep
  // Check if the current step is the last step
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
