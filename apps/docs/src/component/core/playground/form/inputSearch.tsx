import { Paper, InputSearch } from '@pillar-ui/core'
import { Eye, User } from '@pillar-ui/icons'

export const InputSearchPlayGround = () => {
  return <div>hello</div>
}

const FilledInputPassword = () => {
  return (
    <Paper flow="sm" className="playground" borderColor="opacity-6" p="sm" background="surface-3" corner="sm">
      <InputSearch aria-label="hello" autoFocus placeholder="Focus" variant="filled" />
      <InputSearch aria-label="hello" placeholder="Normal" variant="filled" />
      <InputSearch aria-label="hello" disabled placeholder="Disabled" variant="filled" />
      <InputSearch aria-label="hello" readOnly placeholder="readOnly" variant="filled" />
      <InputSearch aria-label="hello" isInvalid placeholder="Error" variant="filled" />
      <InputSearch aria-label="hello" prefixInput={<User width="16" />} placeholder="Placeholder" variant="filled" />
    </Paper>
  )
}

const OutlineInputPassword = () => {
  return (
    <Paper flow="sm" className="playground" borderColor="opacity-6" p="sm" background="surface-3" corner="sm">
      <InputSearch variant="outline" aria-label="hello" autoFocus placeholder="Focus" />
      <InputSearch variant="outline" aria-label="hello" placeholder="Normal" />
      <InputSearch variant="outline" aria-label="hello" disabled placeholder="Disabled" />
      <InputSearch variant="outline" aria-label="hello" readOnly placeholder="readOnly" />
      <InputSearch variant="outline" aria-label="hello" isInvalid placeholder="Error" />
      <InputSearch variant="outline" aria-label="hello" prefixInput={<User width="16" />} placeholder="Placeholder" />
    </Paper>
  )
}

const BorderedInputPassword = () => {
  return (
    <Paper flow="sm" className="playground" borderColor="opacity-6" p="sm" background="surface-3" corner="sm">
      <InputSearch variant="bordered" aria-label="hello" autoFocus placeholder="Focus" />
      <InputSearch variant="bordered" aria-label="hello" placeholder="Normal" />
      <InputSearch variant="bordered" aria-label="hello" disabled placeholder="Disabled" />
      <InputSearch variant="bordered" aria-label="hello" readOnly placeholder="readOnly" />
      <InputSearch variant="bordered" aria-label="hello" isInvalid placeholder="Error" />
      <InputSearch variant="bordered" aria-label="hello" prefixInput={<User width="16" />} placeholder="Placeholder" />
    </Paper>
  )
}

const CornerInputPassword = () => {
  return (
    <Paper flow="sm" className="playground" borderColor="opacity-6" p="sm" background="surface-3" corner="sm">
      <InputSearch corner="sharp" placeholder="sharp" />
      <InputSearch corner="xs" placeholder="xs" />
      <InputSearch corner="sm" placeholder="sm" />
      <InputSearch corner="md" placeholder="md" />
      <InputSearch corner="lg" placeholder="lg" />
      <InputSearch corner="xl" placeholder="xl" />
      <InputSearch corner="full" placeholder="full" />
    </Paper>
  )
}

const ColorInputPassword = () => {
  return (
    <Paper flow="sm" className="playground" borderColor="opacity-6" p="sm" background="surface-3" corner="sm">
      <InputSearch color="primary" variant="bordered" autoFocus placeholder="Focus" />
      <InputSearch color="warning" variant="bordered" autoFocus placeholder="Normal" />
      <InputSearch color="secondary" variant="outline" autoFocus placeholder="Disabled" />
      <InputSearch color="surface" variant="filled" autoFocus placeholder="isInvalid" />
      <InputSearch
        color="success"
        variant="bordered"
        autoFocus
        prefixInput={<User width="16" />}
        placeholder="Placeholder"
      />
    </Paper>
  )
}

export const SizeInputPassword = () => {
  return (
    <Paper flow="sm" className="playground" borderColor="opacity-6" p="sm" background="surface-3" corner="sm">
      <InputSearch size="xs" placeholder="Extra Small(xs)" />
      <InputSearch size="sm" placeholder="Small(sm)" />
      <InputSearch placeholder="Medium (md default You don't need it)" />
      <InputSearch size="lg" placeholder="Large(lg)" />
      <InputSearch size="xl" placeholder="Extra Large(xl)" />
    </Paper>
  )
}

export const SizeIcons = () => {
  return (
    <Paper flow="sm" className="playground" borderColor="opacity-6" p="sm" background="surface-3" corner="sm">
      <InputSearch placeholder="Medium" prefixInput={<User width="16" />} />
    </Paper>
  )
}

InputSearchPlayGround.Filled = FilledInputPassword
InputSearchPlayGround.Outline = OutlineInputPassword
InputSearchPlayGround.Bordered = BorderedInputPassword
InputSearchPlayGround.Corners = CornerInputPassword
InputSearchPlayGround.Colors = ColorInputPassword
InputSearchPlayGround.Sizes = SizeInputPassword
InputSearchPlayGround.Icons = SizeIcons
