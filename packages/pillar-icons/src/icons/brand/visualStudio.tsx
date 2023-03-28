import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const SvgComponent = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m4 8 2-1 10 13 4-2V6l-4-2L6 17l-2-1V8Z" />
  </svg>
)

export default SvgComponent
