import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const gamepad = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M6 12h4m-2-2v4m7-3v0m3 2v0M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2Z" />
  </svg>
)

export default gamepad
