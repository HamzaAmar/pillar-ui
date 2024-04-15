import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const stackEight = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M14 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm3 7v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2m2-4h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2Z" />
  </svg>
)

export default stackEight
