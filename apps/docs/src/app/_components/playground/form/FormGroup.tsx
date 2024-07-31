import { Input, FormGroup, FormControllerProps, FormController, Paper } from '~/component/core/pillar'

const BaseFormController = (props: Omit<FormControllerProps, 'children'>) => {
  return (
    <FormController {...props}>
      <Input aria-label="hello" autoFocus variant="filled" />
    </FormController>
  )
}

export const FormGroupTitle = () => {
  return (
    <Paper flow="sm" className="playground" border p="sm" background="bg-3" corner="sm">
      <FormGroup title="User">
        <BaseFormController label="Name" />
        <BaseFormController label="Age" />
        <BaseFormController label="Age" />
      </FormGroup>

      <FormGroup title="User" hideTitle>
        <BaseFormController label="Name" />
        <BaseFormController label="Age" />
        <BaseFormController label="Age" />
      </FormGroup>
    </Paper>
  )
}

export const FormGroupColors = () => {
  return (
    <Paper flow="sm" className="playground" border p="sm" background="bg-3" corner="sm">
      <FormGroup title="User" color="danger">
        <BaseFormController label="Name" />
        <BaseFormController label="Age" />
        <BaseFormController label="Age" />
      </FormGroup>
      <FormGroup title="User" color="success">
        <BaseFormController label="Name" />
        <BaseFormController label="Age" />
        <BaseFormController label="Age" />
      </FormGroup>
      <FormGroup title="User" color="secondary">
        <BaseFormController label="Name" />
        <BaseFormController label="Age" />
        <BaseFormController label="Age" />
      </FormGroup>
    </Paper>
  )
}

export const FormGroupDirection = () => {
  return (
    <Paper flow="sm" className="playground" border p="sm" background="bg-3" corner="sm">
      <FormGroup title="Hello">
        <BaseFormController label="Name" />
        <BaseFormController label="Age" />
        <BaseFormController label="Age" />
      </FormGroup>
      <FormGroup title="Hello" direction="row">
        <BaseFormController label="Name" />
        <BaseFormController label="Age" />
        <BaseFormController label="Age" />
      </FormGroup>
    </Paper>
  )
}

export const FormGroupCorner = () => {
  return (
    <Paper flow="sm" className="playground" border p="sm" background="bg-3" corner="sm">
      <FormGroup title="Hello" corner="sm">
        <BaseFormController label="Name" />
        <BaseFormController label="Age" />
        <BaseFormController label="Age" />
      </FormGroup>
      <FormGroup title="Hello" corner="full">
        <BaseFormController label="Name" />
        <BaseFormController label="Age" />
        <BaseFormController label="Age" />
      </FormGroup>
    </Paper>
  )
}

export const FormGroupVariants = () => {
  return (
    <Paper flow="sm" className="playground" border p="sm" background="bg-3" corner="sm">
      <FormGroup title="Hello" variant="outline">
        <BaseFormController label="Name" />
        <BaseFormController label="Age" />
        <BaseFormController label="Age" />
      </FormGroup>
      <FormGroup title="Hello" variant="bordered">
        <BaseFormController label="Name" />
        <BaseFormController label="Age" />
        <BaseFormController label="Age" />
      </FormGroup>
      <FormGroup title="Hello" variant="filled">
        <BaseFormController label="Name" />
        <BaseFormController label="Age" />
        <BaseFormController label="Age" />
      </FormGroup>
    </Paper>
  )
}

export const FormGroupFluid = () => {
  return (
    <Paper flow="sm" className="playground" border p="sm" background="bg-3" corner="sm">
      <FormGroup title="Hello" fluid>
        <BaseFormController label="Name" />
        <BaseFormController label="Age" />
        <BaseFormController label="Age" />
      </FormGroup>
      <FormGroup title="Hello">
        <BaseFormController label="Name" />
        <BaseFormController label="Age" />
        <BaseFormController label="Age" />
      </FormGroup>
    </Paper>
  )
}
