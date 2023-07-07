import { Paper, Select } from '@pillar/core'
import { Eye, User } from '@pillar/icons'

export const SelectPlayGround = () => {
  return <div>hello</div>
}

export const Options = () => {
  return (
    <>
      <option value="">Option 1</option>
      <option value="">Option 2</option>
      <option value="">Option 3</option>
      <option value="">Option 4</option>
    </>
  )
}

const VariantsSelect = () => {
  return (
    <Paper flow="sm" className="playground" borderColor="opacity-6" p="sm" background="surface-3" corner="sm">
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

const CornerSelect = () => {
  return (
    <Paper flow="sm" className="playground" borderColor="opacity-6" p="sm" background="surface-3" corner="sm">
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

const ColorSelect = () => {
  return (
    <Paper flow="sm" className="playground" borderColor="opacity-6" p="sm" background="surface-3" corner="sm">
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

export const SizeSelect = () => {
  return (
    <Paper flow="sm" className="playground" borderColor="opacity-6" p="sm" background="surface-3" corner="sm">
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

SelectPlayGround.Variants = VariantsSelect
SelectPlayGround.Corners = CornerSelect
SelectPlayGround.Colors = ColorSelect
SelectPlayGround.Sizes = SizeSelect
