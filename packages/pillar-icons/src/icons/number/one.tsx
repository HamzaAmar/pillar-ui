import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const one = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M13 20V4L8 9" />
  </svg>
)

export default one
