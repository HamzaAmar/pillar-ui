import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const SvgComponent = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M9 15V9l7.7 10.6a9 9 0 1 1 2.3-2M15 12V9" />
  </svg>
)

export default SvgComponent
