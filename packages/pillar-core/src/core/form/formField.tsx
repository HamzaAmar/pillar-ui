import { ChevronDown, Eye, EyeOff } from '@pillar/icons'
import { useBooleanState, useControllableState } from '@pillar/hooks'
import { Flex } from '..'
import { classnames } from '../../utils'
import { forwardRef, useRef } from 'react'
import { useTextField } from './context'
import { composeRef } from '../../utils'

import type { InputProps, SelectProps, TextAreaProps } from './form.type'
import { Text, Grid } from '..'
/*
===================================================================================================
   TextArea Area Section
===================================================================================================
*/

export const Textarea = forwardRef<HTMLTextAreaElement, TextAreaProps>((props, forwardedRef) => {
  const ctx = useTextField()
  const {
    size = 'md',
    variant = 'outline',
    corner = 'sm',
    isInvalid,
    id,
    prefixInput,
    fluid,
    children,
    ...restProps
  } = props

  const prefixInputIfExist = !!prefixInput && (
    <span className="input-field--prefix u_flex-inline u_items-center u_justify-center">{prefixInput}</span>
  )

  const wrapperClassName = classnames(
    `form-field-wrapper l_corner-${corner} form-field-wrapper__${variant} u_flex u_items-start u_spacing-xs`,
    { 'form-field-wrapper__fluid': fluid }
  )

  return (
    <span
      className={wrapperClassName}
      data-disabled={restProps.disabled}
      data-invalid={isInvalid}
      data-readonly={restProps.readOnly}
    >
      {prefixInputIfExist}

      <textarea
        aria-describedby={ctx.ariaDescribedby!}
        ref={forwardedRef}
        {...restProps}
        {...ctx}
        className={`form-field textarea__${size}`}
      ></textarea>
    </span>
  )
})

Textarea.displayName = 'Pillar-Textarea'

/*
===================================================================================================
   Input Area Section
===================================================================================================
*/

