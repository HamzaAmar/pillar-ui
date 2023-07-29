import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const kid = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18Zm0 0a2 2 0 0 0 0 4m-3 3h0m6 0h0m-5.5 5a3.5 3.5 0 0 0 5 0" />
  </svg>
)
export default kid
