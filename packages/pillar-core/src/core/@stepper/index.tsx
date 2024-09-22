import { Children, isValidElement, createElement, useId } from 'react'
import type { ReactNode } from 'react'
import { Flex } from '../flex'
import type { StepperContextProps, StepperProps, StepProps } from './stepper.type'
import { context } from '../@provider'
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
    setActive = context?.setActive,
  } = props

  const id = useId()
  const labelledbyID = `label-${id}`
  const describedbyID = `description-${id}`

  return (
    <Flex data-state={state} items="center" className={`s-t_step step__${size}`}>
      <button
        type="button"
        onClick={() => setActive?.(step!)}
        className={`s-t_btn u_rad-${corner} u_center u_f-medium`}
        aria-labelledby={labelledbyID}
        aria-describedby={describedbyID}
      >
        {state === 'complete' ? (
          <div className="s-t_icn u_center">
            <Check />
          </div>
        ) : (
          (icon ?? step)
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
  // let _content: ReactNode[] = []
  // // Rename Index to step to reduce code at createElement
  // const _children = Children.map(children, (child, step) => {
  //   if (!isValidElement(child)) return child
  //   const state = active === step ? 'current' : active > step ? 'complete' : 'inactive'
  //   const { children, ...rest } = child.props
  //   _content.push(children)
  //   return createElement(child.type, { ...rest, state, step })
  // })
  // const content = _content[active] ?? completeComponent

  const _content: ReactNode[] = []

  const steps = Children.map(children, (child, step) => {
    if (!isValidElement(child)) return child

    _content.push(child.props.children)

    return createElement(child.type, {
      ...child.props,
      state: active === step ? 'current' : active > step ? 'complete' : 'inactive',
      step,
    })
  })

  const currentContent = _content[active] ?? completeComponent

  return (
    <div className="s-t_cnt l_flow">
      <div className={`f-l s-t u_${color} u_between`}>
        <StepperProvider {...rest}> {steps}</StepperProvider>
      </div>
      <div>{currentContent}</div>
    </div>
  )
}

export type { StepperProps, StepProps } from './stepper.type'
