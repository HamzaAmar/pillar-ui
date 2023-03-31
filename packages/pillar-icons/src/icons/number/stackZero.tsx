import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const stackZero = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M17 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2m7-1a2 2 0 0 1 2 2v4a2 2 0 0 1-4 0V8a2 2 0 0 1 2-2ZM9 3h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2Z" />
  </svg>
)

export default stackZero
