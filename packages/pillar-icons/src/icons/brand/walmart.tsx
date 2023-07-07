import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const walmart = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M12 8V3m3.5 7L20 7.5M15.5 14l4.5 2.5m-8-.5v5m-3.5-7L4 16.5M8.5 10 4 7.5" />
  </svg>
)

export default walmart
