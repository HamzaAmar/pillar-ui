import { ChevronDown, Eye, EyeOff, X } from '@pillar-ui/icons'
import { useBooleanState, useControllableState, useComposedRefs } from '@pillar-ui/hooks'
import { Flex, Text, Grid } from '..'
import { classnames, createContext } from '@pillar-ui/utils'
import { ChangeEvent, forwardRef, useId, useRef, useState } from 'react'

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
} from './form.type'

const [FormControllerProvider, useFormController] = createContext<FormControllerContextProps>({
  name: 'FormController',
})
const [FormGroupProvider, useFormGroup] = createContext<FormGroupContextProps>({ name: 'FormGroup' })

/*
===================================================================================================
   TextArea Area Section
===================================================================================================
*/

const PREFIX_CLASS = 'input--pref-content input-field--prefix u_center'
const SUFFIX_CLASS = 'input--suf-content input-field--suffix u_center'

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>((props, forwardedRef) => {
  const { hasError, describedby, ...ctx } = useFormController() ?? {}
  const formGroupContext = useFormGroup()
  const {
    size = formGroupContext?.size,
    variant = formGroupContext?.variant ?? 'outline',
    corner = formGroupContext?.corner,
    color = formGroupContext?.color ?? 'primary',
    transform,
    fluid = formGroupContext?.fluid,
    isInvalid,
    id,
    prefixInput,
    suffixInput,
    children,
    ...rest
  } = props

  const prefixInputElement = !!prefixInput && <span className={PREFIX_CLASS}>{prefixInput}</span>
  const suffixInputElement = !!suffixInput && <span className={SUFFIX_CLASS}>{suffixInput}</span>

  const wrapperClassName = classnames(
    `form-field-wrapper u_corner-${corner} form-field-wrapper__${variant} u_${color}`,
    { [`u_transform__${transform}`]: !!transform, 'form-field-wrapper__fluid': !!fluid }
  )

  return (
    <Flex
      justify="between"
      gap="xs"
      className={wrapperClassName}
      data-disabled={rest.disabled}
      data-invalid={hasError || isInvalid}
      data-readonly={rest.readOnly}
    >
      {prefixInputElement}

      <textarea
        aria-describedby={describedby}
        ref={forwardedRef}
        {...rest}
        {...ctx}
        className={`form-field textarea__${size}`}
      ></textarea>
      {suffixInputElement}
    </Flex>
  )
})

Textarea.displayName = 'Pillar-Textarea'

/*
===================================================================================================
   Input Area Section
===================================================================================================
*/

export const Input = forwardRef<HTMLInputElement, InputProps>((props, forwardedRef) => {
  const { hasError, describedby, ...ctx } = useFormController() ?? {}
  const formGroupContext = useFormGroup()
  const {
    size = formGroupContext?.size ?? 'md',
    variant = formGroupContext?.variant ?? 'outline',
    corner = formGroupContext?.corner,
    color = formGroupContext?.color ?? 'primary',
    transform,
    fluid = formGroupContext?.fluid,
    prefixInput,
    suffixInput,
    isInvalid,
    ...rest
  } = props

  const prefixInputElement = !!prefixInput && <span className={PREFIX_CLASS}>{prefixInput}</span>
  const suffixInputElement = !!suffixInput && <span className={SUFFIX_CLASS}>{suffixInput}</span>

  const wrapperClassName = classnames(
    `form-field-wrapper  u_corner-${corner} form-field-wrapper__${variant} u_${color}`,
    {
      [`u_transform__${transform}`]: !!transform,
      'form-field-wrapper__fluid': !!fluid,
    }
  )

  return (
    <Flex
      justify="between"
      className={wrapperClassName}
      data-disabled={rest.disabled}
      data-invalid={hasError || isInvalid}
      data-readonly={rest.readOnly}
    >
      {prefixInputElement}
      <input
        aria-describedby={describedby}
        type="text"
        ref={forwardedRef}
        aria-invalid={isInvalid}
        {...rest}
        {...ctx}
        className={`form-field u_size-${size}`}
      />
      {suffixInputElement}
    </Flex>
  )
})

