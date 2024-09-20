import { Input, FormController, FormControllerProps, Paper } from '@pillar-ui/core'

export const FormControllerLabel = () => {
  return (
    <>
      <FormController label="Hello World">
        <Input aria-label="hello" autoFocus variant="filled" />
      </FormController>
      <FormController label="Hello World" hideLabel>
        <Input aria-label="hello" autoFocus variant="filled" />
      </FormController>
    </>
  )
}

export const FormControllerHint = () => {
  return (
    <>
      <FormController label="hello" hint="message must be more than 5 caractere">
        <Input aria-label="hello" autoFocus variant="filled" />
      </FormController>
    </>
  )
}

export const FormControllerError = () => {
  return (
    <>
      <FormController label="hello" error="message must be more than 5 caractere">
        <Input aria-label="hello" autoFocus variant="filled" />
      </FormController>
    </>
  )
}

export const FormControllerRequired = () => {
  return (
    <>
      <FormController label="Name" required>
        <Input aria-label="hello" autoFocus variant="filled" />
      </FormController>
    </>
  )
}
