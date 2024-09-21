import { cx } from '../cx'
import { forwardRef } from 'react'

import type { CSSProperties } from 'react'
import type { ForwardRefComponent } from '../../types/polymorphic.type'
import type { GridItemProps, GridProps } from './grid.type'

const getStyles = (obj?: Record<string, string | undefined>) => {
  if (!obj) return
  const newObj: Record<string, string> = {}
  for (const [key, value] of Object.entries(obj)) {
    if (value) {
      newObj[`--${key}`] = value
    }
  }
  return newObj as CSSProperties
}

/*
===============================================================================================
    Grid Item Core Component
===============================================================================================
*/
export const GridItem = forwardRef((props, forwardedRef) => {
  const { placement, children, style, className, as: Tag = 'div', xs, sm, md, lg, xl, ...rest } = props
  let [column, row] = placement?.split(' x ') ?? []
  let [xsColumn, xsRow] = xs?.split(' x ') ?? []
  let [smColumn, smRow] = sm?.split(' x ') ?? []
  let [mdColumn, mdRow] = md?.split(' x ') ?? []
  let [lgColumn, lgRow] = lg?.split(' x ') ?? []
  let [xlColumn, xlRow] = xl?.split(' x ') ?? []

  const classNames = cx('g-r_i', {
    className: !!className,
    [`xs_grid-column`]: !!xsColumn,
    [`sm_grid-column`]: !!smColumn,
    [`md_grid-column`]: !!mdColumn,
    [`lg_grid-column`]: !!lgColumn,
    [`xl_grid-column`]: !!xlColumn,
    [`xs_grid-row`]: !!xsRow,
    [`sm_grid-row`]: !!smRow,
    [`md_grid-row`]: !!mdRow,
    [`lg_grid-row`]: !!lgRow,
    [`xl_grid-row`]: !!xlRow,
  })

  const regularStyle = getStyles({
    column,
    row,
    'xs-grid-column': xsColumn,
    'sm-grid-column': smColumn,
    'md-grid-column': mdColumn,
    'lg-grid-column': lgColumn,
    'xl-grid-column': xlColumn,

    'xs-grid-row': xsRow,
    'sm-grid-row': smRow,
    'md-grid-row': mdRow,
    'lg-grid-row': lgRow,
    'xl-grid-row': xlRow,
  })

  return (
    <Tag
      style={{
        ...regularStyle,
        ...style,
      }}
      className={classNames}
      ref={forwardedRef}
      {...rest}
    >
      {children}
    </Tag>
  )
}) as ForwardRefComponent<'div', GridItemProps>

GridItem.displayName = 'GridItem'

/*
  ===============================================================================================
      Grid Core Component
  ===============================================================================================
  */

export const Grid = forwardRef((props, forwardedRef) => {
  const { gap, grid, items, justify, children, style, as: Tag = 'div', className, xs, sm, md, lg, xl, ...rest } = props
  const [columns, rows] = grid?.split(' x ') ?? []
  let [xsColumns, xsRows] = xs?.split(' x ') ?? []
  let [smColumns, smRows] = sm?.split(' x ') ?? []
  let [mdColumns, mdRows] = md?.split(' x ') ?? []
  let [lgColumns, lgRows] = lg?.split(' x ') ?? []
  let [xlColumns, xlRows] = xl?.split(' x ') ?? []

  const classNames = cx('g-r', {
    [`u_jus-${justify}`]: !!justify,
    [`u_it-${items}`]: !!items,
    [`u_gap-${gap}`]: !!gap,
    [className!]: !!className,
    [`xs_grid-columns`]: !!xsColumns,
    [`sm_grid-columns`]: !!smColumns,
    [`md_grid-columns`]: !!mdColumns,
    [`lg_grid-columns`]: !!lgColumns,
    [`xl_grid-columns`]: !!xlColumns,
    [`xs_grid-rows`]: !!xsRows,
    [`sm_grid-rows`]: !!smRows,
    [`md_grid-rows`]: !!mdRows,
    [`lg_grid-rows`]: !!lgRows,
    [`xl_grid-rows`]: !!xlRows,
  })

  const gridStyle = getStyles({
    columns,
    rows,
    'xs-grid-columns': xsColumns,
    'sm-grid-columns': smColumns,
    'md-grid-columns': mdColumns,
    'lg-grid-columns': lgColumns,
    'xl-grid-columns': xlColumns,

    'xs-grid-rows': xsRows,
    'sm-grid-rows': smRows,
    'md-grid-rows': mdRows,
    'lg-grid-rows': lgRows,
    'xl-grid-rows': xlRows,
  })

  return (
    <div
      style={{
        ...gridStyle,
        ...style,
      }}
      className={classNames}
      ref={forwardedRef}
      {...rest}
    >
      {children}
    </div>
  )
}) as ForwardRefComponent<'div', GridProps>

Grid.displayName = 'Grid'

export type { GridItemProps, GridBaseProps } from './grid.type'
