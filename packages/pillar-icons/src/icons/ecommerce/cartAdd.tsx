import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const cartAdd = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M6 17a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm0 0h11M6 17V3H4m13 14a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM6 5h6m7 7v1H6m9-7h6m-3-3v6" />
  </svg>
)
export default cartAdd
