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

export const SelectColor = () => {
  return (
    <>
      <Select color="d">
        <Options />
      </Select>
      <Select color="w">
        <Options />
      </Select>
      <Select color="su">
        <Options />
      </Select>
      <Select color="se">
        <Options />
      </Select>
      <Select color="p">
        <Options />
      </Select>
      <Select color="b">
        <Options />
      </Select>
      <Select color="i">
        <Options />
      </Select>
    </>
  )
}