Input.displayName = 'Pillar-Input'

/*
===================================================================================================
   InputNumber Area Section
===================================================================================================
*/

export const InputNumber = forwardRef<HTMLInputElement, InputProps>((props, forwardedRef) => {
  const { hasError, describedby, ...ctx } = useFormController() ?? {}
  const formGroupContext = useFormGroup()
  const {
    size = formGroupContext?.size ?? 'md',
    variant = formGroupContext?.variant ?? 'outline',
    corner = formGroupContext?.corner,
    color = formGroupContext?.color ?? 'primary',
    transform,
    fluid = formGroupContext?.fluid,
    prefixInput,
    suffixInput,
    isInvalid,
    ...rest
  } = props

  const inputRef = useRef<HTMLInputElement>(null)

  const composedRef = useComposedRefs(inputRef, forwardedRef)

  const wrapperClassName = classnames(
    `form-field-wrapper form-field-wrapper__${variant} u_flex u_spacing-xs u_${color}`,
    {
      'form-field-wrapper__fluid': !!fluid,
      [`u_corner-${corner}`]: !!corner,
      [`u_transform__${transform}`]: !!transform,
      [`u_size-${size}`]: !!size,
    }
  )

  return (
    <Flex
      justify="between"
      className={wrapperClassName}
      data-disabled={rest.disabled}
      data-invalid={hasError || isInvalid}
      data-readonly={rest.readOnly}
    >
      <input
        aria-describedby={describedby}
        type="number"
        ref={composedRef}
        {...rest}
        {...ctx}
        className={`form-field u_size-${size}`}
      />
      <div className="input-number--counter-wrapper">
        <button
          type="button"
          onClick={() => {
            inputRef.current?.focus()
            inputRef.current?.stepUp()
            inputRef.current?.dispatchEvent(new Event('input', { bubbles: true }))
          }}
          aria-label="Increase Value"
          tabIndex={-1}
          className="number-input--button"
        >
          <ChevronDown width=".85em" direction="top" />
        </button>

        <button
          type="button"
          onClick={() => {
            inputRef.current?.focus()
            inputRef.current?.stepDown()
            inputRef.current?.dispatchEvent(new Event('input', { bubbles: true }))
          }}
          aria-label="Decrease Value"
          tabIndex={-1}
          className="number-input--button"
        >
          <ChevronDown width=".85em" />
        </button>
      </div>
    </Flex>
  )
})

InputNumber.displayName = 'Pillar-InputNumber'

/*
===================================================================================================
   Input Password Area Section
===================================================================================================
*/

export const InputPassword = forwardRef<HTMLInputElement, InputPasswordProps>((props, forwardedRef) => {
  const { hasError, describedby, ...ctx } = useFormController() ?? {}
  const formGroupContext = useFormGroup()
  const {
    size = formGroupContext?.size ?? 'md',
    variant = formGroupContext?.variant ?? 'outline',
    corner = formGroupContext?.corner,
    color = formGroupContext?.color ?? 'primary',
    transform,
    fluid = formGroupContext?.fluid,
    isInvalid,
    children,
    visibleIcon = <Eye width="16" />,
    hiddenIcon = <EyeOff width="16" />,
    prefixInput,
    ...rest
  } = props

  const { booleanValue: showPassword, setToggle } = useBooleanState(false)
  const type = showPassword ? 'text' : 'password'
  const wrapperClassName = classnames(`form-field-wrapper form-field-wrapper__${variant} u_flex u_${color}`, {
    'form-field-wrapper__fluid': !!fluid,
    [`u_corner-${corner}`]: !!corner,
    [`u_transform__${transform}`]: !!transform,
    [`u_size-${size}`]: !!size,
  })

  const prefixInputElement = !!prefixInput && <span className={PREFIX_CLASS}>{prefixInput}</span>

  const label = showPassword ? 'Hide Password' : 'Show Password'
  return (
    <Flex
      justify="between"
      className={wrapperClassName}
      data-disabled={rest.disabled}
      data-invalid={hasError || isInvalid}
      data-readonly={rest.readOnly}
    >
      {prefixInputElement}
      <input
        aria-describedby={describedby}
        type={type}
        ref={forwardedRef}
        {...rest}
        {...ctx}
        className={`form-field u_size-${size}`}
      />

      <button
        aria-label={label}
        type="button"
        onClick={setToggle}
        className="input--suf-content password-input--button u_center"
      >
        {showPassword ? hiddenIcon : visibleIcon}
      </button>
    </Flex>
  )
})

