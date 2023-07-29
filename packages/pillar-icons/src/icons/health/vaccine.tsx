import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const vaccine = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m17 3 4 4m-2-2-4.5 4.5m-3-3 6 6m-1-1L10 18H6m0 0v-4l6.5-6.5M6 18l-3 3m4.5-8.5L9 14m1.5-4.5L12 11" />
  </svg>
)

export default vaccine
