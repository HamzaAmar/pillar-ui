import { Flex, InputNumber, Paper } from '@pillar/core'
import { Eye, User } from '@pillar/icons'

export const InputNumberPlayGround = () => {
  return <div>hello</div>
}

const FilledInputNumber = () => {
  return (
    <Paper flow="sm" className="playground" borderColor="opacity-6" p="sm" background="surface-3" corner="sm">
      <InputNumber aria-label="hello" autoFocus placeholder="Focus" variant="filled" />
      <InputNumber aria-label="hello" placeholder="Normal" variant="filled" />
      <InputNumber aria-label="hello" disabled placeholder="Disabled" variant="filled" />
      <InputNumber aria-label="hello" readOnly placeholder="readOnly" variant="filled" />
      <InputNumber aria-label="hello" isInvalid placeholder="Error" variant="filled" />
      <InputNumber aria-label="hello" suffixInput={<User width="16" />} placeholder="Error" variant="filled" />
      <InputNumber aria-label="hello" prefixInput={<User width="16" />} placeholder="Placeholder" variant="filled" />
      <InputNumber
        aria-label="hello"
        prefixInput={'https://'}
        suffixInput=".com"
        defaultValue="Default Value"
        variant="filled"
      />
    </Paper>
  )
}

const OutlineInputNumber = () => {
  return (
    <Paper flow="sm" className="playground" borderColor="opacity-6" p="sm" background="surface-3" corner="sm">
      <InputNumber variant="outline" aria-label="hello" autoFocus placeholder="Focus" />
      <InputNumber variant="outline" aria-label="hello" placeholder="Normal" />
      <InputNumber variant="outline" aria-label="hello" disabled placeholder="Disabled" />
      <InputNumber variant="outline" aria-label="hello" readOnly placeholder="readOnly" />
      <InputNumber variant="outline" aria-label="hello" isInvalid placeholder="Error" />
      <InputNumber variant="outline" aria-label="hello" suffixInput={<User width="16" />} placeholder="Error" />
      <InputNumber variant="outline" aria-label="hello" prefixInput={<User width="16" />} placeholder="Placeholder" />
      <InputNumber
        variant="outline"
        aria-label="hello"
        prefixInput={'https://'}
        suffixInput=".com"
        defaultValue="Default Value"
      />
    </Paper>
  )
}

const BorderedInputNumber = () => {
  return (
    <Paper flow="sm" className="playground" borderColor="opacity-6" p="sm" background="surface-3" corner="sm">
      <InputNumber variant="bordered" aria-label="hello" autoFocus placeholder="Focus" />
      <InputNumber variant="bordered" aria-label="hello" placeholder="Normal" />
      <InputNumber variant="bordered" aria-label="hello" disabled placeholder="Disabled" />
      <InputNumber variant="bordered" aria-label="hello" readOnly placeholder="readOnly" />
      <InputNumber variant="bordered" aria-label="hello" isInvalid placeholder="Error" />
      <InputNumber variant="bordered" aria-label="hello" suffixInput={<User width="16" />} placeholder="Error" />
      <InputNumber variant="bordered" aria-label="hello" prefixInput={<User width="16" />} placeholder="Placeholder" />
      <InputNumber
        variant="bordered"
        aria-label="hello"
        prefixInput={'https://'}
        suffixInput=".com"
        defaultValue="Default Value"
      />
    </Paper>
  )
}

const CornerInputNumber = () => {
  return (
    <Paper flow="sm" className="playground" borderColor="opacity-6" p="sm" background="surface-3" corner="sm">
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

const ColorInputNumber = () => {
  return (
    <Paper flow="sm" className="playground" borderColor="opacity-6" p="sm" background="surface-3" corner="sm">
      <InputNumber color="primary" variant="bordered" autoFocus placeholder="Focus" />
      <InputNumber color="warning" variant="bordered" autoFocus placeholder="Normal" />
      <InputNumber color="secondary" variant="outline" autoFocus placeholder="Disabled" />
      <InputNumber color="surface" variant="filled" autoFocus placeholder="isInvalid" />
      <InputNumber
        color="success"
        variant="bordered"
        autoFocus
        prefixInput={<User width="16" />}
        placeholder="Placeholder"
      />
      <InputNumber
        color="danger"
        variant="bordered"
        autoFocus
        prefixInput={'https://'}
        suffixInput=".com"
        defaultValue="Default Value"
      />
    </Paper>
  )
}

export const SizeInputNumber = () => {
  return (
    <Paper flow="sm" className="playground" borderColor="opacity-6" p="sm" background="surface-3" corner="sm">
      <InputNumber size="xs" placeholder="Extra Small(xs)" />
      <InputNumber size="sm" placeholder="Small(sm)" />
      <InputNumber placeholder="Medium (md default You don't need it)" />
      <InputNumber size="lg" placeholder="Large(lg)" />
      <InputNumber size="xl" placeholder="Extra Large(xl)" />
    </Paper>
  )
}

export const SizeIcons = () => {
  return (
    <Paper flow="sm" className="playground" borderColor="opacity-6" p="sm" background="surface-3" corner="sm">
      <InputNumber placeholder="Medium" suffixInput={<User width="16" />} />
      <InputNumber placeholder="Medium" prefixInput={<User width="16" />} />
      <InputNumber placeholder="Medium" prefixInput={<User width="16" />} suffixInput={<Eye width="16" />} />
    </Paper>
  )
}

export const StepInput = () => {
  return (
    <Paper flow="sm" className="playground" borderColor="opacity-6" p="sm" background="surface-3" corner="sm">
      <InputNumber step="1" size="sm" placeholder="Step 1" />
      <InputNumber step="10" placeholder="Step 10" />
      <InputNumber step=".1" size="lg" placeholder="Step 0.1" />
    </Paper>
  )
}

export const MaxInput = () => {
  return (
    <Paper flow="sm" className="playground" borderColor="opacity-6" p="sm" background="surface-3" corner="sm">
      <InputNumber step="1" max="10" size="sm" placeholder="Step 1" />
      <InputNumber step="10" max="40" placeholder="Step 10" />
      <InputNumber step=".1" max="1" size="lg" placeholder="Step 0.1" />
      <InputNumber step=".5" max="10" size="lg" placeholder="Step 0.5" />
    </Paper>
  )
}

export const MinInput = () => {
  return (
    <Paper flow="sm" className="playground" borderColor="opacity-6" p="sm" background="surface-3" corner="sm">
      <InputNumber step="1" min="5" size="sm" placeholder="Step 1" />
      <InputNumber step="10" min="40" placeholder="Step 10" />
      <InputNumber step=".1" min="1" size="lg" placeholder="Step 0.1" />
      <InputNumber step=".5" min="10" size="lg" placeholder="Step 0.5" />
    </Paper>
  )
}

InputNumberPlayGround.Filled = FilledInputNumber
InputNumberPlayGround.Outline = OutlineInputNumber
InputNumberPlayGround.Bordered = BorderedInputNumber
InputNumberPlayGround.Corners = CornerInputNumber
InputNumberPlayGround.Colors = ColorInputNumber
InputNumberPlayGround.Sizes = SizeInputNumber
InputNumberPlayGround.Icons = SizeIcons
InputNumberPlayGround.Step = StepInput
InputNumberPlayGround.Min = MinInput
InputNumberPlayGround.Max = MaxInput
