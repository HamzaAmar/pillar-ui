import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const SvgComponent = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M8 12c2.5-1.5 5.5-1 7.5.5M9 15c1.5-1 4-1 5 .5M7 9c2-1 6-2 10 .5m4 2.5a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
)

export default SvgComponent
