/* eslint-disable react/no-array-index-key */
import { cx } from '../cx'
import type { RatingProps } from './rating.type'

const ICONS = {
  star: 'M12 17.8 5.8 21 7 14.1 2 9.3l7-1L12 2l3 6.3 7 1-5 4.8 1.2 6.9-6.2-3.3Z',
  heart: 'M19.5 13.6 12 21l-7.5-7.4A5 5 0 1 1 12 7a5 5 0 1 1 7.5 6.6',
} as const

export const Rating = ({
  rating,
  hideTitle,
  color = 'war',
  title = `${rating} star${rating > 1 && 's'} out of 5`,
  size,
  icon = 'star',
  ...props
}: RatingProps) => {
  const classNames = cx(`r-t C${color} u_gap-xs u_center`, {
    [`u_f-${size}`]: size,
  })
  return (
    <figure className={classNames} {...props}>
      <svg viewBox={`0 0 ${24 * 5} 24`} aria-hidden="true" focusable="false">
        {Array(5)
          .fill('')
          .map((_, index) => {
            return (
              <path
                key={index}
                fill={rating > index ? 'var(--c-9)' : 'none'}
                stroke="var(--c-9)"
                transform={`translate(${index * 24}, 0)`}
                d={ICONS[icon]}
              />
            )
          })}
      </svg>

      <figcaption className={cx('u_f-medium', { u_sr: hideTitle })}>{title}</figcaption>
    </figure>
  )
}

export type { RatingProps } from './rating.type'
