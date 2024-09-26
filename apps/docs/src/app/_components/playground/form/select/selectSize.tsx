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
      <Select gap="3">
        <Options />
      </Select>
      <Select size="sm">
        <Options />
      </Select>
      <Select gap="5">
        <Options />
      </Select>
      <Select gap="6">
        <Options />
      </Select>
      <Select gap="7">
        <Options />
      </Select>
    </>
  )
}
