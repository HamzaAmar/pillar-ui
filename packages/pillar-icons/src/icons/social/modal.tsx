import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const modal = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M9 3h6l3 7-6 2M9 3l-3 7 6 2M9 3l3 9m0 0-1.5 3-3 .5 2 2L9 21l3-1.5 3 1.5-.5-3.5 2-2-3-.5-1.5-3Zm3-1-3-8" />
  </svg>
)

export default modal
