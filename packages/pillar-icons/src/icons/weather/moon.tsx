import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const moon = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M12 3h.4a7.5 7.5 0 0 0 8 12.4A9 9 0 1 1 12 3v0Z" />
  </svg>
)

export default moon
