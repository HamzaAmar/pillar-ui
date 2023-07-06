import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const pagekit = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M12 20H7V4h11v14h-5" />
  </svg>
)

export default pagekit
