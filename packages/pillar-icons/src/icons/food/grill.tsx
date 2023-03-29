import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const grill = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M15 18a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm0 0H7m8-4 1 2m-7-2-3 6m9-15V4m-3 1V4M9 5V4m10 4H5a6 6 0 0 0 6 6h2a6 6 0 0 0 6-5.8V8Z" />
  </svg>
)

export default grill
