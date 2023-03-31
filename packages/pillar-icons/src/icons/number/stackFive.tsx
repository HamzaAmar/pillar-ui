import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const stackFive = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M12 14h2a2 2 0 0 0 0-4h-2V6h4m1 11v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2m2-4h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2Z" />
  </svg>
)

export default stackFive
