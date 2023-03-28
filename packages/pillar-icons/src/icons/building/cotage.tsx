import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const SvgComponent = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M3 21h18M4 21V10l2.5-4.5L12 3l5.5 2.5L20 10v11M9 21v-5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5M14 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  </svg>
)

export default SvgComponent
