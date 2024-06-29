import { InputFile, Paper } from '~/component/core/pillar'

export const InputFileFilled = () => {
  return (
    <Paper flow="sm" className="playground" border p="sm" background="surface-3" corner="sm">
      <InputFile aria-label="hello" autoFocus variant="filled" />
      <InputFile aria-label="hello" variant="filled" />
      <InputFile aria-label="hello" disabled variant="filled" />
      <InputFile aria-label="hello" isInvalid variant="filled" />
    </Paper>
  )
}

export const InputFileOutline = () => {
  return (
    <Paper flow="sm" className="playground" border p="sm" background="surface-3" corner="sm">
      <InputFile variant="outline" aria-label="hello" autoFocus />
      <InputFile variant="outline" aria-label="hello" />
      <InputFile variant="outline" aria-label="hello" disabled />
      <InputFile variant="outline" aria-label="hello" isInvalid />
    </Paper>
  )
}

export const InputFileBordered = () => {
  return (
    <Paper flow="sm" className="playground" border p="sm" background="surface-3" corner="sm">
      <InputFile variant="bordered" aria-label="hello" autoFocus />
      <InputFile variant="bordered" aria-label="hello" />
      <InputFile variant="bordered" aria-label="hello" disabled />
      <InputFile variant="bordered" aria-label="hello" isInvalid />
    </Paper>
  )
}

export const InputFileCorners = () => {
  return (
    <Paper flow="sm" className="playground" border p="sm" background="surface-3" corner="sm">
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

export const InputFileColors = () => {
  return (
    <Paper flow="sm" className="playground" border p="sm" background="surface-3" corner="sm">
      <InputFile color="primary" variant="bordered" autoFocus />
      <InputFile color="warning" variant="bordered" autoFocus />
      <InputFile color="secondary" variant="outline" autoFocus />
      <InputFile color="surface" variant="filled" autoFocus />
    </Paper>
  )
}

export const InputFileSizes = () => {
  return (
    <Paper flow="sm" className="playground" border p="sm" background="surface-3" corner="sm">
      <InputFile size="xs" />
      <InputFile size="sm" />
      <InputFile />
      <InputFile size="lg" />
      <InputFile size="xl" />
    </Paper>
  )
}
