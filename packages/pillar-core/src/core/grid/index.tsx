import { cx } from '../cx'
import { forwardRef } from 'react'
import type { ForwardRefComponent } from '../../types/polymorphic.type'
import type { GridItemProps, GridProps } from './grid.type'

const getCSS = (arr: Array<[string, string | undefined]>): [Record<string, string>, string] =>
  arr.reduce(
    ([styles, cls], [key, value]) => (value ? [{ ...styles, [`--${key}`]: value }, `${cls} ${key}`] : [styles, cls]),
    [{} as Record<string, string>, '']
  )

/*
===============================================================================================
    Grid Item Core Component
===============================================================================================
*/
export const GridItem = forwardRef(
  ({ col = {}, row = {}, children, style, className, as: Tag = 'div', ...rest }, forwardedRef) => {
    const [styles, cls] = getCSS([
      ['gc-def', col.default],
      ['gc-xs', col.xs],
      ['gc-sm', col.sm],
      ['gc-md', col.md],
      ['gc-lg', col.lg],
      ['gc-xl', col.xl],
      ['gr-def', row.default],
      ['gr-xs', row.xs],
      ['gr-sm', row.sm],
      ['gr-md', row.md],
      ['gr-lg', row.lg],
      ['gr-xl', row.xl],
    ])

    const classNames = cx(`${cls}`, {
      className: className,
    })

    return (
      <Tag
        style={{
          ...styles,
          ...style,
        }}
        className={classNames}
        ref={forwardedRef}
        {...rest}
      >
        {children}
      </Tag>
    )
  }
) as ForwardRefComponent<'div', GridItemProps>

GridItem.displayName = 'GridItem'

/*
  ===============================================================================================
      Grid Core Component
  ===============================================================================================
  */

export const Grid = forwardRef(
  (
    { gap, cols = {}, rows = {}, items, justify, children, style, as: Tag = 'div', className, ...rest },
    forwardedRef
  ) => {
    const [styles, cls] = getCSS([
      ['gcs-def', cols.default],
      ['gcs-xs', cols.xs],
      ['gcs-sm', cols.sm],
      ['gcs-md', cols.md],
      ['gcs-lg', cols.lg],
      ['gcs-xl', cols.xl],
      ['grs-def', rows.default],
      ['grs-xs', rows.xs],
      ['grs-sm', rows.sm],
      ['grs-md', rows.md],
      ['grs-lg', rows.lg],
      ['grs-xl', rows.xl],
    ])

    const classNames = cx(`gr- ${cls}`, {
      [`Ajc-${justify}`]: justify,
      [`Aai-${items}`]: items,
      [`Sg-${gap}`]: gap,
      [className!]: className,
      className: className,
    })

    return (
      <Tag
        style={{
          ...styles,
          ...style,
        }}
        className={classNames}
        ref={forwardedRef}
        {...rest}
      >
        {children}
      </Tag>
    )
  }
) as ForwardRefComponent<'div', GridProps>

Grid.displayName = 'Grid'

export type { GridItemProps, GridBaseProps } from './grid.type'
