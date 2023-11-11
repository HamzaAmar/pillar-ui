import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const collapseBottom = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M20 15H4m10-7-2 2-2-2m10-2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2Z" />
  </svg>
)

export default collapseBottom
