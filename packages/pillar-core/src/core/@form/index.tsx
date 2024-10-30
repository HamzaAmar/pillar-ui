import { useBooleanState, useControllableState, useComposedRefs } from '@pillar-ui/hooks'
import { RefObject, forwardRef, useId, useRef, useState } from 'react'

import type {
  FormControllerProps,
  FormGroupProps,
  InputPasswordProps,
  InputProps,
  SelectProps,
  TextareaProps,
  FormControllerContextProps,
  FormGroupContextProps,
  PinInputProps,
  InputSearchProps,
  InputNumberButtonProps,
} from './form.type'
import { cx } from '../cx'
import { Flex } from '../flex'
import { Grid } from '../grid'
import { context } from '../@provider'
import { ChevronDown, Close, Eye, EyeOff, Search } from '../icons'

const [FormControllerProvider, useFormController] = context<FormControllerContextProps>({
  name: 'FormController',
})
const [FormGroupProvider, useFormGroup] = context<FormGroupContextProps>({ name: 'FormGroup' })

function useField(props: any) {
  const { hasError, describedby, ...ctx } = useFormController() ?? {}
  const groupCtx = useFormGroup()
  const {
    size = groupCtx?.size,
    variant = groupCtx?.variant ?? 'outline',
    corner = groupCtx?.corner,
    color = groupCtx?.color ?? 'p',
    transform,
    fluid = groupCtx?.fluid,
    isInvalid,
    prefixInput,
    suffixInput,
    children,
    ...restProps
  } = props

  const prefix = prefixInput && <span className="fi-Pr F-c">{prefixInput}</span>
  const suffix = suffixInput && <span className="fi-Su F-c">{suffixInput}</span>

  const cls = cx(`fi-C fl- fi-C-${variant} C-${color}`, {
    [`Tt-${transform}`]: transform,
    'fi-C-fluid': fluid,
    [`Fs-${size}`]: size,
    [`R-${corner}`]: corner,
  })

  const field = {
    ...ctx,
    ...restProps,
    'aria-invalid': hasError || isInvalid,
    'aria-describedby': describedby,
  }

  return { cls, field, prefix, suffix }
}

const handleStep =
  (inputRef: RefObject<HTMLInputElement>, step: 'stepDown' | 'stepUp' = 'stepUp') =>
  () => {
    inputRef.current?.focus()
    inputRef.current?.[step]()
    inputRef.current?.dispatchEvent(new Event('input', { bubbles: true }))
  }

function InputNumberButton({ onClick, title, direction = 'top' }: InputNumberButtonProps) {
  const dir = direction ? ({ direction } as const) : {}
  return (
    <button type="button" onClick={onClick} aria-label={title} tabIndex={-1} className="fn-B">
      <ChevronDown width=".85em" {...dir} />
    </button>
  )
}

/*
===================================================================================================
   TextArea Area Section
===================================================================================================
*/

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>((props, forwardedRef) => {
  const { cls, prefix, suffix, field } = useField(props)

  return (
    <div className={cls}>
      {prefix}
      <textarea ref={forwardedRef} {...field} className="fi-"></textarea>
      {suffix}
    </div>
  )
})

Textarea.displayName = 'Textarea'

/*
===================================================================================================
   Input Area Section
===================================================================================================
*/

export const Input = forwardRef<HTMLInputElement, InputProps>((props, forwardedRef) => {
  const { cls, prefix, suffix, field } = useField(props)

  return (
    <div className={cls}>
      {prefix}
      <input ref={forwardedRef} type="text" {...field} className="fi-" />
      {suffix}
    </div>
  )
})

Input.displayName = 'Input'

/*
===================================================================================================
   InputNumber Area Section
===================================================================================================
*/

export const InputNumber = forwardRef<HTMLInputElement, InputProps>((props, forwardedRef) => {
  const { cls, prefix, field } = useField(props)
  const inputRef = useRef<HTMLInputElement>(null)
  const composedRef = useComposedRefs(inputRef, forwardedRef)

  return (
    <div className={cls}>
      {prefix}
      <input type="number" ref={composedRef} {...field} className="fi-" />
      <div className="fin-C">
        <InputNumberButton onClick={handleStep(inputRef, 'stepUp')} title="Increase Value" />
        <InputNumberButton onClick={handleStep(inputRef, 'stepDown')} direction="bottom" title="Decrease Value" />
      </div>
    </div>
  )
})

