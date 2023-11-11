import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const collapseTop = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M4 9h16m-10 7 2-2 2 2M4 18V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" />
  </svg>
)

export default collapseTop