export const Input = forwardRef<HTMLInputElement, InputProps>((props, forwardedRef) => {
  // const fallbackId = useId()
  const { id, ariaDescribedby, ...ctx } = useTextField()
  const {
    corner = 'sm',
    variant = 'outline',
    prefixInput,
    suffixInput,
    isInvalid,
    size = 'md',
    fluid,
    ...restProps
  } = props

  const prefixInputIfExist = !!prefixInput && <span className="input-field--prefix u_center">{prefixInput}</span>
  const suffixInputIfExist = !!suffixInput && <span className="input-field--suffix u_center">{suffixInput}</span>

  const wrapperClassName = classnames(`form-field-wrapper  l_corner-${corner} form-field-wrapper__${variant} u_flex`, {
    'form-field-wrapper__fluid': !!fluid,
  })

  return (
    <Flex
      justify="between"
      gap="xs"
      className={wrapperClassName}
      data-disabled={restProps.disabled}
      data-invalid={isInvalid}
      data-readonly={restProps.readOnly}
    >
      {prefixInputIfExist}
      <input
        type="text"
        id={id}
        ref={forwardedRef}
        aria-describedby={ariaDescribedby!}
        aria-invalid={isInvalid}
        {...restProps}
        {...ctx}
        className={`form-field l_size-${size}`}
      />
      {suffixInputIfExist}
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
  const { id, ...ctx } = useTextField()
  const {
    corner = 'sm',
    variant = 'outline',
    prefixInput,
    suffixInput,
    isInvalid,
    size = 'md',
    fluid,
    ...restProps
  } = props

  const inputRef = useRef<HTMLInputElement>(null)

  const composedRef = composeRef(inputRef, forwardedRef)

  const wrapperClassName = `form-field-wrapper l_corner-${corner} form-field-wrapper__${variant} u_flex u_spacing-xs`

  return (
    <div
      className={wrapperClassName}
      data-disabled={restProps.disabled}
      data-invalid={isInvalid}
      data-readonly={restProps.readOnly}
    >
      <input type="number" ref={composedRef} id={id} {...restProps} {...ctx} className={`form-field l_size-${size}`} />
      <Flex direction="column" className="input-number--counter-wrapper">
        <button
          onClick={() => {
            inputRef.current?.focus()
            inputRef.current?.stepUp()
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
          }}
          aria-label="Decrease Value"
          tabIndex={-1}
          className="number-input--button"
        >
          <ChevronDown height="90%" />
        </button>
      </Flex>
    </div>
  )
})

InputNumber.displayName = 'Pillar-InputNumber'

/*
===================================================================================================
   Input Password Area Section
===================================================================================================
*/

export const InputPassword = forwardRef<HTMLInputElement, InputProps>((props, forwardedRef) => {
  const { id, ...ctx } = useTextField()
  const { size = 'md', variant = 'outline', corner = 'sm', isInvalid, children, ...restProps } = props

  const { booleanValue: showPassword, setToggle } = useBooleanState(false)
  const type = showPassword ? 'text' : 'password'
  const wrapperClassName = `form-field-wrapper l_corner-${corner} form-field-wrapper__${variant} u_flex u_spacing-xs`
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
        type={type}
        id={id}
        aria-describedby={ctx.ariaDescribedby!}
        ref={forwardedRef}
        {...restProps}
        {...ctx}
        className={`form-field l_size-${size} l_flex-1 `}
      />

      <button aria-label={label} type="button" onClick={setToggle} className="password-input--button u_center">
        {showPassword ? <EyeOff height="16" /> : <Eye height="16" />}
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

export const InputSearch = forwardRef<HTMLInputElement, InputProps>(
  ({ size = 'md', variant = 'outline', corner = 'sm', isInvalid, id: idProps, ...restProps }, forwardedRef) => {
    const { id, ...ctx } = useTextField()

    const wrapperClassName = `form-field-wrapper l_corner-${corner} form-field-wrapper__${variant} u_flex u_spacing-xs`

    return (
      <Flex justify="between" className={wrapperClassName}>
        <input
          type="search"
          id={id}
          ref={forwardedRef}
          {...restProps}
          {...ctx}
          className={`form-field form-field__search l_size-${size}`}
        />
        {/* <Search className="search-field--icon" width="1.25em" stroke="var(--slate-11)" transform="translate(-8,0)" /> */}
      </Flex>
    )
  }
)

InputSearch.displayName = 'Pillar-InputSearch'

/*
===================================================================================================
   Select Section
===================================================================================================
*/

export const Select = forwardRef<HTMLSelectElement, SelectProps>((props, forwardedRef) => {
  const { id, ...ctx } = useTextField()
  const { size = 'md', variant = 'outline', corner = 'sm', isInvalid, children, ...restProps } = props

  const wrapperClassName = `form-field-wrapper l_corner-${corner} form-field-wrapper__${variant} u_flex u_spacing-xs`

  return (
    <div className={wrapperClassName} data-disabled={restProps.disabled} data-invalid={isInvalid}>
      <select id={id} ref={forwardedRef} {...restProps} {...ctx} className={`form-field select-field l_size-${size}`}>
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

export const InputFile = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size = 'md',
      variant = 'outline',
      corner = 'sm',
      isInvalid,
      id: idProps,
      children,
      title = 'Choose File',
      value,
      ...restProps
    },
    forwardedRef
  ) => {
    const { id, ...provider } = useTextField()
    const inputRef = useRef<HTMLInputElement>(null)
    const composedRef = composeRef(inputRef, forwardedRef)
    const wrapperClassName = `form-field-wrapper l_corner-${corner} form-field-wrapper__${variant}`
    const [_value, setValue] = useControllableState({ controlledValue: value, defaultValue: null })
    const hasValue = Array.isArray(_value) ? _value.length !== 0 : _value !== null

    function handleChange(e: any) {
      if (restProps.multiple) {
        const files = Array.from<File>(e.target.files)

        let filesNames = `(${files.length}) : `
        for (let file of files) {
          filesNames += `${file.name} `
        }
        setValue(filesNames)

        return
      }
      setValue(e.target.files[0].name)
    }

    return (
      <Grid columns="auto 1fr" gap="xs" className={wrapperClassName}>
        <input
          type="file"
          ref={composedRef}
          id={id}
          {...restProps}
          {...provider}
          className={`u_sr-only`}
          onChange={handleChange}
        />
        <Flex
          as="span"
          items="center"
          onClick={() => inputRef.current?.click()}
          className={`input-file l_size-${size}`}
        >
          {title}
        </Flex>
        {hasValue ? (
          <Text
            as={Flex}
            truncate="multiline"
            numberLine={1}
            color="slate"
            size="xs"
            contrast="low"
            items="center"
            style={{ width: '100%' }}
          >
            {_value}
          </Text>
        ) : (
          <Text as={Flex} color="slate" size="xs" contrast="low" items="center" style={{ width: '100%' }}>
            No File Choose
          </Text>
        )}
      </Grid>
    )
  }
)

InputFile.displayName = 'Pillar-InputFile'
