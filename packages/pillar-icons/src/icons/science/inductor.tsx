import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const inductor = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M2 14h3v-2a2 2 0 0 1 4 0v2-1.5a2.5 2.5 0 0 1 5 0m0 0V14m0-1.5a2.5 2.5 0 0 1 5 0V14h3" />
  </svg>
)

export default inductor
