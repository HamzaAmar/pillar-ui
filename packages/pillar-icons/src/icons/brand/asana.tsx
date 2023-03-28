import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const SvgComponent = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M12 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm5 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM7 19a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
  </svg>
)

export default SvgComponent
