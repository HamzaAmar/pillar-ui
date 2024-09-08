import { Children, isValidElement, createElement, useId } from 'react'
import type { ReactNode } from 'react'
import { Flex } from '../flex'
import type { StepperContextProps, StepperProps, StepProps } from './stepper.type'
import { context } from '../utils'
import { Check } from '../icons'

const [StepperProvider, useStepperContext] = context<StepperContextProps>({ name: 'Stepper' })

export const StepperStep = (props: StepProps) => {
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
    <Flex data-state={state} items="center" className={`s-t_step step__${size}`}>
      <button
        type="button"
        onClick={() => setActive(step!)}
        className={`s-t_btn u_rad-${corner} u_center u_f-medium`}
        aria-labelledby={labelledbyID}
        aria-describedby={describedbyID}
      >
        {state === 'complete' ? (
          <div className="s-t_icn u_center">
            <Check />
          </div>
        ) : (
          content
        )}
      </button>
      <div className="s-t_cnt">
        <p id={labelledbyID} className="u_f-sm u_f-medium">
          {title}
        </p>
        <p id={describedbyID} className="u_f-xs u_bg t-y-low">
          {description}
        </p>
      </div>
    </Flex>
  )
}

export const Stepper = ({ children, color = 'bg', active = 0, completeComponent, ...rest }: StepperProps) => {
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
    <div className="s-t_cnt l_flow">
      <Flex justify="between" className={`s-t u_${color}`}>
        <StepperProvider {...rest}> {_children}</StepperProvider>
      </Flex>
      <div>{content}</div>
    </div>
  )
}

export type { StepperProps, StepProps } from './stepper.type'