InputNumber.displayName = 'InputNumber'

/*
===================================================================================================
   Input Password Area Section
===================================================================================================
*/

export const InputPassword = forwardRef<HTMLInputElement, InputPasswordProps>((props, forwardedRef) => {
  const { visibleIcon = <Eye width="16" />, hiddenIcon = <EyeOff width="16" />, ...restProps } = props
  const { cls, prefix, field } = useField(restProps)
  const { value, toggle } = useBooleanState(false)
  return (
    <div className={cls}>
      {prefix}
      <input type={value ? 'text' : 'password'} ref={forwardedRef} {...field} className="fi-" />

      <button aria-label={`${value ? 'Hide' : 'Show '} Password`} type="button" onClick={toggle} className="fip-B F-c">
        {value ? hiddenIcon : visibleIcon}
      </button>
    </div>
  )
})

InputPassword.displayName = 'InputPassword'

/*
===================================================================================================
   Input Password Area Section
===================================================================================================
*/

export const InputSearch = forwardRef<HTMLInputElement, InputSearchProps>((props, forwardedRef) => {
  const {
    cls,
    prefix,
    suffix,
    field: { placeholder = ' ', ...rest },
  } = useField({ ...props, prefixInput: props.prefixInput ?? <Search width="16" /> })

  const inputRef = useRef<HTMLInputElement>(null)
  const mergedRef = useComposedRefs(inputRef, forwardedRef)
  const handleInputClick = () => {
    if (inputRef.current) {
      inputRef.current.value = ''
    }
  }

  return (
    <div className={cls}>
      {prefix}
      <input type="search" ref={mergedRef} placeholder={placeholder} {...rest} className="fi- fis-" />
      <Flex as="span" items="center" className="fis-Su">
        {suffix}
        <Close width={16} onClick={handleInputClick} className="fs-I" transform="translate(-8,0)" />
      </Flex>
    </div>
  )
})

InputSearch.displayName = 'InputSearch'

/*
===================================================================================================
   Select Section
===================================================================================================
*/

export const Select = forwardRef<HTMLSelectElement, SelectProps>(({ children, ...restProps }, forwardedRef) => {
  const { cls, field } = useField(restProps)

  return (
    <div className={cls}>
      <select ref={forwardedRef} {...field} className="fi- fs-">
        {children}
      </select>
      <span className="fse-I">
        <ChevronDown width={16} />
      </span>
    </div>
  )
})

Select.displayName = 'Select'

/*
===================================================================================================
   Input File Section
===================================================================================================
*/

