/* eslint-disable react/no-array-index-key */
import { Flex } from '../flex'
import { classnames } from '@pillar-ui/utils'
import type { RatingProps } from './rating.type'

const ICONS = {
  star: 'M12 17.8 5.8 21 7 14.1 2 9.3l7-1L12 2l3 6.3 7 1-5 4.8 1.2 6.9-6.2-3.3Z',
  heart: 'M19.5 13.6 12 21l-7.5-7.4A5 5 0 1 1 12 7a5 5 0 1 1 7.5 6.6',
} as const

export const Rating = ({
  rating,
  hideTitle,
  color = 'warning',
  title = `${rating} star${rating > 1 && 's'} out of 5`,
  size,
  icon = 'star',
  ...props
}: RatingProps) => {
  const classNames = classnames(`r-t u_${color}`, {
    [`u_f-${size}`]: !!size,
  })
  return (
    <Flex as="figure" gap="sm" items="center" className={classNames} {...props}>
      <svg viewBox={`0 0 ${24 * 5} 24`} aria-hidden="true" focusable="false">
        {Array(5)
          .fill('')
          .map((_, index) => {
            return (
              <path
                key={index}
                fill={rating > index ? 'var(--clr-9)' : 'transparent'}
                className="r-t_path"
                transform={`translate(${index * 24}, 0)`}
                d={ICONS[icon]}
              />
            )
          })}
      </svg>

      <figcaption className={classnames('u_f-medium', { u_sr: !!hideTitle })}>{title}</figcaption>
    </Flex>
  )
}

export type { RatingProps } from './rating.type'
