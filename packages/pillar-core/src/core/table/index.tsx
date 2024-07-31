import { forwardRef } from 'react'
import { classnames } from '@pillar-ui/utils'
import type { ForwardRefComponent } from '../../types/polymorphic.type'
import type { TableColumnProps, TableProps, TableRowProps } from './table.type'

export const TableColumn = forwardRef(
  ({ as: Comp = 'td', children, weight = 'normal', className, ...rest }, forwardedRef) => {
    return (
      <Comp
        ref={forwardedRef}
        className={classnames('col', {
          [`u_f-${weight}`]: weight !== 'normal',
          [className!]: !!className,
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
      <tr ref={forwardedRef} className={`row row__${type}`} {...rest}>
        {children}
      </tr>
    )
  }
)

TableRow.displayName = 'TableRow'

export const Table = ({
  color = 'bg',
  variant = 'default',
  showBorder,
  size = 'md',
  children,

  ...rest
}: TableProps) => {
  return (
    <div className="t-a_cnt">
      <table
        className={classnames(`t-a u_size-${size} t-a-${variant}  u_${color}`, {
          table__border: !!showBorder,
        })}
        {...rest}
      >
        {children}
      </table>
    </div>
  )
}

export type { TableColumnProps, TableProps, TableRowProps } from './table.type'
