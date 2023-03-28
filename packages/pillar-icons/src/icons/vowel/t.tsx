import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const T = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M6 4h12m-6 0v16" />
  </svg>
)

export default T
