import { cx } from '../cx'
import { FieldsetProps } from './fieldset.type'

export function Fieldset({ hideLegend = false, border, legend, children, direction = 'col', ...rest }: FieldsetProps) {
  const classnames = cx(`fl- fl-wrap fl-1 Sg-4`, { [`fl-${direction}`]: !!direction })

  return (
    <fieldset className={cx('fi- Sw-100 Sf-4', { 'fi-border': border })} {...rest}>
      <span>
        <legend className={cx('fi-L fg-L', { 'H-sr': hideLegend })}>{legend}</legend>
      </span>
      <div className={classnames}>{children}</div>
    </fieldset>
  )
}
