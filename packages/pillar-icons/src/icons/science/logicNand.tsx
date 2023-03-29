import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const LogicNand = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M22 12h-3m0 0a2 2 0 1 1-4 0m4 0a2 2 0 1 0-4 0M2 9h3m-3 6h3m10-3c0-3.5-2-7-8-7H5v14h2c6 0 8-3.5 8-7Z" />
  </svg>
)

export default LogicNand
