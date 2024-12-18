import { forwardRef } from 'react'
import { cx } from '../cx'

import type { ForwardRefComponent } from '../../types/polymorphic.type'
import type { TableColumnProps, TableProps, TableRowProps } from './table.type'

export const TableColumn = forwardRef(
  ({ as: Comp = 'td', children, weight = 'normal', className, ...rest }, forwardedRef) => {
    return (
      <Comp
        ref={forwardedRef}
        className={cx('tc-', {
          [`Fw-${weight}`]: weight !== 'normal',
          [className!]: className,
        })}
        {...rest}
      >
        {children}
      </Comp>
    )
  }
) as ForwardRefComponent<'td', TableColumnProps>

TableColumn.displayName = 'TableColumn'

export const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ children, type = 'body', ...rest }, forwardedRef) => {
    return (
      <tr ref={forwardedRef} className={`tr- tr-${type}`} {...rest}>
        {children}
      </tr>
    )
  }
)

TableRow.displayName = 'TableRow'

export const Table = ({
  color = 'b',
  variant = 'default',
  showBorder,
  size = '5',
  children,

  ...rest
}: TableProps) => {
  return (
    <div className="ta-C">
      <table
        className={cx(`ta- Fs-${size} ta-${variant}  C-${color}`, {
          'ta-B': showBorder,
        })}
        {...rest}
      >
        {children}
      </table>
    </div>
  )
}

export type { TableColumnProps, TableProps, TableRowProps } from './table.type'
