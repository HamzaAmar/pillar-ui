import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const logicXor = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M22 12h-4M2 9h6m-6 6h6m-1 4A19 19 0 0 0 7 5m3 0c10.7 2.1 10.7 12.6 0 14 1.8-4.7 1.8-9.3 0-14Z" />
  </svg>
)

export default logicXor
