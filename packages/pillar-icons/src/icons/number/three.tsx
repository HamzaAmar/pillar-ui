import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const three = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M8 8a4 4 0 1 1 4 4 4 4 0 1 1-4 4" />
  </svg>
)

export default three
