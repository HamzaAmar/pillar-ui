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
      <Select corner="0">
        <Options />
      </Select>
      <Select corner="1">
        <Options />
      </Select>
      <Select corner="2">
        <Options />
      </Select>
      <Select corner="3">
        <Options />
      </Select>
      <Select corner="4">
        <Options />
      </Select>
      <Select corner="5">
        <Options />
      </Select>
      <Select corner="full">
        <Options />
      </Select>
    </>
  )
}