export const PinInput = forwardRef<HTMLInputElement, PinInputProps>((props, forwardedRef) => {
  // const ctx = useFormController()
  const groupCtx = useFormGroup()
  const {
    size = groupCtx?.size ?? 'md',
    variant = groupCtx?.variant ?? 'outline',
    corner = groupCtx?.corner,
    color = groupCtx?.color ?? 'p',
    transform,
    fluid = groupCtx?.fluid,
    placeholder = '○',
    length = 4,
    children,
    ...rest
  } = props
  const className = cx(`fi-C fi-C-${variant} fl- Sg-3 C-${color}`, {
    [`R-${corner}`]: corner,
    [`Tt-${transform}`]: transform,
    [`Fs-${size}`]: size,
  })

  console.log(forwardedRef)

  const [pin, setPin] = useState<string[]>(Array(length).fill(''))
  const inputRefs = useRef<HTMLInputElement[]>([])

  const handleInputChange = (value: string, index: number) => {
    const newPin = [...pin]
    newPin[index] = newPin[index] !== '' ? value[1] : value
    setPin(newPin)
    if (value && index < length - 1) {
      inputRefs.current[index + 1].focus()
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (event.key === 'Backspace' && !pin[index] && index > 0) {
      inputRefs.current[index - 1].focus()
    }
  }

  const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
    event.preventDefault()
    const pastedData = event.clipboardData.getData('text')
    setPin(Array.from({ length }, (_, i) => pastedData[i] || ''))
  }

  return (
    <Flex gap="4" items="center">
      {Array.from({ length }, (_, index) => (
        <div className={className} key={index}>
          <input
            placeholder={placeholder}
            className="fi- fp-"
            value={pin[index]}
            onChange={(e) => handleInputChange(e.target.value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onPaste={handlePaste}
            aria-label={`Pin Input Number ${index + 1} of ${length}`}
            autoComplete="off"
            autoCapitalize="none"
            ref={(input) => {
              inputRefs.current[index] = input!
            }}
            {...rest}
          />
        </div>
      ))}
    </Flex>
  )
})

PinInput.displayName = 'PinInput'

/*
===================================================================================================
   Input File Section
===================================================================================================
*/

export const InputFile = forwardRef<HTMLInputElement, InputProps>(
  ({ value, title = 'Select File', ...restProps }, forwardedRef) => {
    const { cls, field } = useField(restProps)

    const inputRef = useRef<HTMLInputElement>(null)
    const composedRef = useComposedRefs(inputRef, forwardedRef)

    const [_value, setValue] = useControllableState({ controlledValue: value, defaultValue: null })
    const hasValue = Array.isArray(_value) ? _value.length !== 0 : !!_value

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (field.multiple) {
        const files = Array.from<File>(e.target.files ?? [])
        setValue(`files (${files.length}) : ${files.map((file) => file.name).join(', ')}`)
      } else {
        setValue(e.target.files?.[0].name ?? '')
      }
    }
    return (
      <Grid grid="auto 1fr" className={cls} onClick={() => inputRef.current?.click()}>
        <input type="file" ref={composedRef} {...field} className="H-sr" onChange={handleChange} />
        <Flex as="span" items="center" className="fif-">
          {title}
        </Flex>

        <span className="ff-t t-y fl- Fs-3 Aai-center Cb t-y-low">{hasValue ? _value : 'No file Choose'}</span>
      </Grid>
    )
  }
)

InputFile.displayName = 'InputFile'

//
export const FormController = ({
  children,
  label,
  hideLabel,
  error,
  className,
  hint,
  ...rest
}: FormControllerProps) => {
  const id = `field-${useId()}`
  const [messageID, hintID] = [`${id}-msg`, `${id}-hint`]
  const hasError = !!error

  const describedby = [hasError && messageID, hint && hintID].filter(Boolean).join(' ') || ''

  const values = {
    ...rest,
    id,
    describedby,
    hasError,
  }

  const fieldLabel = `${label}${rest.required ? ' *' : ''}`
  return (
    <FormControllerProvider {...values}>
      <Flex direction="col" className={cx('fc-o Fs-3', { [className!]: className })}>
        <label className={cx('Fw-5 Fs-4', { 'H-sr': hideLabel })} htmlFor={id}>
          {fieldLabel}
        </label>
        {hint && <span id={hintID}>{hint}</span>}
        {children}
        {error && (
          <div className="fc-E F-c" id={messageID} role="alert">
            <span className="fc-I Sw-fit">{<Close type="circle" width="16" />}</span>
            <span> {error}</span>
          </div>
        )}
      </Flex>
    </FormControllerProvider>
  )
}

export const FormGroup = ({ title, hideTitle, direction = 'col', children, hideBorder, ...rest }: FormGroupProps) => (
  <fieldset className={cx('fg-C', { 'f-g-hide-border': hideBorder })}>
    <legend className={cx('fg-L', { 'H-sr': hideTitle })}>{title}</legend>
    <Flex gap="4" className={cx('f-g', { 'fg-fluid': rest.fluid })} items="start" direction={direction}>
      <FormGroupProvider {...rest}>{children}</FormGroupProvider>
    </Flex>
  </fieldset>
)

export type {
  FormControllerProps,
  FormGroupProps,
  FormLabelProps,
  FormMessageProps,
  InputProps,
  SelectProps,
  TextareaProps,
  FormGroupContextProps,
  TextFormFieldProps,
  FormControllerContextProps,
  InputPasswordProps,
  PinInputProps,
} from './form.type'