InputPassword.displayName = 'Pillar-InputPassword'

/*
===================================================================================================
   Input Password Area Section
===================================================================================================
*/

export const InputSearch = forwardRef<HTMLInputElement, InputSearchProps>((props, forwardedRef) => {
  const { hasError, describedby, ...ctx } = useFormController() ?? {}
  const formGroupContext = useFormGroup()
  const {
    size = formGroupContext?.size ?? 'md',
    variant = formGroupContext?.variant ?? 'outline',
    corner = formGroupContext?.corner,
    color = formGroupContext?.color ?? 'primary',
    transform,
    fluid = formGroupContext?.fluid,
    isInvalid,
    children,
    prefixInput,
    suffixInput,
    ...rest
  } = props
  const wrapperClassName = classnames(
    `form-field-wrapper form-field-wrapper__${variant} u_flex u_spacing-xs u_${color}`,
    {
      'form-field-wrapper__fluid': !!fluid,
      [`u_corner-${corner}`]: !!corner,
      [`u_transform__${transform}`]: !!transform,
      [`u_size-${size}`]: !!size,
    }
  )
  const inputRef = useRef<HTMLInputElement>(null)

  const mergedRef = useComposedRefs(inputRef, forwardedRef)

  const prefixInputElement = !!prefixInput && <span className={PREFIX_CLASS}>{prefixInput}</span>
  const suffixInputElement = !!suffixInput && <span className={SUFFIX_CLASS}>{suffixInput}</span>

  const handleInputClick = () => {
    if (inputRef.current) {
      inputRef.current.value = ''
    }
  }

  return (
    <Flex justify="between" data-disabled={rest.disabled} className={wrapperClassName}>
      {prefixInputElement}
      <input
        type="search"
        aria-describedby={describedby}
        ref={mergedRef}
        {...rest}
        {...ctx}
        className={`form-field input__${size} form-field__search`}
      />
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
    </Flex>
  )
})

InputSearch.displayName = 'Pillar/InputSearch'

/*
===================================================================================================
   Select Section
===================================================================================================
*/

