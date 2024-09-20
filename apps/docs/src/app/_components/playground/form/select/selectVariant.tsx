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

export const SelectVariant = () => {
  return (
    <>
      <Select variant="filled">
        <Options />
      </Select>
      <Select variant="outline">
        <Options />
      </Select>
      <Select variant="bordered">
        <Options />
      </Select>
    </>
  )
}
