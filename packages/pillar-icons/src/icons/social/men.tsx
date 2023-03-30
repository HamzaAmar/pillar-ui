import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const men = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M10 23v-5l-1-1v-4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4l-1 1v5m0-17a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  </svg>
)

export default men
