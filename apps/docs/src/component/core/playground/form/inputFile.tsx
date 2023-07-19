import { InputFile, Paper } from '@pillar-ui/core'
import { Eye, User } from '@pillar-ui/icons'

export const InputFilePlayGround = () => {
  return <div>hello</div>
}

const FilledInputFile = () => {
  return (
    <Paper flow="sm" className="playground" borderColor="opacity-6" p="sm" background="surface-3" corner="sm">
      <InputFile aria-label="hello" autoFocus variant="filled" />
      <InputFile aria-label="hello" variant="filled" />
      <InputFile aria-label="hello" disabled variant="filled" />
      <InputFile aria-label="hello" isInvalid variant="filled" />
    </Paper>
  )
}

const OutlineInputFile = () => {
  return (
    <Paper flow="sm" className="playground" borderColor="opacity-6" p="sm" background="surface-3" corner="sm">
      <InputFile variant="outline" aria-label="hello" autoFocus />
      <InputFile variant="outline" aria-label="hello" />
      <InputFile variant="outline" aria-label="hello" disabled />
      <InputFile variant="outline" aria-label="hello" isInvalid />
    </Paper>
  )
}

const BorderedInputFile = () => {
  return (
    <Paper flow="sm" className="playground" borderColor="opacity-6" p="sm" background="surface-3" corner="sm">
      <InputFile variant="bordered" aria-label="hello" autoFocus />
      <InputFile variant="bordered" aria-label="hello" />
      <InputFile variant="bordered" aria-label="hello" disabled />
      <InputFile variant="bordered" aria-label="hello" isInvalid />
    </Paper>
  )
}

const CornerInputFile = () => {
  return (
    <Paper flow="sm" className="playground" borderColor="opacity-6" p="sm" background="surface-3" corner="sm">
      <InputFile corner="sharp" />
      <InputFile corner="xs" />
      <InputFile corner="sm" />
      <InputFile corner="md" />
      <InputFile corner="lg" />
      <InputFile corner="xl" />
      <InputFile corner="full" />
    </Paper>
  )
}

const ColorInputFile = () => {
  return (
    <Paper flow="sm" className="playground" borderColor="opacity-6" p="sm" background="surface-3" corner="sm">
      <InputFile color="primary" variant="bordered" autoFocus />
      <InputFile color="warning" variant="bordered" autoFocus />
      <InputFile color="secondary" variant="outline" autoFocus />
      <InputFile color="surface" variant="filled" autoFocus />
      <InputFile color="success" variant="bordered" autoFocus prefixInput={<User width="16" />} />
    </Paper>
  )
}

export const SizeInputFile = () => {
  return (
    <Paper flow="sm" className="playground" borderColor="opacity-6" p="sm" background="surface-3" corner="sm">
      <InputFile size="xs" />
      <InputFile size="sm" />
      <InputFile />
      <InputFile size="lg" />
      <InputFile size="xl" />
    </Paper>
  )
}

InputFilePlayGround.Filled = FilledInputFile
InputFilePlayGround.Outline = OutlineInputFile
InputFilePlayGround.Bordered = BorderedInputFile
InputFilePlayGround.Corners = CornerInputFile
InputFilePlayGround.Colors = ColorInputFile
InputFilePlayGround.Sizes = SizeInputFile
