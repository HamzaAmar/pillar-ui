import { cx } from '../cx'
import { FieldsetProps } from './fieldset.type'

export function Fieldset({ hideLegend = false, legend, children, direction = 'col', ...rest }: FieldsetProps) {
  const classnames = cx(`f-g fl- fl-wrap Sg-4`, { [`fl-${direction}`]: !!direction })
  return (
    <fieldset className="ra-G Sf-3" {...rest}>
      <legend className={cx('fg-L', { 'H-sr': hideLegend })}>{legend}</legend>
      <div className={classnames}>{children}</div>
    </fieldset>
  )
}
