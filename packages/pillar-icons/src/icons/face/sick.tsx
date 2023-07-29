import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const sick = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M9 10h0m6 0h0m-7 6 1-1 1.5 1 1.5-1 1.5 1 1.5-1 1 1m-4 5a9 9 0 1 1 0-18 9 9 0 0 1 0 18Z" />
  </svg>
)
export default sick
