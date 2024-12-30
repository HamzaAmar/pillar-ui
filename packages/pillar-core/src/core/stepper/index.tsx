'use client'
import { Children, isValidElement, createElement, useId } from 'react'
import { Flex } from '../flex'
import { context } from '../provider'

import { Check } from '../icons'

import type { ReactNode } from 'react'
import type { StepperContextProps, StepperProps, StepProps } from './stepper.type'

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
    // size = context?.size ?? 'md',
    setActive = context?.setActive,
  } = props

  const id = useId()
  const [labelledbyID, describedbyID] = [`lbl-${id}`, `des-${id}`]

  return (
    <Flex data-state={state} items="center" className="st-S Sg-2">
      <button
        type="button"
        onClick={() => setActive?.(step!)}
        className={`st-B R-${corner} F-c weight="5"`}
        aria-labelledby={labelledbyID}
        aria-describedby={describedbyID}
      >
        {state === 'complete' ? (
          <div className="st-I F-c">
            <Check />
          </div>
        ) : (
          (icon ?? step)
        )}
      </button>
      <div className="st-C">
        <p id={labelledbyID} className="st-T Fw-5">
          {title}
        </p>
        <p id={describedbyID} className="Fs-3 st-D Cb t-y-low">
          {description}
        </p>
      </div>
    </Flex>
  )
}

export const Stepper = ({ children, color = 'b', active = 0, completeComponent, size, ...rest }: StepperProps) => {
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
    <div className="st-W Sf-5">
      <div className={`fl- st- C-${color} Fs-${size} F-b`}>
        <StepperProvider {...rest}> {steps}</StepperProvider>
      </div>
      <div>{currentContent}</div>
    </div>
  )
}

export type { StepperProps, StepProps } from './stepper.type'
