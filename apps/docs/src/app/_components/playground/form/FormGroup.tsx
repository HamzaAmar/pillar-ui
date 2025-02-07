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
      <FormGroup legend="Name" title="User">
        <BaseFormController label="First Name" />
        <BaseFormController label="Last Name" />
      </FormGroup>

      <FormGroup legend="User" hideLegend>
        <BaseFormController label="First Name" />
        <BaseFormController label="Last Name" />
      </FormGroup>
    </>
  )
}

export const FormGroupColors = () => {
  return (
    <>
      <FormGroup legend="User" color="d">
        <BaseFormController label="Name" />
        <BaseFormController label="Age" />
        <BaseFormController label="Age" />
      </FormGroup>
      <FormGroup legend="User" color="su">
        <BaseFormController label="Name" />
        <BaseFormController label="Age" />
        <BaseFormController label="Age" />
      </FormGroup>
      <FormGroup legend="User" color="se">
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
      <FormGroup legend="Hello">
        <BaseFormController label="Name" />
        <BaseFormController label="Age" />
        <BaseFormController label="Age" />
      </FormGroup>
      <FormGroup legend="Hello" direction="row">
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
      <FormGroup legend="Hello" corner="2">
        <BaseFormController label="Name" />
        <BaseFormController label="Age" />
        <BaseFormController label="Age" />
      </FormGroup>
      <FormGroup legend="Hello" corner="full">
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
      <FormGroup legend="Hello" variant="outline">
        <BaseFormController label="Name" />
        <BaseFormController label="Age" />
        <BaseFormController label="Age" />
      </FormGroup>
      <FormGroup legend="Hello" variant="bordered">
        <BaseFormController label="Name" />
        <BaseFormController label="Age" />
        <BaseFormController label="Age" />
      </FormGroup>
      <FormGroup legend="Hello" variant="filled">
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
      <FormGroup legend="Hello" fluid>
        <BaseFormController label="Name" />
        <BaseFormController label="Age" />
        <BaseFormController label="Age" />
      </FormGroup>
      <FormGroup legend="Hello">
        <BaseFormController label="Name" />
        <BaseFormController label="Age" />
        <BaseFormController label="Age" />
      </FormGroup>
    </>
  )
}
