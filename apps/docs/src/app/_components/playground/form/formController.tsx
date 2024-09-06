import { Input, FormController, FormControllerProps, Paper } from '@pillar-ui/core'

const BaseFormController = (props: Omit<FormControllerProps, 'children'>) => {
  return (
    <FormController {...props}>
      <Input aria-label="hello" autoFocus variant="filled" />
    </FormController>
  )
}

export const FormControllerLabel = () => {
  return (
    <Paper flow="sm" className="playground" border p="sm" background="bg-3" corner="sm">
      <BaseFormController label="Hello World" />
      <BaseFormController label="Hello World" hideLabel />
    </Paper>
  )
}

export const FormControllerHint = () => {
  return (
    <Paper flow="sm" className="playground" border p="sm" background="bg-3" corner="sm">
      <BaseFormController label="hello" hint="message must be more than 5 caractere" />
    </Paper>
  )
}

export const FormControllerError = () => {
  return (
    <Paper flow="sm" className="playground" border p="sm" background="bg-3" corner="sm">
      <BaseFormController label="hello" error="message must be more than 5 caractere" />
    </Paper>
  )
}

export const FormControllerRequired = () => {
  return (
    <Paper flow="sm" className="playground" border p="sm" background="bg-3" corner="sm">
      <BaseFormController label="Name" required />
    </Paper>
  )
}
