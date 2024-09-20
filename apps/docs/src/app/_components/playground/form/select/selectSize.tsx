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
    </>
  )
}
