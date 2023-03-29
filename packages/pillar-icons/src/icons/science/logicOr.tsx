import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const loginOr = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M22 12h-6M2 9h7m-7 6h7M8 5c10.7 2.1 10.7 12.6 0 14 1.8-4.7 1.8-9.3 0-14Z" />
  </svg>
)

export default loginOr
