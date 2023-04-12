import { useState } from 'react'

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
  function goToNextStep() {
    if (currentStep < maxSteps) setCurrentStep((currentStep) => currentStep + 1)
  }

  /**
   * Goes to the previous step in the sequence.
   */
  function goToPreviousStep() {
    if (currentStep > 0) setCurrentStep((currentStep) => currentStep - 1)
  }

  /**
   * Jumps to the specified step in the sequence.
   *
   * @param {number} step - The step to jump to.
   */
  const jumpToStep = (step: number) => {
    if (step <= initialStep) {
      console.warn(
        `Your current step (${currentStep}) is smaller than your intended step size (${step}). We will reset you to step ${initialStep}.`
      )
      jumpToStep(initialStep)
    } else if (step > maxSteps) {
      console.warn(
        `Your current step (${step}) is bigger than your intended maxSteps (${maxSteps}). We will send you to last step ${maxSteps}.`
      )
      jumpToStep(maxSteps)
    } else {
      jumpToStep(step)
    }
  }

  /**
   * Jumps to the last step in the sequence.
   */
  function jumpToLastStep() {
    setCurrentStep(maxSteps)
  }

  /**
   * Jumps to the first step in the sequence.
   */
  function jumpToFirstStep() {
    setCurrentStep(initialStep)
  }

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
