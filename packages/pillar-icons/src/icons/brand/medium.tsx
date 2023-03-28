import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const medium = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M8 9h1m0 0 3 3 3-3M9 9v6m6-6h1m-1 0v6m-7 0h2m4 0h2M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2Z" />
  </svg>
)

export default medium
