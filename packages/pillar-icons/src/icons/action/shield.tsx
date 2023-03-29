import { svgProps } from '../../shared'
import { SvgType } from '../../type'

const shield = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M12 3a12 12 0 0 0 8.5 3A12 12 0 0 1 12 21 12 12 0 0 1 3.5 6c3.1.1 6.2-1 8.5-3Z" />
  </svg>
)

export default shield
