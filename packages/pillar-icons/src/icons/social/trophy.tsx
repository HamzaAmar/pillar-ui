import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const trophy = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M8 21h8m-4-4v4m0-4a5 5 0 0 0 5-5V4H7v8a5 5 0 0 0 5 5ZM7 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm14 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  </svg>
)

export default trophy
