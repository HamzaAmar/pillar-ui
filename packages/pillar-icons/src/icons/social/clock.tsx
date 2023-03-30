import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const clock = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M12 7v5l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
)

export default clock
