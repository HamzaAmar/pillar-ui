import { svgProps } from '../../shared'
import { SvgType } from '../../type'

const menu = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M4 6h16M4 12h16M4 18h16" />
  </svg>
)

export default menu
