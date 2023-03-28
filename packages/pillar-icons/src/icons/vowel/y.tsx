import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const Y = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m7 4 5 9m0 0 5-9m-5 9v7" />
  </svg>
)

export default Y
