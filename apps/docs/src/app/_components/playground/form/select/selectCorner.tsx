import { Select } from '@pillar-ui/core'

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

export const SelectCorner = () => {
  return (
    <>
      <Select corner="sharp">
        <Options />
      </Select>
      <Select corner="3">
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
    </>
  )
}
