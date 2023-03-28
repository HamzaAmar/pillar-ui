import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const tv = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M7 12a5 5 0 0 1 5-5m0 10a5 5 0 0 0 5-5m4 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-8 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
  </svg>
)

export default tv
