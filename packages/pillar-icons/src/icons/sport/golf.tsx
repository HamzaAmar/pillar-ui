import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const golf = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M12 18V3l7 4-7 4m-3 6.7c-.6.3-1 .8-1 1.3 0 1.1 1.8 2 4 2s4-.9 4-2c0-.5-.4-1-1-1.3" />
  </svg>
)

export default golf
