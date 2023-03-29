import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const microphoneOff = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m3 3 18 18M9 5a3 3 0 1 1 6 0v6m-2 2a3 3 0 0 1-4-3V9m-4 1a7 7 0 0 0 11 6m2-2 1-4M8 21h8m-4-4v4" />
  </svg>
)

export default microphoneOff
