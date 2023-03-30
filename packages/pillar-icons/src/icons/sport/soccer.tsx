import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const soccer = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 0v4m0 0 4.8 3.4M12 7l-4.8 3.4m9.6 0L15 16m1.8-5.6L20.5 9M15 16H9l-1.8-5.6M15 16l2.5 3M7.2 10.4 3.5 9m5.6 7-2.6 3" />
  </svg>
)

export default soccer
