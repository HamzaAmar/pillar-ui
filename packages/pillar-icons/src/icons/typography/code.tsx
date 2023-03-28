import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const justify = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m7 8-4 4 4 4m10-8 4 4-4 4M14 4l-4 16" />
  </svg>
)

export default justify
