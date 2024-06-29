import { Paper, Select } from '~/component/core/pillar'

const Options = () => {
  return (
    <>
      <option value="">Option 1</option>
      <option value="">Option 2</option>
      <option value="">Option 3</option>
      <option value="">Option 4</option>
    </>
  )
}

export const SelectVariants = () => {
  return (
    <Paper flow="sm" className="playground" border p="sm" background="surface-3" corner="sm">
      <Select variant="filled">
        <Options />
      </Select>
      <Select variant="outline">
        <Options />
      </Select>
      <Select variant="bordered">
        <Options />
      </Select>
    </Paper>
  )
}

export const SelectCorners = () => {
  return (
    <Paper flow="sm" className="playground" border p="sm" background="surface-3" corner="sm">
      <Select corner="sharp">
        <Options />
      </Select>
      <Select corner="xs">
        <Options />
      </Select>
      <Select corner="sm">
        <Options />
      </Select>
      <Select corner="md">
        <Options />
      </Select>
      <Select corner="lg">
        <Options />
      </Select>
      <Select corner="xl">
        <Options />
      </Select>
      <Select corner="full">
        <Options />
      </Select>
    </Paper>
  )
}

export const SelectColors = () => {
  return (
    <Paper flow="sm" className="playground" border p="sm" background="surface-3" corner="sm">
      <Select color="danger">
        <Options />
      </Select>
      <Select color="warning">
        <Options />
      </Select>
      <Select color="success">
        <Options />
      </Select>
      <Select color="secondary">
        <Options />
      </Select>
      <Select color="primary">
        <Options />
      </Select>
      <Select color="surface">
        <Options />
      </Select>
      <Select>
        <Options />
      </Select>
    </Paper>
  )
}

export const SelectSizes = () => {
  return (
    <Paper flow="sm" className="playground" border p="sm" background="surface-3" corner="sm">
      <Select size="xs">
        <Options />
      </Select>
      <Select size="sm">
        <Options />
      </Select>
      <Select size="md">
        <Options />
      </Select>
      <Select size="lg">
        <Options />
      </Select>
      <Select size="xl">
        <Options />
      </Select>
    </Paper>
  )
}
