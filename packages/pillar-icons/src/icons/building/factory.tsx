import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const factory = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M4 21c1.1-4 2-8 2-12h6c0 4 .9 8 2 12m-1.5-8H17c0 2.6.9 5.3 2 8M9 5a2.4 2.4 0 0 1 2-1 2.4 2.4 0 0 1 2 1 2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 1 2-1 2.4 2.4 0 0 1 2 1M3 21h19" />
  </svg>
)

export default factory
