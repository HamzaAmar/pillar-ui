import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const music = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M9 17a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm0 0V4h10v13m0 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM9 8h10" />
  </svg>
)

export default music
