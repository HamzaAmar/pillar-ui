import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const K = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M7 4v16m0-8h2m0 0 8-8m-8 8 8 8" />
  </svg>
)

export default K
