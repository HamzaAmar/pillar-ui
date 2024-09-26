import { Input, FormGroup, FormControllerProps, FormController, Paper } from '@pillar-ui/core'

const BaseFormController = (props: Omit<FormControllerProps, 'children'>) => {
  return (
    <FormController {...props}>
      <Input aria-label="hello" autoFocus variant="filled" />
    </FormController>
  )
}

export const FormGroupTitle = () => {
  return (
    <>
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
    </>
  )
}

export const FormGroupColors = () => {
  return (
    <>
      <FormGroup title="User" color="d">
        <BaseFormController label="Name" />
        <BaseFormController label="Age" />
        <BaseFormController label="Age" />
      </FormGroup>
      <FormGroup title="User" color="s">
        <BaseFormController label="Name" />
        <BaseFormController label="Age" />
        <BaseFormController label="Age" />
      </FormGroup>
      <FormGroup title="User" color="se">
        <BaseFormController label="Name" />
        <BaseFormController label="Age" />
        <BaseFormController label="Age" />
      </FormGroup>
    </>
  )
}

export const FormGroupDirection = () => {
  return (
    <>
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
    </>
  )
}

export const FormGroupCorner = () => {
  return (
    <>
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
    </>
  )
}

export const FormGroupVariants = () => {
  return (
    <>
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
    </>
  )
}

export const FormGroupFluid = () => {
  return (
    <>
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
    </>
  )
}
