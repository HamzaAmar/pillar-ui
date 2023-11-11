import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const palette = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M12 21a9 9 0 1 1 0-18c5 0 9 3.6 9 8 0 1-.5 2-1.3 2.8-.9.8-2 1.2-3.2 1.2H14a2 2 0 0 0-1 3.8 1.3 1.3 0 0 1-1 2.2Z" />
    <path d="M7.5 10.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM11.5 7.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM15.5 10.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z" />
  </svg>
)

export default palette
