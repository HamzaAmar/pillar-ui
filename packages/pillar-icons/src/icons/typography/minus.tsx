import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const justify = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M9 12h6m-9 7a2 2 0 0 1-2-2v-4l-1-1 1-1V7a2 2 0 0 1 2-2m12 14a2 2 0 0 0 2-2v-4l1-1-1-1V7a2 2 0 0 0-2-2" />
  </svg>
)

export default justify
