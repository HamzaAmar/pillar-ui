import { useId } from 'react'
import type { CustomRadioProps, RadioContextProps, RadioGroupProps, RadioProps } from './radio.type'
import { Flex } from '../flex'
import { classnames, createContext } from '@pillar-ui/utils'
import { CircleCheck } from '@pillar-ui/icons'

/*
===================================================================================================
  Custom Radio Section
===================================================================================================
*/

const [RadioProvider, useRadioContext] = createContext<RadioContextProps>({ name: 'Radio' })

export const CustomRadio = (props: CustomRadioProps) => {
  const provider = useRadioContext()
  const {
    label,
    id,
    color = provider?.color ?? 'primary',
    size = provider?.size ?? 'md',
    name = provider?.name,
    showLabel = false,
    direction = 'column',
    className,
    children,
    ...rest
  } = props

  const idOrLabel = id || label

  const labelDirection = direction === 'column' ? { direction: 'column' as 'column' } : {}

  // const radioClassName = classnames(`rc u_circle`)
  return (
    <Flex as="label" className={`r-a_c u_${color}`} htmlFor={idOrLabel} {...labelDirection} gap="xs" items="center">
      <input type="radio" name={name} className="r-a" id={idOrLabel} {...rest} />
      <span className={`rc_c ${className}`}>
        {children}
        <CircleCheck className="rc_i" width={20} />
      </span>
      <span className={classnames(`r-a_la`, { u_sr: !showLabel })}>{label}</span>
    </Flex>
  )
}

/*
===================================================================================================
  Radio Group Section
===================================================================================================
*/

export const RadioGroup = ({ direction = 'column', children, label, showLabel, id, ...rest }: RadioGroupProps) => {
  /*TODO: ADD ERROR ACCESSIBILITY  */

  return (
    <fieldset role="radiogroup" className="ra-g">
      <legend className={classnames('form-group--legend', { u_sr: !showLabel })}>{label}</legend>

      {/* TODO: ADD DEFAULT  TO RADIO GROUP  */}

      <Flex wrap gap="sm" className="form-group" items="start" direction={direction}>
        <RadioProvider {...rest}>{children}</RadioProvider>
      </Flex>
    </fieldset>
  )
}

/*
===================================================================================================
   Radio Section
===================================================================================================
*/

export const Radio = (props: RadioProps) => {
  const ctx = useRadioContext()
  const {
    label,
    id,
    color = ctx?.color ?? 'primary',
    size = ctx?.size ?? 'md',
    name = ctx?.name,
    variant = 'solid',
    ...rest
  } = props
  const fallbackId = useId()

  const idOrLabel = id || fallbackId

  return (
    <Flex inline gap="xs" as="label" className={`r-a_cnt u_f-${size} u_${color}`} htmlFor={idOrLabel}>
      <input type="radio" name={name} className="r-a u_sr" id={idOrLabel} {...rest} />
      <span className={`rc rc__${variant} u_circle`} />
      <span className="r-a_lbl">{label}</span>
    </Flex>
  )
}

export type { CustomRadioProps, RadioProps, RadioGroupProps } from './radio.type'
