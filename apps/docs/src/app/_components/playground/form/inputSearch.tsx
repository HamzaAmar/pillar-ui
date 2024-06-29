import { Paper, InputSearch } from '~/component/core/pillar'
import { Eye, User } from '@pillar-ui/icons'

export const InputSearchFilled = () => {
  return (
    <Paper flow="sm" className="playground" border p="sm" background="surface-3" corner="sm">
      <InputSearch aria-label="hello" autoFocus placeholder="Focus" variant="filled" />
      <InputSearch aria-label="hello" placeholder="Normal" variant="filled" />
      <InputSearch aria-label="hello" disabled placeholder="Disabled" variant="filled" />
      <InputSearch aria-label="hello" readOnly placeholder="readOnly" variant="filled" />
      <InputSearch aria-label="hello" isInvalid placeholder="Error" variant="filled" />
      <InputSearch aria-label="hello" prefixInput={<User width="16" />} placeholder="Placeholder" variant="filled" />
    </Paper>
  )
}

export const InputSearchOutline = () => {
  return (
    <Paper flow="sm" className="playground" border p="sm" background="surface-3" corner="sm">
      <InputSearch variant="outline" aria-label="hello" autoFocus placeholder="Focus" />
      <InputSearch variant="outline" aria-label="hello" placeholder="Normal" />
      <InputSearch variant="outline" aria-label="hello" disabled placeholder="Disabled" />
      <InputSearch variant="outline" aria-label="hello" readOnly placeholder="readOnly" />
      <InputSearch variant="outline" aria-label="hello" isInvalid placeholder="Error" />
      <InputSearch variant="outline" aria-label="hello" prefixInput={<User width="16" />} placeholder="Placeholder" />
    </Paper>
  )
}

export const InputSearchBordered = () => {
  return (
    <Paper flow="sm" className="playground" border p="sm" background="surface-3" corner="sm">
      <InputSearch variant="bordered" aria-label="hello" autoFocus placeholder="Focus" />
      <InputSearch variant="bordered" aria-label="hello" placeholder="Normal" />
      <InputSearch variant="bordered" aria-label="hello" disabled placeholder="Disabled" />
      <InputSearch variant="bordered" aria-label="hello" readOnly placeholder="readOnly" />
      <InputSearch variant="bordered" aria-label="hello" isInvalid placeholder="Error" />
      <InputSearch variant="bordered" aria-label="hello" prefixInput={<User width="16" />} placeholder="Placeholder" />
    </Paper>
  )
}

export const InputSearchCorners = () => {
  return (
    <Paper flow="sm" className="playground" border p="sm" background="surface-3" corner="sm">
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

export const InputSearchColors = () => {
  return (
    <Paper flow="sm" className="playground" border p="sm" background="surface-3" corner="sm">
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

export const InputSearchSizes = () => {
  return (
    <Paper flow="sm" className="playground" border p="sm" background="surface-3" corner="sm">
      <InputSearch size="xs" placeholder="Extra Small(xs)" />
      <InputSearch size="sm" placeholder="Small(sm)" />
      <InputSearch placeholder="Medium (md default You don't need it)" />
      <InputSearch size="lg" placeholder="Large(lg)" />
      <InputSearch size="xl" placeholder="Extra Large(xl)" />
    </Paper>
  )
}

export const SizeIconsSearch = () => {
  return (
    <Paper flow="sm" className="playground" border p="sm" background="surface-3" corner="sm">
      <InputSearch placeholder="Medium" prefixInput={<User width="16" />} />
    </Paper>
  )
}
