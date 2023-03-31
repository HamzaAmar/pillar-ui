import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const zero = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M16 16V8ZM12 20a4 4 0 0 0 4-4V8a4 4 0 1 0-8 0v8a4 4 0 0 0 4 4Z" />
  </svg>
)

export default zero
