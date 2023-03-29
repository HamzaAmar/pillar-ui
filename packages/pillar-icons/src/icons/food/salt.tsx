import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const salt = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M12 13v0m-2 3v0m4 0v0M7.5 8h9m-9 0 .3-2.2a2 2 0 0 1 2-1.8h4.4a2 2 0 0 1 2 1.8l.3 2.2m-9 0-1.6 9.7a2 2 0 0 0 2 2.3H16a2 2 0 0 0 2-2.3L16.5 8" />
  </svg>
)

export default salt
