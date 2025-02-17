import { cx } from '../cx'
import { Paper } from '../paper'
import { FieldsetProps } from './fieldset.type'

export function Fieldset({ hideLegend = false, border, legend, children, direction = 'col', ...rest }: FieldsetProps) {
  const classnames = cx(`fl- fl-wrap fl-1 Sg-4`, { [`fl-${direction}`]: !!direction })

  return (
    <Paper as="fieldset" width="100%" className={cx('fi- Sf-4', { 'fi-border': border })} {...rest}>
      <span>
        <legend className={cx('fi-L fg-L', { 'H-sr': hideLegend })}>{legend}</legend>
      </span>
      <div className={classnames}>{children}</div>
    </Paper>
  )
}