export const Select = forwardRef<HTMLSelectElement, SelectProps>((props, forwardedRef) => {
  const { hasError, describedby, ...ctx } = useFormController() ?? {}
  const formGroupContext = useFormGroup()
  const {
    size = formGroupContext?.size ?? 'md',
    variant = formGroupContext?.variant ?? 'outline',
    corner = formGroupContext?.corner,
    color = formGroupContext?.color ?? 'primary',
    transform,
    fluid = formGroupContext?.fluid,
    isInvalid,
    children,
    ...rest
  } = props
  const wrapperClassName = classnames(
    `form-field-wrapper form-field-wrapper__${variant} u_flex u_spacing-xs u_${color}`,
    {
      'form-field-wrapper__fluid': !!fluid,
      [`u_corner-${corner}`]: !!corner,
      [`u_transform__${transform}`]: !!transform,
      [`u_size-${size}`]: !!size,
    }
  )

  return (
    <div className={wrapperClassName} data-disabled={rest.disabled} data-invalid={hasError || isInvalid}>
      <select aria-describedby={describedby} ref={forwardedRef} {...rest} {...ctx} className="form-field select-field">
        {children}
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
  const formGroupContext = useFormGroup()
  const {
    size = formGroupContext?.size ?? 'md',
    variant = formGroupContext?.variant ?? 'outline',
    corner = formGroupContext?.corner,
    color = formGroupContext?.color ?? 'primary',
    transform,
    fluid = formGroupContext?.fluid,
    placeholder = '○',
    length = 4,
    children,
    ...rest
  } = props
  const wrapperClassName = classnames(
    `form-field-wrapper form-field-wrapper__${variant} u_flex u_spacing-xs u_${color}`,
    { [`u_corner-${corner}`]: !!corner, [`u_transform__${transform}`]: !!transform, [`u_size-${size}`]: !!size }
  )

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

  console.log(forwardedRef)

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
        <div className={wrapperClassName} key={index}>
          <input
            placeholder={placeholder}
            className="pin-input form-field"
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
  const { hasError, describedby, ...ctx } = useFormController() ?? {}
  const formGroupContext = useFormGroup()
  const {
    size = formGroupContext?.size ?? 'md',
    variant = formGroupContext?.variant ?? 'outline',
    corner = formGroupContext?.corner,
    color = formGroupContext?.color ?? 'primary',
    transform,
    fluid = formGroupContext?.fluid,
    value,
    title = 'Select File',
    isInvalid,
    children,
    ...rest
  } = props
  const inputRef = useRef<HTMLInputElement>(null)
  const composedRef = useComposedRefs(inputRef, forwardedRef)
  const wrapperClassName = classnames(
    `form-field-wrapper form-field-wrapper__${variant} u_flex u_spacing-xs u_${color}`,
    {
      'form-field-wrapper__fluid': !!fluid,
      [`u_corner-${corner}`]: !!corner,
      [`u_transform__${transform}`]: !!transform,
      [`u_size-${size}`]: !!size,
    }
  )
  const [_value, setValue] = useControllableState({ controlledValue: value, defaultValue: null })
  const hasValue = Array.isArray(_value) ? _value.length !== 0 : !!_value

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    if (rest.multiple) {
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
    <Grid
      grid="auto 1fr"
      className={wrapperClassName}
      data-disabled={rest.disabled}
      data-invalid={hasError || isInvalid}
      data-readonly={rest.readOnly}
      onClick={() => inputRef.current?.click()}
    >
      <input
        type="file"
        aria-describedby={describedby}
        ref={composedRef}
        {...rest}
        {...ctx}
        className="u_visually-hidden"
        onChange={handleChange}
      />
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
  let describedby = ''
  const hasError = !!error

  if (hasError) describedby += ` ${messageID}`
  if (!!hint) describedby += ` ${hintID}`

  const ariaDescribedby = describedby ? describedby.trim() : undefined

  const values = {
    ...rest,
    id,
    describedby: ariaDescribedby,
    hasError,
  }

  const fieldLabel = `${label} ${rest.required ? '*' : ''}`
  return (
    <FormControllerProvider {...values}>
      <Flex direction="column" className={classnames('text-field--root', { [className!]: !!className })}>
        <Text
          className={classnames({
            'u_visually-hidden': !!hideLabel,
          })}
          as="label"
          size="sm"
          weight="medium"
          htmlFor={id}
        >
          {fieldLabel}
        </Text>
        {hint && (
          <Text as="span" size="xs" id={hintID}>
            {hint}
          </Text>
        )}
        {children}
        {error && (
          <Text as={Flex} items="center" id={messageID} color="danger" size="xs" contrast="low" role="alert">
            <span>{/* <Alert type="circle" width="20" /> */}</span>
            <span> {error}</span>
          </Text>
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
