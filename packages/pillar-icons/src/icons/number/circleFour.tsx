import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const circleFour = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M13 16V8l-4 6h5m7-2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
)

export default circleFour
