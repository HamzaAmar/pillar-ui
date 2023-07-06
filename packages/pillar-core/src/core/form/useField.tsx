import { classnames } from '@pillar/utils'

export function useField({ corner, variant, fluid, isInvalid, readOnly, disabled }: any) {
  const classNames = classnames(
    `form-field-wrapper u_corner-${corner} form-field-wrapper__${variant} u_flex u_items-start u_spacing-xs`,
    { 'form-field-wrapper__fluid': fluid }
  )
  const dataDisabled = disabled
  const dataInvalid = isInvalid
  const dataReadonly = readOnly
  return { classNames, dataDisabled, dataInvalid, dataReadonly }
}
