import { Flex, Input, Paper } from '@pillar-ui/core'
import { Eye, User } from '@pillar-ui/icons'

export const InputPlayGround = () => {
  return <div>hello</div>
}

const FilledInput = () => {
  return (
    <Paper flow="sm" className="playground" border p="sm" background="surface-3" corner="sm">
      <Input aria-label="hello" autoFocus placeholder="Focus" variant="filled" />
      <Input aria-label="hello" placeholder="Normal" variant="filled" />
      <Input aria-label="hello" disabled placeholder="Disabled" variant="filled" />
      <Input aria-label="hello" readOnly placeholder="readOnly" variant="filled" />
      <Input aria-label="hello" isInvalid placeholder="Error" variant="filled" />
      <Input aria-label="hello" suffixInput={<User width="16" />} placeholder="Error" variant="filled" />
      <Input aria-label="hello" prefixInput={<User width="16" />} placeholder="Placeholder" variant="filled" />
      <Input
        aria-label="hello"
        prefixInput={'https://'}
        suffixInput=".com"
        defaultValue="Default Value"
        variant="filled"
      />
    </Paper>
  )
}

const OutlineInput = () => {
  return (
    <Paper flow="sm" className="playground" border p="sm" background="surface-3" corner="sm">
      <Input variant="outline" aria-label="hello" autoFocus placeholder="Focus" />
      <Input variant="outline" aria-label="hello" placeholder="Normal" />
      <Input variant="outline" aria-label="hello" disabled placeholder="Disabled" />
      <Input variant="outline" aria-label="hello" readOnly placeholder="readOnly" />
      <Input variant="outline" aria-label="hello" isInvalid placeholder="Error" />
      <Input variant="outline" aria-label="hello" suffixInput={<User width="16" />} placeholder="Error" />
      <Input variant="outline" aria-label="hello" prefixInput={<User width="16" />} placeholder="Placeholder" />
      <Input
        variant="outline"
        aria-label="hello"
        prefixInput={'https://'}
        suffixInput=".com"
        defaultValue="Default Value"
      />
    </Paper>
  )
}

const BorderedInput = () => {
  return (
    <Paper flow="sm" className="playground" border p="sm" background="surface-3" corner="sm">
      <Input variant="bordered" aria-label="hello" autoFocus placeholder="Focus" />
      <Input variant="bordered" aria-label="hello" placeholder="Normal" />
      <Input variant="bordered" aria-label="hello" disabled placeholder="Disabled" />
      <Input variant="bordered" aria-label="hello" readOnly placeholder="readOnly" />
      <Input variant="bordered" aria-label="hello" isInvalid placeholder="Error" />
      <Input variant="bordered" aria-label="hello" suffixInput={<User width="16" />} placeholder="Error" />
      <Input variant="bordered" aria-label="hello" prefixInput={<User width="16" />} placeholder="Placeholder" />
      <Input
        variant="bordered"
        aria-label="hello"
        prefixInput={'https://'}
        suffixInput=".com"
        defaultValue="Default Value"
      />
    </Paper>
  )
}

const CornerInput = () => {
  return (
    <Paper flow="sm" className="playground" border p="sm" background="surface-3" corner="sm">
      <Input corner="sharp" placeholder="sharp" />
      <Input corner="xs" placeholder="xs" />
      <Input corner="sm" placeholder="sm" />
      <Input corner="md" placeholder="md" />
      <Input corner="lg" placeholder="lg" />
      <Input corner="xl" placeholder="xl" />
      <Input corner="full" placeholder="full" />
    </Paper>
  )
}

const ColorInput = () => {
  return (
    <Paper flow="sm" className="playground" border p="sm" background="surface-3" corner="sm">
      <Input color="primary" variant="bordered" autoFocus placeholder="Focus" />
      <Input color="warning" variant="bordered" autoFocus placeholder="Normal" />
      <Input color="secondary" variant="outline" autoFocus placeholder="Disabled" />
      <Input color="surface" variant="filled" autoFocus placeholder="isInvalid" />
      <Input color="success" variant="bordered" autoFocus prefixInput={<User width="16" />} placeholder="Placeholder" />
      <Input
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

export const SizeInput = () => {
  return (
    <Paper flow="sm" className="playground" border p="sm" background="surface-3" corner="sm">
      <Input size="xs" placeholder="Extra Small(xs)" />
      <Input size="sm" placeholder="Small(sm)" />
      <Input placeholder="Medium (md default You don't need it)" />
      <Input size="lg" placeholder="Large(lg)" />
      <Input size="xl" placeholder="Extra Large(xl)" />
    </Paper>
  )
}

export const SizeIcons = () => {
  return (
    <Paper flow="sm" className="playground" border p="sm" background="surface-3" corner="sm">
      <Input placeholder="Medium" suffixInput={<User width="16" />} />
      <Input placeholder="Medium" prefixInput={<User width="16" />} />
      <Input placeholder="Medium" prefixInput={<User width="16" />} suffixInput={<Eye width="16" />} />
    </Paper>
  )
}

InputPlayGround.Filled = FilledInput
InputPlayGround.Outline = OutlineInput
InputPlayGround.Bordered = BorderedInput
InputPlayGround.Corners = CornerInput
InputPlayGround.Colors = ColorInput
InputPlayGround.Sizes = SizeInput
InputPlayGround.Icons = SizeIcons
