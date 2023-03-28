import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const SvgComponent = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 0v9m0 0 7 5m-7-5-7 5" />
  </svg>
)

export default SvgComponent
