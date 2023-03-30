import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const women = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M10 23v-4H8l2-6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1l2 6h-2v4m0-17a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  </svg>
)

export default women
