import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const folder = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
  </svg>
)

export default folder
