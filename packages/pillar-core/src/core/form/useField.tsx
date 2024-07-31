import { classnames } from '@pillar-ui/utils'

export function useField({ corner, variant, fluid, isInvalid, readOnly, disabled }: any) {
  const classNames = classnames(
    `form-field-wrapper u_rad-${corner} form-field-wrapper__${variant} u_flex u_items-start u_space-xs`,
    { 'form-field-wrapper__fluid': fluid }
  )
  const dataDisabled = disabled
  const dataInvalid = isInvalid
  const dataReadonly = readOnly
  return { classNames, dataDisabled, dataInvalid, dataReadonly }
}
