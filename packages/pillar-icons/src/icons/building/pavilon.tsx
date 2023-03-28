import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const SvgComponent = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M3 21h7v-3a2 2 0 0 1 4 0v3h7M6 21v-9m0 0h12M6 12a3 3 0 0 1-3-3c2 0 4-.5 5.7-1.6A8 8 0 0 0 12 3a8 8 0 0 0 3.3 4.4C17 8.4 19 9.1 21 9a3 3 0 0 1-3 3m0 9v-9" />
  </svg>
)

export default SvgComponent
