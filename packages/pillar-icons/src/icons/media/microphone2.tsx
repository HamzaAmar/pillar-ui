import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const microphone2 = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M15 13a5 5 0 1 0-4-4m4 4-4-4m4 4-9 7a2 2 0 1 1-2-2l7-9" />
  </svg>
)

export default microphone2
