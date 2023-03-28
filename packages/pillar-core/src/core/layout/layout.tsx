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
  const { column, row, area, children, style, className, as: Tag = 'div' } = props

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
    >
      {children}
    </Tag>
  )
}) as ForwardRefComponent<'div', GridItemProps>

Item.displayName = 'GridItem'

/*
===============================================================================================
    Grid Core Component
===============================================================================================
*/

export const Grid = forwardRef(
  ({ gap, columns, rows, items, justify, areas, children, style, className }, forwardedRef) => {
    const _className = classnames('grid', {
      [`u_justify-${justify}`]: !!justify,
      [`u_items-${items}`]: !!items,
      [`u_spacing-${gap}`]: !!gap,
      [className!]: Boolean(className),
    })

    const regularStyle = getStyles({ columns, rows, areas })

    return (
      <div
        style={{
          ...regularStyle,
          ...style,
        }}
        className={_className}
        ref={forwardedRef}
      >
        {children}
      </div>
    )
  }
) as ForwardRefComponent<'div', GridProps> & { Item: typeof Item }

Grid.Item = Item
Grid.displayName = 'Grid'

/*
===============================================================================================
    Flex Core Component
===============================================================================================
*/

export const Flex = forwardRef((props, forwardedRef) => {
  const { children, justify, items, flex, direction, wrap, inline, as: Tag = 'div', gap, className, ...rest } = props

  const _className = classnames('flex', {
    [`u_justify-${justify}`]: !!justify,
    [`u_items-${items}`]: !!items,
    // [`u_flex-${flex}`]: !!items,
    [`u_direction-${direction}`]: !!direction && direction !== 'row',
    'u_wrap-wrap': !!wrap,
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

Flex.displayName = 'Flex'
