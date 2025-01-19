import { cx } from '../cx'
import type { TableProps } from './table.type'

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
        className={cx(`ta- Fs-${size} ta-${variant} C-${color}`, {
          'ta-B': showBorder,
        })}
        {...rest}
      >
        {children}
      </table>
    </div>
  )
}

export type { TableProps } from './table.type'
