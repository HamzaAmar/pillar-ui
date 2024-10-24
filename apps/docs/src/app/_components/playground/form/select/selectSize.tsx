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

export const SelectSize = () => {
  return (
    <>
      <Select size="1">
        <Options />
      </Select>
      <Select size="2">
        <Options />
      </Select>
      <Select size="3">
        <Options />
      </Select>
      <Select size="4">
        <Options />
      </Select>
      <Select size="5">
        <Options />
      </Select>
      <Select size="6">
        <Options />
      </Select>
      <Select size="7">
        <Options />
      </Select>
    </>
  )
}
