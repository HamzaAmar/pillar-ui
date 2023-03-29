import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const bracketsContainEnd = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M8 4H5v16h3m8-16h3v16h-3" />
  </svg>
)

export default bracketsContainEnd
