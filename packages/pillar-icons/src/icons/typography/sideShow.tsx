import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const justify = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M15 6h0M3 13l4-4c.5-.4 1-.7 1.5-.7s1 .3 1.5.7l4 4m-1-1 2-2c.5-.4 1-.7 1.5-.7s1 .3 1.5.7l3 3M8 21h0m4 0h0m4 0h0M6 3h12a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3Z" />
  </svg>
)

export default justify
