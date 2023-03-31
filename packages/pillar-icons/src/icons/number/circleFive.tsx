import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const boxZero = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M10 16h2a2 2 0 0 0 0-4h-2V8h4m7 4a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
)

export default boxZero
