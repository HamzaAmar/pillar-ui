import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const H = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M17 4v16M7 12h10M7 4v16" />
  </svg>
)

export default H
