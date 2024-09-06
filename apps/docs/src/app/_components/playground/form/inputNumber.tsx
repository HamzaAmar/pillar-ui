import { InputNumber, Paper } from '@pillar-ui/core'
import { User } from '@pillar-ui/icons'

export const InputNumberFilled = () => {
  return (
    <Paper flow="sm" className="playground" border p="sm" background="bg-3" corner="sm">
      <InputNumber aria-label="hello" autoFocus placeholder="Focus" variant="filled" />
      <InputNumber aria-label="hello" placeholder="Normal" variant="filled" />
      <InputNumber aria-label="hello" disabled placeholder="Disabled" variant="filled" />
      <InputNumber aria-label="hello" readOnly placeholder="readOnly" variant="filled" />
      <InputNumber aria-label="hello" isInvalid placeholder="Error" variant="filled" />
      <InputNumber aria-label="hello" prefixInput={<User width="16" />} placeholder="Placeholder" variant="filled" />
    </Paper>
  )
}

export const InputNumberOutline = () => {
  return (
    <Paper flow="sm" className="playground" border p="sm" background="bg-3" corner="sm">
      <InputNumber variant="outline" aria-label="hello" autoFocus placeholder="Focus" />
      <InputNumber variant="outline" aria-label="hello" placeholder="Normal" />
      <InputNumber variant="outline" aria-label="hello" disabled placeholder="Disabled" />
      <InputNumber variant="outline" aria-label="hello" readOnly placeholder="readOnly" />
      <InputNumber variant="outline" aria-label="hello" isInvalid placeholder="Error" />
      <InputNumber variant="outline" aria-label="hello" prefixInput={<User width="16" />} placeholder="Placeholder" />
    </Paper>
  )
}

export const InputNumberBordered = () => {
  return (
    <Paper flow="sm" className="playground" border p="sm" background="bg-3" corner="sm">
      <InputNumber variant="bordered" aria-label="hello" autoFocus placeholder="Focus" />
      <InputNumber variant="bordered" aria-label="hello" placeholder="Normal" />
      <InputNumber variant="bordered" aria-label="hello" disabled placeholder="Disabled" />
      <InputNumber variant="bordered" aria-label="hello" readOnly placeholder="readOnly" />
      <InputNumber variant="bordered" aria-label="hello" isInvalid placeholder="Error" />
      <InputNumber variant="bordered" aria-label="hello" prefixInput={<User width="16" />} placeholder="Placeholder" />
    </Paper>
  )
}

export const InputNumberCorners = () => {
  return (
    <Paper flow="sm" className="playground" border p="sm" background="bg-3" corner="sm">
      <InputNumber corner="sharp" placeholder="sharp" />
      <InputNumber corner="xs" placeholder="xs" />
      <InputNumber corner="sm" placeholder="sm" />
      <InputNumber corner="md" placeholder="md" />
      <InputNumber corner="lg" placeholder="lg" />
      <InputNumber corner="xl" placeholder="xl" />
      <InputNumber corner="full" placeholder="full" />
    </Paper>
  )
}

export const InputNumberColors = () => {
  return (
    <Paper flow="sm" className="playground" border p="sm" background="bg-3" corner="sm">
      <InputNumber color="pri" variant="bordered" autoFocus placeholder="Focus" />
      <InputNumber color="war" variant="bordered" autoFocus placeholder="Normal" />
      <InputNumber color="sec" variant="outline" autoFocus placeholder="Disabled" />
      <InputNumber color="bg" variant="filled" autoFocus placeholder="isInvalid" />
      <InputNumber
        color="suc"
        variant="bordered"
        autoFocus
        prefixInput={<User width="16" />}
        placeholder="Placeholder"
      />
    </Paper>
  )
}

export const InputNumberSizes = () => {
  return (
    <Paper flow="sm" className="playground" border p="sm" background="bg-3" corner="sm">
      <InputNumber size="xs" placeholder="Extra Small(xs)" />
      <InputNumber size="sm" placeholder="Small(sm)" />
      <InputNumber placeholder="Medium (md default You don't need it)" />
      <InputNumber size="lg" placeholder="Large(lg)" />
      <InputNumber size="xl" placeholder="Extra Large(xl)" />
    </Paper>
  )
}

export const SizeIconsNumber = () => {
  return (
    <Paper flow="sm" className="playground" border p="sm" background="bg-3" corner="sm">
      <InputNumber placeholder="Medium" prefixInput={<User width="16" />} />
    </Paper>
  )
}

export const InputNumberStep = () => {
  return (
    <Paper flow="sm" className="playground" border p="sm" background="bg-3" corner="sm">
      <InputNumber step="1" size="sm" placeholder="Step 1" />
      <InputNumber step="10" placeholder="Step 10" />
      <InputNumber step=".1" size="lg" placeholder="Step 0.1" />
    </Paper>
  )
}

export const InputNumberMax = () => {
  return (
    <Paper flow="sm" className="playground" border p="sm" background="bg-3" corner="sm">
      <InputNumber step="1" max="10" size="sm" placeholder="Step 1" />
      <InputNumber step="10" max="40" placeholder="Step 10" />
      <InputNumber step=".1" max="1" size="lg" placeholder="Step 0.1" />
      <InputNumber step=".5" max="10" size="lg" placeholder="Step 0.5" />
    </Paper>
  )
}

export const InputNumberMin = () => {
  return (
    <Paper flow="sm" className="playground" border p="sm" background="bg-3" corner="sm">
      <InputNumber step="1" min="5" size="sm" placeholder="Step 1" />
      <InputNumber step="10" min="40" placeholder="Step 10" />
      <InputNumber step=".1" min="1" size="lg" placeholder="Step 0.1" />
      <InputNumber step=".5" min="10" size="lg" placeholder="Step 0.5" />
    </Paper>
  )
}
