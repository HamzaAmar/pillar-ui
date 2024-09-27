import { useId } from 'react'
import type { CustomRadioProps, RadioContextProps, RadioGroupProps, RadioProps } from './radio.type'
import { cx } from '../cx'
import { context } from '../@provider'

/*
===================================================================================================
  Custom Radio Section
===================================================================================================
*/

const [RadioProvider, useRadioContext] = context<RadioContextProps>({ name: 'Radio' })

export const CustomRadio = (props: CustomRadioProps) => {
  const provider = useRadioContext() ?? {}
  const {
    label,
    id = label,
    color = provider?.color ?? 'p',
    size = provider?.size ?? 'md',
    name = provider?.name,
    showLabel = false,
    direction = 'column',
    className,
    children,
    ...rest
  } = props

  const classnames = cx(`f-l Sg3 u_it-center r-a_c C${color}`, { [`l_fl-${direction}`]: direction })
  return (
    <label className={classnames} htmlFor={id}>
      <input type="radio" name={name} className="r-a" id={id} {...rest} />
      <span className={`rc_c ${className}`}>
        {children}
        {/* <CircleCheck className="rc_i" width={20} /> */}
      </span>
      <span className={cx(`r-a_la`, { u_sr: !showLabel })}>{label}</span>
    </label>
  )
}

/*
===================================================================================================
  Radio Group Section
===================================================================================================
*/

export const RadioGroup = ({ direction = 'column', children, label, showLabel, id, ...rest }: RadioGroupProps) => {
  /*TODO: ADD ERROR ACCESSIBILITY  */

  const classnames = cx(`f-g f-l l_fl-wrap Sgsm u_it-start`, { [`l_fl-${direction}`]: !!direction })

  return (
    <fieldset role="radiogroup" className="ra-g">
      <legend className={cx('f-g_legend', { u_sr: !showLabel })}>{label}</legend>

      {/* TODO: ADD DEFAULT  TO RADIO GROUP  */}

      <div className={classnames}>
        <RadioProvider {...rest}>{children}</RadioProvider>
      </div>
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
  const fallbackId = useId()

  const {
    label,
    id = fallbackId,
    color = ctx?.color ?? 'p',
    size = ctx?.size ?? 'md',
    name = ctx?.name,
    variant = 'solid',
    ...rest
  } = props

  return (
    <label className={`l_fl-inline Sg3 r-a_cnt u_f-${size} C${color}`} htmlFor={id}>
      <input type="radio" name={name} className="r-a u_sr" id={id} {...rest} />
      <span className={`rc rc-${variant} u_s-equal`} />
      <span className="r-a_lbl">{label}</span>
    </label>
  )
}

export type { CustomRadioProps, RadioProps, RadioGroupProps } from './radio.type'
