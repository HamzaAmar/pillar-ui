import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const B = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M13 12a4 4 0 1 0 0-8H7v16h6a4 4 0 1 0 0-8Zm0 0H7" />
  </svg>
)

export default B
