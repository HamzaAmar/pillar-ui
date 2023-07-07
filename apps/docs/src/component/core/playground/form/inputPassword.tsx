import { Paper, InputPassword } from '@pillar/core'
import { Close, Eye, Lock, LockOff, OpenSource, User } from '@pillar/icons'

export const InputPasswordPlayGround = () => {
  return <div>hello</div>
}

const FilledInputPassword = () => {
  return (
    <Paper flow="sm" className="playground" borderColor="opacity-6" p="sm" background="surface-3" corner="sm">
      <InputPassword aria-label="hello" autoFocus placeholder="Focus" variant="filled" />
      <InputPassword aria-label="hello" placeholder="Normal" variant="filled" />
      <InputPassword aria-label="hello" disabled placeholder="Disabled" variant="filled" />
      <InputPassword aria-label="hello" readOnly placeholder="readOnly" variant="filled" />
      <InputPassword aria-label="hello" isInvalid placeholder="Error" variant="filled" />
      <InputPassword aria-label="hello" suffixInput={<User width="16" />} placeholder="Error" variant="filled" />
      <InputPassword aria-label="hello" prefixInput={<User width="16" />} placeholder="Placeholder" variant="filled" />
      <InputPassword
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
    <Paper flow="sm" className="playground" borderColor="opacity-6" p="sm" background="surface-3" corner="sm">
      <InputPassword variant="outline" aria-label="hello" autoFocus placeholder="Focus" />
      <InputPassword variant="outline" aria-label="hello" placeholder="Normal" />
      <InputPassword variant="outline" aria-label="hello" disabled placeholder="Disabled" />
      <InputPassword variant="outline" aria-label="hello" readOnly placeholder="readOnly" />
      <InputPassword variant="outline" aria-label="hello" isInvalid placeholder="Error" />
      <InputPassword variant="outline" aria-label="hello" suffixInput={<User width="16" />} placeholder="Error" />
      <InputPassword variant="outline" aria-label="hello" prefixInput={<User width="16" />} placeholder="Placeholder" />
      <InputPassword
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
    <Paper flow="sm" className="playground" borderColor="opacity-6" p="sm" background="surface-3" corner="sm">
      <InputPassword variant="bordered" aria-label="hello" autoFocus placeholder="Focus" />
      <InputPassword variant="bordered" aria-label="hello" placeholder="Normal" />
      <InputPassword variant="bordered" aria-label="hello" disabled placeholder="Disabled" />
      <InputPassword variant="bordered" aria-label="hello" readOnly placeholder="readOnly" />
      <InputPassword variant="bordered" aria-label="hello" isInvalid placeholder="Error" />
      <InputPassword variant="bordered" aria-label="hello" suffixInput={<User width="16" />} placeholder="Error" />
      <InputPassword
        variant="bordered"
        aria-label="hello"
        prefixInput={<User width="16" />}
        placeholder="Placeholder"
      />
      <InputPassword
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
    <Paper flow="sm" className="playground" borderColor="opacity-6" p="sm" background="surface-3" corner="sm">
      <InputPassword corner="sharp" placeholder="sharp" />
      <InputPassword corner="xs" placeholder="xs" />
      <InputPassword corner="sm" placeholder="sm" />
      <InputPassword corner="md" placeholder="md" />
      <InputPassword corner="lg" placeholder="lg" />
      <InputPassword corner="xl" placeholder="xl" />
      <InputPassword corner="full" placeholder="full" />
    </Paper>
  )
}

const ColorInputPassword = () => {
  return (
    <Paper flow="sm" className="playground" borderColor="opacity-6" p="sm" background="surface-3" corner="sm">
      <InputPassword color="primary" variant="bordered" autoFocus placeholder="Focus" />
      <InputPassword color="warning" variant="bordered" autoFocus placeholder="Normal" />
      <InputPassword color="secondary" variant="outline" autoFocus placeholder="Disabled" />
      <InputPassword color="surface" variant="filled" autoFocus placeholder="isInvalid" />
      <InputPassword
        color="success"
        variant="bordered"
        autoFocus
        prefixInput={<User width="16" />}
        placeholder="Placeholder"
      />
      <InputPassword
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
    <Paper flow="sm" className="playground" borderColor="opacity-6" p="sm" background="surface-3" corner="sm">
      <InputPassword size="xs" placeholder="Extra Small(xs)" />
      <InputPassword size="sm" placeholder="Small(sm)" />
      <InputPassword placeholder="Medium (md default You don't need it)" />
      <InputPassword size="lg" placeholder="Large(lg)" />
      <InputPassword size="xl" placeholder="Extra Large(xl)" />
    </Paper>
  )
}

export const SizeIcons = () => {
  return (
    <Paper flow="sm" className="playground" borderColor="opacity-6" p="sm" background="surface-3" corner="sm">
      <InputPassword placeholder="Medium" suffixInput={<User width="16" />} />
      <InputPassword placeholder="Medium" prefixInput={<User width="16" />} />
      <InputPassword placeholder="Medium" prefixInput={<User width="16" />} suffixInput={<Eye width="16" />} />
    </Paper>
  )
}

export const InputPasswordCustomIcon = () => {
  return (
    <Paper flow="sm" className="playground" borderColor="opacity-6" p="sm" background="surface-3" corner="sm">
      <InputPassword
        placeholder="enter your password"
        color="primary"
        visibleIcon={<Lock />}
        hiddenIcon={<LockOff />}
      />
      <InputPassword
        placeholder="enter your password"
        color="warning"
        visibleIcon={<OpenSource />}
        hiddenIcon={<Close />}
      />
    </Paper>
  )
}

InputPasswordPlayGround.Filled = FilledInputPassword
InputPasswordPlayGround.Outline = OutlineInputPassword
InputPasswordPlayGround.Bordered = BorderedInputPassword
InputPasswordPlayGround.Corners = CornerInputPassword
InputPasswordPlayGround.Colors = ColorInputPassword
InputPasswordPlayGround.Sizes = SizeInputPassword
InputPasswordPlayGround.Icons = SizeIcons
InputPasswordPlayGround.CustomIcon = InputPasswordCustomIcon
