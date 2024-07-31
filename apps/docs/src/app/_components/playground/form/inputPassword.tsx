import { Paper, InputPassword } from '~/component/core/pillar'
import { Close, Lock, LockOff, OpenSource, User } from '@pillar-ui/icons'

export const InputPasswordPlayGround = () => {
  return <div>hello</div>
}

export const InputPasswordFilled = () => {
  return (
    <Paper flow="sm" className="playground" border p="sm" background="bg-3" corner="sm">
      <InputPassword aria-label="hello" autoFocus placeholder="Focus" variant="filled" />
      <InputPassword aria-label="hello" placeholder="Normal" variant="filled" />
      <InputPassword aria-label="hello" disabled placeholder="Disabled" variant="filled" />
      <InputPassword aria-label="hello" readOnly placeholder="readOnly" variant="filled" />
      <InputPassword aria-label="hello" isInvalid placeholder="Error" variant="filled" />
      <InputPassword aria-label="hello" prefixInput={<User width="16" />} placeholder="Placeholder" variant="filled" />
    </Paper>
  )
}

export const InputPasswordOutline = () => {
  return (
    <Paper flow="sm" className="playground" border p="sm" background="bg-3" corner="sm">
      <InputPassword variant="outline" aria-label="hello" autoFocus placeholder="Focus" />
      <InputPassword variant="outline" aria-label="hello" placeholder="Normal" />
      <InputPassword variant="outline" aria-label="hello" disabled placeholder="Disabled" />
      <InputPassword variant="outline" aria-label="hello" readOnly placeholder="readOnly" />
      <InputPassword variant="outline" aria-label="hello" isInvalid placeholder="Error" />
      <InputPassword variant="outline" aria-label="hello" prefixInput={<User width="16" />} placeholder="Placeholder" />
    </Paper>
  )
}

export const InputPasswordBordered = () => {
  return (
    <Paper flow="sm" className="playground" border p="sm" background="bg-3" corner="sm">
      <InputPassword variant="bordered" aria-label="hello" autoFocus placeholder="Focus" />
      <InputPassword variant="bordered" aria-label="hello" placeholder="Normal" />
      <InputPassword variant="bordered" aria-label="hello" disabled placeholder="Disabled" />
      <InputPassword variant="bordered" aria-label="hello" readOnly placeholder="readOnly" />
      <InputPassword variant="bordered" aria-label="hello" isInvalid placeholder="Error" />
      <InputPassword
        variant="bordered"
        aria-label="hello"
        prefixInput={<User width="16" />}
        placeholder="Placeholder"
      />
    </Paper>
  )
}

export const InputPasswordCorners = () => {
  return (
    <Paper flow="sm" className="playground" border p="sm" background="bg-3" corner="sm">
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

export const InputPasswordColors = () => {
  return (
    <Paper flow="sm" className="playground" border p="sm" background="bg-3" corner="sm">
      <InputPassword color="primary" variant="bordered" autoFocus placeholder="Focus" />
      <InputPassword color="warning" variant="bordered" autoFocus placeholder="Normal" />
      <InputPassword color="secondary" variant="outline" autoFocus placeholder="Disabled" />
      <InputPassword color="bg" variant="filled" autoFocus placeholder="isInvalid" />
      <InputPassword
        color="success"
        variant="bordered"
        autoFocus
        prefixInput={<User width="16" />}
        placeholder="Placeholder"
      />
    </Paper>
  )
}

export const InputPasswordSizes = () => {
  return (
    <Paper flow="sm" className="playground" border p="sm" background="bg-3" corner="sm">
      <InputPassword size="xs" placeholder="Extra Small(xs)" />
      <InputPassword size="sm" placeholder="Small(sm)" />
      <InputPassword placeholder="Medium (md default You don't need it)" />
      <InputPassword size="lg" placeholder="Large(lg)" />
      <InputPassword size="xl" placeholder="Extra Large(xl)" />
    </Paper>
  )
}

export const SizeIconsPassword = () => {
  return (
    <Paper flow="sm" className="playground" border p="sm" background="bg-3" corner="sm">
      <InputPassword placeholder="Medium" prefixInput={<User width="16" />} />
    </Paper>
  )
}

export const InputPasswordCustomIcon = () => {
  return (
    <Paper flow="sm" className="playground" border p="sm" background="bg-3" corner="sm">
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
