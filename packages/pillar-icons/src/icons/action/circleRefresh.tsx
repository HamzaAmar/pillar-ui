import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const circleRefresh = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M12 16a4 4 0 1 0-4-4v1m-2-1 2 2 2-2m11 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
)

export default circleRefresh
