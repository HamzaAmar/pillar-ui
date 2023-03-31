import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const circleOne = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M12 16V8l-2 2m11 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
)

export default circleOne
