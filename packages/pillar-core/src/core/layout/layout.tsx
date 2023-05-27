/* eslint-disable no-underscore-dangle */
/* eslint-disable no-restricted-syntax */
/* eslint-disable consistent-return */
import { forwardRef } from 'react'

import type { CSSProperties } from 'react'
import type { FlexProps, GridItemProps, GridProps } from './layout.type'
import { classnames } from '../../utils/classnames'
import type { ForwardRefComponent } from '../../types/polymorphic.type'

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

const Item = forwardRef((props, forwardedRef) => {
  const { column, row, area, children, style, className, as: Tag = 'div', ...rest } = props

  const _className = classnames('grid--item', {
    className: Boolean(className),
    style: Boolean(style),
  })

  const regularStyle = getStyles({ column, row, area })

  return (
    <Tag
      style={{
        ...regularStyle,
        ...style,
      }}
      className={_className}
      ref={forwardedRef}
      {...rest}
    >
      {children}
    </Tag>
  )
}) as ForwardRefComponent<'div', GridItemProps>

Item.displayName = 'Pillar-GridItem'

/*
===============================================================================================
    Grid Core Component
===============================================================================================
*/

export const Grid = forwardRef((props, forwardedRef) => {
  const { gap, columns, rows, items, justify, areas, children, style, as: Tag = 'div', className, ...rest } = props
  const _className = classnames('grid', {
    [`u_justify-${justify}`]: !!justify,
    [`u_items-${items}`]: !!items,
    [`u_spacing-${gap}`]: !!gap,
    [className!]: Boolean(className),
  })

  const gridStyle = getStyles({ columns, rows, areas })

  return (
    <div
      style={{
        ...gridStyle,
        ...style,
      }}
      className={_className}
      ref={forwardedRef}
      {...rest}
    >
      {children}
    </div>
  )
}) as ForwardRefComponent<'div', GridProps> & { Item: typeof Item }

Grid.Item = Item
Grid.displayName = 'Pillar-Grid'

/*
===============================================================================================
    Flex Core Component
===============================================================================================
*/

export const Flex = forwardRef((props, forwardedRef) => {
  const { children, justify, items, flex, direction, wrap, inline, as: Tag = 'div', gap, className, ...rest } = props

  const _className = classnames('flex', {
    [`u_justify-${justify}`]: !!justify && justify !== 'start',
    [`u_items-${items}`]: !!items,
    // [`u_flex-${flex}`]: !!items,
    [`l_direction-${direction}`]: !!direction && direction !== 'row',
    'l_flex-wrap': !!wrap,
    'u_flex-inline': !!inline,
    [`u_spacing-${gap}`]: !!gap,
    [`${className}`!]: !!className,
  })

  return (
    <Tag ref={forwardedRef} className={_className} {...rest}>
      {children}
    </Tag>
  )
}) as ForwardRefComponent<'div', FlexProps>

Flex.displayName = 'Pillar-Flex'
