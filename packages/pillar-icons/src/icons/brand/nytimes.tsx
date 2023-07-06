import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const nytimes = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M17 5H7a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4Z" />
    <path d="m10 9 5 3-5 3V9Z" />
  </svg>
)

export default nytimes
