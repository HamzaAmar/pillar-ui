import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const worldLatitude = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M21 12a9 9 0 1 1-18 0m18 0a9 9 0 1 0-18 0m18 0H3m1.6-5h14.8M4.6 17h14.8" />
  </svg>
)

export default worldLatitude
