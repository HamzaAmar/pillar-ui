import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const logicNor = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M22 12h-4m0 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM2 9h5m-5 6h5M6 5c10.7 2.1 10.7 12.6 0 14 1.8-4.7 1.8-9.3 0-14Z" />
  </svg>
)

export default logicNor
