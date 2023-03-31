import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const nine = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M16 9a4 4 0 1 1-8 0V8a4 4 0 0 1 8 0v8a4 4 0 1 1-8 0" />
  </svg>
)

export default nine
