import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const cross = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M10 21h4v-9h5V8h-5V3h-4v5H5v4h5v9Z" />
  </svg>
)

export default cross
