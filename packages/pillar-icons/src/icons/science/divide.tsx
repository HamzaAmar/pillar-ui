import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const divide = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M5 12h14m-6-6a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
  </svg>
)

export default divide
