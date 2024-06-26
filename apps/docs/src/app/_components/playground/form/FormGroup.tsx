import { Flex, Input, FormGroup, FormControllerProps, FormController, Paper } from '~/component/core/pillar'

export const FormGroupPlayGround = () => {
  return <div>hello</div>
}

const BaseFormController = (props: Omit<FormControllerProps, 'children'>) => {
  return (
    <FormController {...props}>
      <Input aria-label="hello" autoFocus variant="filled" />
    </FormController>
  )
}

const FormGroupTitle = () => {
  return (
    <Paper flow="sm" className="playground" border p="sm" background="surface-3" corner="sm">
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

const FormGroupColors = () => {
  return (
    <Paper flow="sm" className="playground" border p="sm" background="surface-3" corner="sm">
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

const FormGroupDirection = () => {
  return (
    <Paper flow="sm" className="playground" border p="sm" background="surface-3" corner="sm">
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

const FormGroupCorner = () => {
  return (
    <Paper flow="sm" className="playground" border p="sm" background="surface-3" corner="sm">
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

const FormGroupVariants = () => {
  return (
    <Paper flow="sm" className="playground" border p="sm" background="surface-3" corner="sm">
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

const FormGroupFluid = () => {
  return (
    <Paper flow="sm" className="playground" border p="sm" background="surface-3" corner="sm">
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

FormGroupPlayGround.Title = FormGroupTitle
FormGroupPlayGround.Colors = FormGroupColors
FormGroupPlayGround.Variants = FormGroupVariants
FormGroupPlayGround.Direction = FormGroupDirection
FormGroupPlayGround.Fluid = FormGroupFluid
FormGroupPlayGround.Corner = FormGroupCorner
