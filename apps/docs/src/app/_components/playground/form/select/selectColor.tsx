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
      <Select color="dan">
        <Options />
      </Select>
      <Select color="war">
        <Options />
      </Select>
      <Select color="suc">
        <Options />
      </Select>
      <Select color="sec">
        <Options />
      </Select>
      <Select color="pri">
        <Options />
      </Select>
      <Select color="bg">
        <Options />
      </Select>
      <Select>
        <Options />
      </Select>
    </>
  )
}
