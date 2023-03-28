import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const won = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M6 12h6M9 6v12m-3 0h6a6 6 0 1 0 0-12H6" />
  </svg>
)

export default won
