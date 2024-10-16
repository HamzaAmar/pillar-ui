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
    direction = 'col',
    className,
    children,
    ...rest
  } = props

  const classnames = cx(`fl- Sg-3 Aai-center ra-_c C-${color}`, { [`fl-${direction}`]: direction })
  return (
    <label className={classnames} htmlFor={id}>
      <input type="radio" name={name} className="ra-" id={id} {...rest} />
      <span className={`rc_c ${className}`}>
        {children}
        {/* <CircleCheck className="rc_i" width={20} /> */}
      </span>
      <span className={cx(`ra-_la`, { 'H-sr': !showLabel })}>{label}</span>
    </label>
  )
}

/*
===================================================================================================
  Radio Group Section
===================================================================================================
*/

export const RadioGroup = ({ direction = 'col', children, label, showLabel, id, ...rest }: RadioGroupProps) => {
  /*TODO: ADD ERROR ACCESSIBILITY  */

  const classnames = cx(`f-g fl- fl-wrap Sg-4 Aai-start`, { [`fl-${direction}`]: !!direction })

  return (
    <fieldset role="radiogroup" className="ra-G">
      <legend className={cx('fg-L', { 'H-sr': !showLabel })}>{label}</legend>

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
    <label className={`fl-inline Sg-3 ra-C Fs-${size} C-${color}`} htmlFor={id}>
      <input type="radio" name={name} className="ra- H-sr" id={id} {...rest} />
      <span className={`rc- rc-${variant} S-e`} />
      <span className="ra-L">{label}</span>
    </label>
  )
}

export type { CustomRadioProps, RadioProps, RadioGroupProps } from './radio.type'
