import { forwardRef } from 'react'
import type { CSSProperties } from 'react'
import { ForwardRefComponent } from '../../types/polymorphic.type'
import type { PaperProps } from './paper.type'
import { classnames } from '@pillar-ui/utils'

const direction = ['Top', 'Right', 'Bottom', 'Left']

// Helper function to generate CSS variable
function getCSSVariable(value: string | undefined, initial: number = 9) {
  if (!value) return
  const [color, degree = initial] = value.split('-')
  return `var(--${color}-${degree}, none)`
}

function generatedProperties(arr: (string | undefined)[], prefix: string) {
  let result = {}
  const [shortProperty, ...rest] = arr
  if (!!shortProperty) {
    result = { [prefix]: `var(--space-${shortProperty})` }
  }
  rest.forEach((val, index) => {
    if (!!val) {
      const property = `${prefix}${direction[index]}`
      result = { ...result, [property]: `var(--space-${val})` }
    }
  })

  return result
}

const paper = forwardRef((props, ref) => {
  let {
    background,
    color,
    p,
    plr,
    ptb,
    pb = ptb,
    pt = ptb,
    pr = plr,
    pl = plr,
    m,
    mlr,
    mtb,
    mb = mtb,
    mt = mtb,
    mr = mlr,
    ml = mlr,
    b,
    blr,
    btb,
    bb = btb,
    bt = btb,
    br = blr,
    bl = blr,
    shadow,
    width,
    height,
    corner,
    as: Tag = 'div',
    borderColor,
    borderWidth,
    borderStyle,
    borderPosition,
    flow,
    children,
    className,
    style = {},
    ...rest
  } = props
  const paddingProperties = generatedProperties([p, pt, pr, pb, pl], 'padding')
  const marginProperties = generatedProperties([m, mt, mr, mb, ml], 'margin')
  const borderProperties = generatedProperties([b, bt, br, bb, bl], 'border')

  const classNames = classnames(`paper`, {
    [`u_shadow-${shadow}`]: !!shadow,
    [`l_flow__${flow}`]: !!flow,
    [`u_corner-${corner}`]: !!corner,
    [className!]: !!className,
  })

  const _style: CSSProperties = {
    background: getCSSVariable(background),
    color: getCSSVariable(color, 12),
    width: `${width}`,
    height: `${height}`,
    ...paddingProperties,
    ...marginProperties,
    ...borderProperties,
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
