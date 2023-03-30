import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const niddle = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m17 4 4 4m-2-2-4.5 4.5m-3-3 6 6m-1-1L10 19H6m0 0v-4l6.5-6.5M6 19l-3 3m4.5-8.5L9 15m1.5-4.5L12 12" />
  </svg>
)

export default niddle
