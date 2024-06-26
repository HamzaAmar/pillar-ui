import { ChevronDown, Eye, EyeOff, X } from '@pillar-ui/icons'
import { useBooleanState, useControllableState, useComposedRefs } from '@pillar-ui/hooks'
import { classnames, createContext } from '@pillar-ui/utils'
import { ChangeEvent, RefObject, forwardRef, useId, useRef, useState } from 'react'

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
import { Flex } from '../flex'
import { Grid } from '../grid'
import { Text } from '../typography'

const [FormControllerProvider, useFormController] = createContext<FormControllerContextProps>({
  name: 'FormController',
})
const [FormGroupProvider, useFormGroup] = createContext<FormGroupContextProps>({ name: 'FormGroup' })

function useField(props: any) {
  const { hasError, describedby, ...ctx } = useFormController() ?? {}
  const groupCtx = useFormGroup()
  const {
    size = groupCtx?.size,
    variant = groupCtx?.variant ?? 'outline',
    corner = groupCtx?.corner,
    color = groupCtx?.color ?? 'primary',
    transform,
    fluid = groupCtx?.fluid,
    isInvalid,
    prefixInput,
    suffixInput,
    children,
    ...restProps
  } = props

  const prefixInputElement = !!prefixInput && (
    <span className="input--pref-content input-field--prefix u_center">{prefixInput}</span>
  )
  const suffixInputElement = !!suffixInput && (
    <span className="input--suf-content input-field--suffix u_center">{suffixInput}</span>
  )

  const classNames = classnames(`field-wrapper field-wrapper__${variant} u_${color}`, {
    [`u_transform__${transform}`]: !!transform,
    'field-wrapper__fluid': !!fluid,
    [`u_size-${size}`]: corner,
    [`u_corner-${corner}`]: corner,
  })
  const isError = hasError || isInvalid

  const fieldProps = { ...ctx, ...restProps, 'aria-invalid': isError, 'aria-describedby': describedby }

  return { classNames, fieldProps, prefixInputElement, suffixInputElement }
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
    <button type="button" onClick={onClick} aria-label={title} tabIndex={-1} className="number-input--button">
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
  const { classNames, prefixInputElement, suffixInputElement, fieldProps } = useField(props)

  return (
    <div className={classNames}>
      {prefixInputElement}
      <textarea ref={forwardedRef} {...fieldProps} className="field"></textarea>
      {suffixInputElement}
    </div>
  )
})

Textarea.displayName = 'Pillar-Textarea'

/*
===================================================================================================
   Input Area Section
===================================================================================================
*/

export const Input = forwardRef<HTMLInputElement, InputProps>((props, forwardedRef) => {
  const { classNames, prefixInputElement, suffixInputElement, fieldProps } = useField(props)

  return (
    <div className={classNames}>
      {prefixInputElement}
      <input ref={forwardedRef} type="text" {...fieldProps} className="field" />
      {suffixInputElement}
    </div>
  )
})

Input.displayName = 'Pillar-Input'

/*
===================================================================================================
   InputNumber Area Section
===================================================================================================
*/

export const InputNumber = forwardRef<HTMLInputElement, InputProps>((props, forwardedRef) => {
  const { classNames, prefixInputElement, fieldProps } = useField(props)
  const inputRef = useRef<HTMLInputElement>(null)
  const composedRef = useComposedRefs(inputRef, forwardedRef)

  return (
    <div className={classNames}>
      {prefixInputElement}
      <input type="number" ref={composedRef} {...fieldProps} className="field" />
      <div className="input-number--counter-wrapper">
        <InputNumberButton onClick={handleStep(inputRef, 'stepUp')} title="Increase Value" />
        <InputNumberButton onClick={handleStep(inputRef, 'stepDown')} direction="bottom" title="Decrease Value" />
      </div>
    </div>
  )
})

InputNumber.displayName = 'Pillar-InputNumber'

/*
===================================================================================================
   Input Password Area Section
===================================================================================================
*/

export const InputPassword = forwardRef<HTMLInputElement, InputPasswordProps>((props, forwardedRef) => {
  const { visibleIcon = <Eye width="16" />, hiddenIcon = <EyeOff width="16" />, ...restProps } = props
  const { classNames, prefixInputElement, fieldProps } = useField(restProps)
  const { booleanValue: showPassword, setToggle } = useBooleanState(false)
  return (
    <div className={classNames}>
      {prefixInputElement}
      <input type={showPassword ? 'text' : 'password'} ref={forwardedRef} {...fieldProps} className="field" />

      <button
        aria-label={`${showPassword ? 'Hide' : 'Show '} Password`}
        type="button"
        onClick={setToggle}
        className="input--suf-content password-input--button u_center"
      >
        {showPassword ? hiddenIcon : visibleIcon}
      </button>
    </div>
  )
})

InputPassword.displayName = 'Pillar-InputPassword'

/*
===================================================================================================
   Input Password Area Section
===================================================================================================
*/

export const InputSearch = forwardRef<HTMLInputElement, InputSearchProps>((props, forwardedRef) => {
  const { classNames, prefixInputElement, suffixInputElement, fieldProps } = useField(props)

  const inputRef = useRef<HTMLInputElement>(null)
  const mergedRef = useComposedRefs(inputRef, forwardedRef)
  const handleInputClick = () => {
    if (inputRef.current) {
      inputRef.current.value = ''
    }
  }

  return (
    <div className={classNames}>
      {prefixInputElement}
      <input type="search" ref={mergedRef} {...fieldProps} className="field field__search" />
      <Flex as="span" items="center" className="input--search--suffix">
        {suffixInputElement}
        <X
          onClick={handleInputClick}
          className="search-field--clear"
          width="1em"
          stroke="var(--surface-11)"
          transform="translate(-8,0)"
        />
      </Flex>
    </div>
  )
})

