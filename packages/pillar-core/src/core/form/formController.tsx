// import { classnames } from '@utils/classnames'
// import { useId } from 'react'
// import { Text } from '..'
// import Flex from '../flex'
// import { TextFieldProvider, useTextField } from './context'

import { useId } from 'react'
// import { Check,  } from '@pillar/icons'
import { classnames } from '../../utils/classnames'
import { Flex, Text } from '..'
import { TextFieldProvider, useTextField } from './context'
import { FormControllerProps, FormMessageProps } from './form.type'

export const Custom = ({ icon, message, ...rest }: FormMessageProps) => {
  const { id } = useTextField()

  const messageId = `${id}-message`

  if (!message) return null
  return (
    <Text aria-live="polite" id={messageId} as="span" size="xs" color="red" contrast="low" {...rest}>
      <Flex items="center" gap="2xs">
        <span>{icon}</span>
        <span> {message}</span>
      </Flex>
    </Text>
  )
}

export const FormController = (props: FormControllerProps) => {
  const id = `form-${useId()}-field`
  const { children, label, hideLabel, error, className, hint, ...rest } = props
  const messageID = `${id}-message`
  const hintID = `${id}-hint`
  let describedby = ''

  if (!!error) describedby += ` ${messageID}`
  if (!!hint) describedby += ` ${hintID}`

  const ariaDescribedby = describedby ? describedby.trim() : null

  const values = {
    ...rest,
    id,
    ariaDescribedby,
  }

  const fieldLabel = `${label} ${rest.required ? '*' : ''}`
  return (
    <TextFieldProvider {...values}>
      <Flex direction="column" gap="2xs" className={classnames('text-field--root', { [className!]: !!className })}>
        <Text
          className={classnames({
            'u_sr-only': hideLabel,
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
          <Text as={Flex} gap="xs" items="center" id={messageID} color="red" size="xs" contrast="low" role="alert">
            <span>{/* <Alert type="circle" width="20" /> */}</span>
            <span> {error}</span>
          </Text>
        )}
      </Flex>
    </TextFieldProvider>
  )
}
