import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const SvgComponent = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m21 14-9 7-9-7L6 3l3 7h6l3-7 3 11Z" />
  </svg>
)

export default SvgComponent
