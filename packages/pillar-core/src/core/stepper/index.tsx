import { Children, isValidElement, createElement, useId } from 'react'
import type { ReactNode } from 'react'
import { Flex } from '../flex'
import { Text } from '../typography'
import type { StepperContextProps, StepperProps, StepProps } from './stepper.type'
import { Check } from '@pillar-ui/icons'
import { createContext } from '@pillar-ui/utils'

export const [StepperProvider, useStepperContext] = createContext<StepperContextProps>({ name: 'Stepper' })

const Step = (props: StepProps) => {
  const context = useStepperContext()
  const {
    state,
    title,
    description,
    step,
    icon,
    corner = context?.corner ?? 'full',
    size = context?.size ?? 'md',
    setActive = context!.setActive,
  } = props

  const id = useId()
  const labelledbyID = `label-${id}`
  const describedbyID = `description-${id}`

  const content = icon ?? step
  return (
    <Flex data-state={state} items="center" className={`step step__${size}`}>
      <button
        type="button"
        onClick={() => setActive(step!)}
        className={`step--button u_corner-${corner} u_center u_font-medium`}
        aria-labelledby={labelledbyID}
        aria-describedby={describedbyID}
      >
        {state === 'complete' ? (
          <div className="step--complete-icon u_center">
            <Check />
          </div>
        ) : (
          content
        )}
      </button>
      <div className="step--content">
        <Text id={labelledbyID} weight="medium" size="sm">
          {title}
        </Text>
        <Text id={describedbyID} size="xs" color="surface" contrast="low">
          {description}
        </Text>
      </div>
    </Flex>
  )
}

export const Stepper = ({ children, color = 'surface', active = 0, completeComponent, ...rest }: StepperProps) => {
  let _content: ReactNode[] = []

  const _children = Children.map(children, (child, index) => {
    if (isValidElement(child)) {
      const state = active === index ? 'current' : active > index ? 'complete' : 'inactive'

      const { children, ...props } = child.props
      _content.push(children)
      return createElement(child.type, { ...props, state, step: index })
    }
    return child
  })

  const content = _content[active] ?? completeComponent

  return (
    <div className="stepper--wrapper l_flow">
      <Flex justify="between" className={`stepper u_${color}`}>
        <StepperProvider {...rest}> {_children}</StepperProvider>
      </Flex>
      <div>{content}</div>
    </div>
  )
}

Stepper.Step = Step

export type { StepperProps, StepProps } from './stepper.type'
