// const direction = ['Top', 'Right', 'Bottom', 'Left']

// function generatedProperties(arr: (string | undefined)[], prefix: string) {
//   let result = {}
//   const [shortProperty, ...rest] = arr
//   if (!!shortProperty) {
//     result = { [prefix]: `var(--space-${shortProperty})` }
//   }
//   rest.forEach((val, index) => {
//     if (!!val) {
//       const property = `${prefix}${direction[index]}`
//       result = { ...result, [property]: `var(--space-${val})` }
//     }
//   })

//   return result
// }

import { forwardRef } from 'react'
import type { CSSProperties } from 'react'
import { ForwardRefComponent } from '../../types/polymorphic.type'
import type { PaperProps } from './paper.type'
import { classnames } from '@pillar-ui/utils'

// Helper function to generate CSS variable
function getCSSVariable(value: string | undefined, initial: number = 9) {
  if (!value) return
  const [color, degree = initial] = value.split('-')
  return `var(--${color}-${degree}, none)`
}

const paper = forwardRef((props, ref) => {
  let {
    as: Tag = 'div',
    background,
    color,
    p,
    m,
    b,
    shadow,
    width,
    height,
    corner,
    flow,
    ratio,
    children,
    style = {},
    className,
    ...rest
  } = props

  const classNames = classnames(`paper`, {
    [`u_shadow-${shadow}`]: !!shadow,
    [`l_flow__${flow}`]: !!flow,
    [`u_corner-${corner}`]: !!corner,
    [`u_padding-${p}`]: !!p,
    [`u_margin-${m}`]: !!m,
    [`u_width-${width}`]: !!width,
    [`u_${ratio}`]: !!ratio,
    [className!]: !!className,
  })

  const _style: CSSProperties = {
    background: getCSSVariable(background),
    color: getCSSVariable(color, 12),
    ...style,
  }

  return (
    <Tag style={_style} className={classNames} ref={ref} {...rest}>
      {children}
    </Tag>
  )
}) as ForwardRefComponent<'div', PaperProps>

paper.displayName = 'Pillar-Paper'

export default paper
