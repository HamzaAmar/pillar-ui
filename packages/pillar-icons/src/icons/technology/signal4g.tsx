import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const signal4g = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M5 8v5h5M9 8v8m10-8h-3a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h3v-4h-1" />
  </svg>
)

export default signal4g
