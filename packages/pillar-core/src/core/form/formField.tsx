import { ChevronDown, Eye, EyeOff, ListSearch } from '@pillar/icons'
import { useBooleanState, useControllableState } from '@pillar/hooks'
import { Flex, Text, Grid } from '..'
import { classnames, composeRef, createContext } from '@pillar/utils'
import { ChangeEvent, forwardRef, useId, useRef } from 'react'

import type {
  FormControllerProps,
  FormGroupProps,
  InputPasswordProps,
  InputProps,
  SelectProps,
  TextareaProps,
  FormControllerContextProps,
  FormGroupContextProps,
} from './form.type'

const [FormControllerProvider, useFormController] = createContext<FormControllerContextProps>('FormController')
const [FormGroupProvider, useFormGroup] = createContext<FormGroupContextProps>('FormGroup')

/*
===================================================================================================
   TextArea Area Section
===================================================================================================
*/

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>((props, forwardedRef) => {
  const ctx = useFormController()
  const formGroupContext = useFormGroup()
  const {
    size = formGroupContext?.size,
    variant = formGroupContext?.variant ?? 'outline',
    corner = formGroupContext?.corner,
    color = formGroupContext?.color ?? 'primary',
    fluid = formGroupContext?.fluid,
    isInvalid,
    id,
    prefixInput,
    suffixInput,
    children,
    ...restProps
  } = props

  const prefixInputElement = !!prefixInput && (
    <span className="input-field--prefix u_flex-inline u_items-center u_justify-center">{prefixInput}</span>
  )
  const suffixInputElement = !!suffixInput && <span className="input-field--suffix u_center">{suffixInput}</span>

  const wrapperClassName = classnames(
    `form-field-wrapper u_corner-${corner} form-field-wrapper__${variant} u_flex u_items-start u_spacing-xs u_${color}`,
    { 'form-field-wrapper__fluid': !!fluid }
  )

  return (
    <Flex
      justify="between"
      gap="xs"
      className={wrapperClassName}
      data-disabled={restProps.disabled}
      data-invalid={isInvalid}
      data-readonly={restProps.readOnly}
    >
      {prefixInputElement}

      <textarea
        aria-describedby={ctx?.describedby}
        ref={forwardedRef}
        {...restProps}
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
  const ctx = useFormController()
  const formGroupContext = useFormGroup()
  const {
    size = formGroupContext?.size ?? 'md',
    variant = formGroupContext?.variant ?? 'outline',
    corner = formGroupContext?.corner ?? 'sm',
    color = formGroupContext?.color ?? 'primary',
    fluid = formGroupContext?.fluid,
    prefixInput,
    suffixInput,
    isInvalid,
    ...restProps
  } = props

  const prefixInputElement = !!prefixInput && <span className="input-field--prefix u_center">{prefixInput}</span>
  const suffixInputElement = !!suffixInput && <span className="input-field--suffix u_center">{suffixInput}</span>

  const wrapperClassName = classnames(
    `form-field-wrapper  u_corner-${corner} form-field-wrapper__${variant} u_flex u_${color}`,
    {
      'form-field-wrapper__fluid': !!fluid,
    }
  )

  return (
    <Flex
      justify="between"
      gap="xs"
      className={wrapperClassName}
      data-disabled={restProps.disabled}
      data-invalid={isInvalid}
      data-readonly={restProps.readOnly}
    >
      {prefixInputElement}
      <input
        aria-describedby={ctx?.describedby}
        type="text"
        ref={forwardedRef}
        aria-invalid={isInvalid}
        {...restProps}
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
  const ctx = useFormController()
  const formGroupContext = useFormGroup()
  const {
    size = formGroupContext?.size ?? 'md',
    variant = formGroupContext?.variant ?? 'outline',
    corner = formGroupContext?.corner ?? 'sm',
    color = formGroupContext?.color ?? 'primary',
    fluid = formGroupContext?.fluid,
    prefixInput,
    suffixInput,
    isInvalid,
    ...rest
  } = props

  const inputRef = useRef<HTMLInputElement>(null)

  const composedRef = composeRef(inputRef, forwardedRef)

  const wrapperClassName = classnames(
    `form-field-wrapper form-field-wrapper__${variant} u_flex u_spacing-xs u_${color}`,
    { [`u_corner-${corner}`]: !!corner, [`u_size-${size}`]: !!size }
  )

  return (
    <div
      className={wrapperClassName}
      data-disabled={rest.disabled}
      data-invalid={isInvalid}
      data-readonly={rest.readOnly}
    >
      <input
        aria-describedby={ctx?.describedby}
        type="number"
        ref={composedRef}
        {...rest}
        {...ctx}
        className="form-field"
      />
      <div className="input-number--counter-wrapper">
        <button
          onClick={() => {
            inputRef.current?.focus()
            inputRef.current?.stepUp()
            inputRef.current?.dispatchEvent(new Event('input', { bubbles: true }))
          }}
          aria-label="Increase Value"
          tabIndex={-1}
          className="number-input--button"
        >
          <ChevronDown height="90%" direction="top" />
        </button>

        <button
          onClick={() => {
            inputRef.current?.focus()
            inputRef.current?.stepDown()
            inputRef.current?.dispatchEvent(new Event('input', { bubbles: true }))
          }}
          aria-label="Decrease Value"
          tabIndex={-1}
          className="number-input--button"
        >
          <ChevronDown height="90%" />
        </button>
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
  const ctx = useFormController()
  const formGroupContext = useFormGroup()
  const {
    size = formGroupContext?.size ?? 'md',
    variant = formGroupContext?.variant ?? 'outline',
    corner = formGroupContext?.corner ?? 'sm',
    color = formGroupContext?.color ?? 'primary',
    fluid = formGroupContext?.fluid,
    isInvalid,
    children,
    visibleIcon = <Eye height="16" />,
    hiddenIcon = <EyeOff height="16" />,
    ...restProps
  } = props

  const { booleanValue: showPassword, setToggle } = useBooleanState(false)
  const type = showPassword ? 'text' : 'password'
  const wrapperClassName = classnames(
    `form-field-wrapper form-field-wrapper__${variant} u_flex u_spacing-xs u_${color}`,
    { [`u_corner-${corner}`]: !!corner, [`u_size-${size}`]: !!size }
  )
  const label = showPassword ? 'Hide Password' : 'Show Password'
  return (
    <Flex
      justify="between"
      className={wrapperClassName}
      data-disabled={restProps.disabled}
      data-invalid={isInvalid}
      data-readonly={restProps.readOnly}
    >
      <input
        aria-describedby={ctx?.describedby}
        type={type}
        ref={forwardedRef}
        {...restProps}
        {...ctx}
        className="form-field"
      />

      <button aria-label={label} type="button" onClick={setToggle} className="password-input--button u_center">
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

export const InputSearch = forwardRef<HTMLInputElement, InputProps>((props, forwardedRef) => {
  const ctx = useFormController()
  const formGroupContext = useFormGroup()
  const {
    size = formGroupContext?.size ?? 'md',
    variant = formGroupContext?.variant ?? 'outline',
    corner = formGroupContext?.corner ?? 'sm',
    color = formGroupContext?.color ?? 'primary',
    fluid = formGroupContext?.fluid,
    isInvalid,
    children,
    ...restProps
  } = props
  const wrapperClassName = classnames(
    `form-field-wrapper form-field-wrapper__${variant} u_flex u_spacing-xs u_${color}`,
    { [`u_corner-${corner}`]: !!corner, [`u_size-${size}`]: !!size }
  )
  return (
    <Flex justify="between" className={wrapperClassName}>
      <input
        type="search"
        aria-describedby={ctx?.describedby}
        ref={forwardedRef}
        {...restProps}
        {...ctx}
        className="form-field form-field__search"
      />
      <ListSearch
        className="search-field--icon"
        width="1.25em"
        stroke="var(--surface-11)"
        transform="translate(-8,0)"
      />
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
  const ctx = useFormController()
  const formGroupContext = useFormGroup()
  const {
    size = formGroupContext?.size ?? 'md',
    variant = formGroupContext?.variant ?? 'outline',
    corner = formGroupContext?.corner ?? 'sm',
    color = formGroupContext?.color ?? 'primary',
    fluid = formGroupContext?.fluid,
    isInvalid,
    children,
    ...restProps
  } = props
  const wrapperClassName = classnames(
    `form-field-wrapper form-field-wrapper__${variant} u_flex u_spacing-xs u_${color}`,
    { [`u_corner-${corner}`]: !!corner, [`u_size-${size}`]: !!size }
  )

  return (
    <div className={wrapperClassName} data-disabled={restProps.disabled} data-invalid={isInvalid}>
      <select
        aria-describedby={ctx?.describedby}
        ref={forwardedRef}
        {...restProps}
        {...ctx}
        className="form-field select-field"
      >
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

export const InputFile = forwardRef<HTMLInputElement, InputProps>((props, forwardedRef) => {
  const ctx = useFormController()
  const formGroupContext = useFormGroup()
  const {
    size = formGroupContext?.size ?? 'md',
    variant = formGroupContext?.variant ?? 'outline',
    corner = formGroupContext?.corner ?? 'sm',
    color = formGroupContext?.color ?? 'primary',
    fluid = formGroupContext?.fluid,
    value,
    title = 'Select File',
    isInvalid,
    children,
    ...rest
  } = props
  const inputRef = useRef<HTMLInputElement>(null)
  const composedRef = composeRef(inputRef, forwardedRef)
  const wrapperClassName = classnames(
    `form-field-wrapper form-field-wrapper__${variant} u_flex u_spacing-xs u_${color}`,
    { [`u_corner-${corner}`]: !!corner, [`u_size-${size}`]: !!size }
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
      gap="xs"
      className={wrapperClassName}
      data-disabled={rest.disabled}
      data-invalid={isInvalid}
      data-readonly={rest.readOnly}
      onClick={() => inputRef.current?.click()}
    >
      <input
        type="file"
        aria-describedby={ctx?.describedby}
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

  if (!!error) describedby += ` ${messageID}`
  if (!!hint) describedby += ` ${hintID}`

  const ariaDescribedby = describedby ? describedby.trim() : undefined

  const values = {
    ...rest,
    id,
    describedby: ariaDescribedby,
  }

  const fieldLabel = `${label} ${rest.required ? '*' : ''}`
  return (
    <FormControllerProvider {...values}>
      <Flex direction="column" gap="2xs" className={classnames('text-field--root', { [className!]: !!className })}>
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
          <Text as={Flex} gap="xs" items="center" id={messageID} color="danger" size="xs" contrast="low" role="alert">
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
