import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const area = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M4 19h16M4 15l4-6 4 2 4-5 4 4v5H4Z" />
  </svg>
)

export default area
