import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const send = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M10 14 21 3M10 14l3.5 7a.6.6 0 0 0 1 0L21 3M10 14l-7-3.5a.6.6 0 0 1 0-1L21 3" />
  </svg>
)

export default send
