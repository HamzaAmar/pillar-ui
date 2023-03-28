import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const SvgComponent = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M3 21h18M5 21V9l5 4V9l5 4h4m0 0v8m0-8-1.4-9.6A.5.5 0 0 0 17 3h-1.2a.5.5 0 0 0-.5.4L14 12m-5 5h1m4 0h1" />
  </svg>
)

export default SvgComponent
