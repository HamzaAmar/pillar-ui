import { Flex, Input, FormController, FormControllerProps, Paper } from '@pillar-ui/core'
import { Eye, User } from '@pillar-ui/icons'

export const FormControllerPlayGround = () => {
  return <div>hello</div>
}
const BaseFormController = (props: Omit<FormControllerProps, 'children'>) => {
  return (
    <FormController {...props}>
      <Input aria-label="hello" autoFocus variant="filled" />
    </FormController>
  )
}

const FormControllerLabel = () => {
  return (
    <Paper flow="sm" className="playground" borderColor="opacity-6" p="sm" background="surface-3" corner="sm">
      <BaseFormController label="Hello World" />
      <BaseFormController label="Hello World" hideLabel />
    </Paper>
  )
}

const FormControllerHint = () => {
  return (
    <Paper flow="sm" className="playground" borderColor="opacity-6" p="sm" background="surface-3" corner="sm">
      <BaseFormController label="hello" hint="message must be more than 5 caractere" />
    </Paper>
  )
}

const FormControllerError = () => {
  return (
    <Paper flow="sm" className="playground" borderColor="opacity-6" p="sm" background="surface-3" corner="sm">
      <BaseFormController label="hello" error="message must be more than 5 caractere" />
    </Paper>
  )
}

const FormControllerRequired = () => {
  return (
    <Paper flow="sm" className="playground" borderColor="opacity-6" p="sm" background="surface-3" corner="sm">
      <BaseFormController label="Name" required />
    </Paper>
  )
}

FormControllerPlayGround.Label = FormControllerLabel
FormControllerPlayGround.Hint = FormControllerHint
FormControllerPlayGround.Error = FormControllerError
