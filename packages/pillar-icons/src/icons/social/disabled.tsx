import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const disabled = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M11 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 0v8h4l4 5m-8-9h5m-9 .5a5 5 0 1 0 6 7.5" />
  </svg>
)

export default disabled
