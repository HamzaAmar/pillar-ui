import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const radix = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M14 5.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0ZM6 3h5v5H6V3ZM11 11v10a5 5 0 0 1-.2-10h.2Z" />
  </svg>
)

export default radix
