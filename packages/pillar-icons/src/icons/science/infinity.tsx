import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const infinity = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M12 12c-.5 1-1.3 2-2.2 2.8a4 4 0 1 1 0-5.6A10 10 0 0 1 12 12Zm0 0c.5-1 1.3-2 2.2-2.8a4 4 0 1 1 0 5.6A10 10 0 0 1 12 12Z" />
  </svg>
)

export default infinity
