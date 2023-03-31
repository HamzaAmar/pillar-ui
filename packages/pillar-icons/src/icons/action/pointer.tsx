import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const pointer = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M13.5 13.5 18 18M6 6l4.2 11.8a.4.4 0 0 0 .3.2.4.4 0 0 0 .3-.2L13 13l4.8-2a.4.4 0 0 0 .2-.3.4.4 0 0 0-.2-.3L6 6Z" />
  </svg>
)

export default pointer
