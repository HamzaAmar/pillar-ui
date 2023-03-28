import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const power = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M7 6a7.8 7.8 0 1 0 10 0m-5-2v8" />
  </svg>
)

export default power
