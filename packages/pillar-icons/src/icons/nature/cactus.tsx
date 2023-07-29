import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const cactus = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M6 9v1a3 3 0 0 0 3 3h1m8-5v5a3 3 0 0 1-3 3h-1m-4 5V5a2 2 0 1 1 4 0v16m-7 0h10" />
  </svg>
)
export default cactus
