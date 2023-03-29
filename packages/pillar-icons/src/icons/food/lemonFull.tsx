import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const lemonFull = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M18 4a2 2 0 0 1 1.2 3.6c1.5 3 .9 7-2 9.7-2.7 2.8-6.6 3.4-9.6 1.9a2 2 0 1 1-2.8-2.8c-1.5-3-.9-7 2-9.7 2.7-2.8 6.6-3.4 9.6-1.9A2 2 0 0 1 18 4Z" />
  </svg>
)

export default lemonFull