InputSearch.displayName = 'Pillar/InputSearch'

/*
===================================================================================================
   Select Section
===================================================================================================
*/

export const Select = forwardRef<HTMLSelectElement, SelectProps>((props, forwardedRef) => {
  const { children, ...restProps } = props
  const { classNames, fieldProps } = useField(restProps)

  return (
    <div className={classNames}>
      <select ref={forwardedRef} {...fieldProps} className="field select-field">
        {children}{' '}
      </select>
      <span className="select-chevron">
        <ChevronDown width={16} />
      </span>
    </div>
  )
})

Select.displayName = 'Pillar-Select'

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
    color = groupCtx?.color ?? 'primary',
    transform,
    fluid = groupCtx?.fluid,
    placeholder = '○',
    length = 4,
    children,
    ...rest
  } = props
  const className = classnames(`field-wrapper field-wrapper__${variant} u_flex u_spacing-xs u_${color}`, {
    [`u_corner-${corner}`]: !!corner,
    [`u_transform__${transform}`]: !!transform,
    [`u_size-${size}`]: !!size,
  })

  console.log(forwardedRef)

  const [pin, setPin] = useState<string[]>(Array(length).fill(''))
  const inputRefs = useRef<HTMLInputElement[]>([])

  const handleInputChange = (value: string, index: number) => {
    const newPin = [...pin]
    const val = newPin[index] !== '' ? value[1] : value
    newPin[index] = val
    setPin(newPin)
    // Move focus to the next input when the current input is filled
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
    const newPin = [...pin]

    for (let i = 0; i < length; i++) {
      newPin[i] = pastedData[i] || ''
    }

    setPin(newPin)
  }

  return (
    <Flex gap="sm" items="center">
      {Array.from({ length }, (_, index) => (
        <div className={className} key={index}>
          <input
            placeholder={placeholder}
            className="pin-input field"
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

PinInput.displayName = 'Pillar-PinInput'

/*
===================================================================================================
   Input File Section
===================================================================================================
*/

export const InputFile = forwardRef<HTMLInputElement, InputProps>((props, forwardedRef) => {
  const { value, title = 'Select File', ...restProps } = props
  const { classNames, fieldProps } = useField(restProps)

  const inputRef = useRef<HTMLInputElement>(null)
  const composedRef = useComposedRefs(inputRef, forwardedRef)

  const [_value, setValue] = useControllableState({ controlledValue: value, defaultValue: null })
  const hasValue = Array.isArray(_value) ? _value.length !== 0 : !!_value

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    if (fieldProps.multiple) {
      const files = Array.from<File>(e.target.files ?? [])

      let filesNames = `files (${files.length}) : `
      for (let file of files) {
        filesNames += `${file.name} `
      }
      setValue(filesNames)

      return
    }
    setValue(e.target.files?.[0].name ?? '')
  }
  return (
    <Grid grid="auto 1fr" className={classNames} onClick={() => inputRef.current?.click()}>
      <input type="file" ref={composedRef} {...fieldProps} className="u_visually-hidden" onChange={handleChange} />
      <Flex as="span" items="center" className="input-file">
        {title}
      </Flex>

      <Text as={Flex} color="surface" size="xs" contrast="low" items="center">
        {hasValue ? _value : 'No file Choose'}
      </Text>
    </Grid>
  )
})

InputFile.displayName = 'Pillar-InputFile'

//
export const FormController = (props: FormControllerProps) => {
  const id = `form-${useId()}-field`
  const { children, label, hideLabel, error, className, hint, ...rest } = props
  const messageID = `${id}-message`
  const hintID = `${id}-hint`
  const hasError = !!error

  let describedby = ''
  if (hasError) describedby += ` ${messageID}`
  if (!!hint) describedby += ` ${hintID}`
  const ariaDescribedby = describedby ? describedby.trim() : ''

  const values = {
    ...rest,
    id,
    describedby: ariaDescribedby,
    hasError,
  }

  const fieldLabel = `${label}${rest.required ? ' *' : ''}`
  return (
    <FormControllerProvider {...values}>
      <Flex direction="column" className={classnames('text-field--root u_size-xs', { [className!]: !!className })}>
        <label className={classnames('u_font-medium u_size-sm', { 'u_visually-hidden': !!hideLabel })} htmlFor={id}>
          {fieldLabel}
        </label>
        {hint && <span id={hintID}>{hint}</span>}
        {children}
        {error && (
          <div className="field--error u_center" id={messageID} role="alert">
            <span className="field--error-icon">{<X type="circle" width="16" />}</span>
            <span> {error}</span>
          </div>
        )}
      </Flex>
    </FormControllerProvider>
  )
}

export const FormGroup = ({
  title,
  hideTitle,
  direction = 'column',
  children,
  hideBorder,
  ...rest
}: FormGroupProps) => {
  return (
    <fieldset
      className={classnames('form-group--container', {
        'form-group--hide-border ': !!hideBorder,
      })}
    >
      <legend className={classnames('form-group--legend', { 'u_visually-hidden': !!hideTitle })}>{title}</legend>
      <Flex
        gap="sm"
        className={classnames('form-group', { 'form-group--fluid': !!rest.fluid })}
        items="start"
        direction={direction}
      >
        <FormGroupProvider {...rest}>{children}</FormGroupProvider>
      </Flex>
    </fieldset>
  )
}

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
