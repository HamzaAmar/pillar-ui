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
    children,
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
      <span className="ra-L">{children}</span>
    </label>
  )
}

export const CustomRadio = (props: CustomRadioProps) => {
  const provider = useRadioContext() ?? {}
  const fallbackId = useId()
  const {
    label,
    description,
    id = fallbackId,
    color = provider?.color ?? 'p',
    size = provider?.size ?? 'md',
    name = provider?.name,
    direction = 'col',
    className,
    children,
    ...rest
  } = props

  return (
    <label className={`fl-inline Sg-3 cr-C Fs-${size} C-${color}`} htmlFor={id}>
      <div>
        <div className="cr-L">{label}</div>
        <div className="cr-L">{description}</div>
        <div className="ra-L">{children}</div>
      </div>
      <input type="radio" name={name} className="ra- H-sr" id={id} {...rest} />
      <span className="rc- S-e" />
    </label>
  )
}

export type { CustomRadioProps, RadioProps, RadioGroupProps } from './radio.type'
