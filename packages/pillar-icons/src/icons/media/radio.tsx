import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const radio = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M14 3 5 7a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H5m-1 5h16M7 12v-2m10 6v0m-4 0v0" />
  </svg>
)

export default radio
