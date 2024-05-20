import { Paper, Textarea } from '@pillar-ui/core'
import { Eye, User } from '@pillar-ui/icons'

export const TextareaPlayGround = () => {
  return <div>hello</div>
}

const FilledInputPassword = () => {
  return (
    <Paper flow="sm" className="playground" border p="sm" background="surface-3" corner="sm">
      <Textarea aria-label="hello" autoFocus placeholder="Focus" variant="filled" />
      <Textarea aria-label="hello" placeholder="Normal" variant="filled" />
      <Textarea aria-label="hello" disabled placeholder="Disabled" variant="filled" />
      <Textarea aria-label="hello" readOnly placeholder="readOnly" variant="filled" />
      <Textarea aria-label="hello" isInvalid placeholder="Error" variant="filled" />
      <Textarea aria-label="hello" suffixInput={<User width="16" />} placeholder="Error" variant="filled" />
      <Textarea aria-label="hello" prefixInput={<User width="16" />} placeholder="Placeholder" variant="filled" />
      <Textarea
        aria-label="hello"
        prefixInput={'https://'}
        suffixInput=".com"
        defaultValue="Default Value"
        variant="filled"
      />
    </Paper>
  )
}

const OutlineInputPassword = () => {
  return (
    <Paper flow="sm" className="playground" border p="sm" background="surface-3" corner="sm">
      <Textarea variant="outline" aria-label="hello" autoFocus placeholder="Focus" />
      <Textarea variant="outline" aria-label="hello" placeholder="Normal" />
      <Textarea variant="outline" aria-label="hello" disabled placeholder="Disabled" />
      <Textarea variant="outline" aria-label="hello" readOnly placeholder="readOnly" />
      <Textarea variant="outline" aria-label="hello" isInvalid placeholder="Error" />
      <Textarea variant="outline" aria-label="hello" suffixInput={<User width="16" />} placeholder="Error" />
      <Textarea variant="outline" aria-label="hello" prefixInput={<User width="16" />} placeholder="Placeholder" />
      <Textarea
        variant="outline"
        aria-label="hello"
        prefixInput={'https://'}
        suffixInput=".com"
        defaultValue="Default Value"
      />
    </Paper>
  )
}

const BorderedInputPassword = () => {
  return (
    <Paper flow="sm" className="playground" border p="sm" background="surface-3" corner="sm">
      <Textarea variant="bordered" aria-label="hello" autoFocus placeholder="Focus" />
      <Textarea variant="bordered" aria-label="hello" placeholder="Normal" />
      <Textarea variant="bordered" aria-label="hello" disabled placeholder="Disabled" />
      <Textarea variant="bordered" aria-label="hello" readOnly placeholder="readOnly" />
      <Textarea variant="bordered" aria-label="hello" isInvalid placeholder="Error" />
      <Textarea variant="bordered" aria-label="hello" suffixInput={<User width="16" />} placeholder="Error" />
      <Textarea variant="bordered" aria-label="hello" prefixInput={<User width="16" />} placeholder="Placeholder" />
      <Textarea
        variant="bordered"
        aria-label="hello"
        prefixInput={'https://'}
        suffixInput=".com"
        defaultValue="Default Value"
      />
    </Paper>
  )
}

const CornerInputPassword = () => {
  return (
    <Paper flow="sm" className="playground" border p="sm" background="surface-3" corner="sm">
      <Textarea corner="sharp" placeholder="sharp" />
      <Textarea corner="xs" placeholder="xs" />
      <Textarea corner="sm" placeholder="sm" />
      <Textarea corner="md" placeholder="md" />
      <Textarea corner="lg" placeholder="lg" />
      <Textarea corner="xl" placeholder="xl" />
      <Textarea corner="full" placeholder="full" />
    </Paper>
  )
}

const ColorInputPassword = () => {
  return (
    <Paper flow="sm" className="playground" border p="sm" background="surface-3" corner="sm">
      <Textarea color="primary" variant="bordered" autoFocus placeholder="Focus" />
      <Textarea color="warning" variant="bordered" autoFocus placeholder="Normal" />
      <Textarea color="secondary" variant="outline" autoFocus placeholder="Disabled" />
      <Textarea color="surface" variant="filled" autoFocus placeholder="isInvalid" />
      <Textarea
        color="success"
        variant="bordered"
        autoFocus
        prefixInput={<User width="16" />}
        placeholder="Placeholder"
      />
      <Textarea
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

export const SizeInputPassword = () => {
  return (
    <Paper flow="sm" className="playground" border p="sm" background="surface-3" corner="sm">
      <Textarea size="xs" placeholder="Extra Small(xs)" />
      <Textarea size="sm" placeholder="Small(sm)" />
      <Textarea placeholder="Medium (md default You don't need it)" />
      <Textarea size="lg" placeholder="Large(lg)" />
      <Textarea size="xl" placeholder="Extra Large(xl)" />
    </Paper>
  )
}

export const SizeIcons = () => {
  return (
    <Paper flow="sm" className="playground" border p="sm" background="surface-3" corner="sm">
      <Textarea placeholder="Medium" suffixInput={<User width="16" />} />
      <Textarea placeholder="Medium" prefixInput={<User width="16" />} />
      <Textarea placeholder="Medium" prefixInput={<User width="16" />} suffixInput={<Eye width="16" />} />
    </Paper>
  )
}

TextareaPlayGround.Filled = FilledInputPassword
TextareaPlayGround.Outline = OutlineInputPassword
TextareaPlayGround.Bordered = BorderedInputPassword
TextareaPlayGround.Corners = CornerInputPassword
TextareaPlayGround.Colors = ColorInputPassword
TextareaPlayGround.Sizes = SizeInputPassword
TextareaPlayGround.Icons = SizeIcons
