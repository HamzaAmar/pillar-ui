import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const logicBuffer = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M22 12h-5m0 0L7 5v14l10-7ZM2 9h5m-5 6h5" />
  </svg>
)

export default logicBuffer
