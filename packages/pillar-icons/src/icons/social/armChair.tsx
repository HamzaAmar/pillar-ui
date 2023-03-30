import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const armChair = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M5 11.5a2 2 0 0 1 2 2v2h10v-2a2 2 0 0 1 2-2m-14 0a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2m-14 0v-5a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v5m-13 8v2m12-2v2" />
  </svg>
)

export default armChair
