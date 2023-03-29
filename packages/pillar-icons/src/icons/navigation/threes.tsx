import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const threes = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M21 12c0 5-4 9-9 9m9-9c0-5-4-9-9-9m9 9h-3m-6 9c-5 0-9-4-9-9m9 9v-3m-9-6c0-5 4-9 9-9m-9 9h4m5-9v4m0 5v0" />
  </svg>
)

export default threes
