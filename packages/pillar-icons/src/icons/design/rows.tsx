import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const rows = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M4 12h16M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Z" />
  </svg>
)

export default rows
