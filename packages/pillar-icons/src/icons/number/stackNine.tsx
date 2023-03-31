import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const stackNine = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M16 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm0 0v4a2 2 0 0 1-4 0m5 5v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2m2-4h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2Z" />
  </svg>
)

export default stackNine
