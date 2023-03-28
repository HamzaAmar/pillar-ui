import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const liteCoin = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M18 19H9.8a2 2 0 0 1-2-2.3L9.5 5M14 9l-9 4" />
  </svg>
)

export default liteCoin
