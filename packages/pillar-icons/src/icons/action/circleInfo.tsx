import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const circleInfo = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m9 12 2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
)

export default circleInfo
