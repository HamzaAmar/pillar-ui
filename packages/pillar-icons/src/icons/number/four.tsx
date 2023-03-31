import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const four = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M15 20V5L7 16h10" />
  </svg>
)

export default four
