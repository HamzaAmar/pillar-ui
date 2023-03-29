import { svgProps } from '../../shared'
import { SvgType } from '../../type'

const toggleRight = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M4 7h16m-10 4v6m4-6v6M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3" />
  </svg>
)

export default toggleRight
