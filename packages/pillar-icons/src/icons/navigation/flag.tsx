import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const flag = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M12 9v12m0-12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0 12a8 8 0 0 1-8-8m8 8a8 8 0 0 0 8-8m1 0h-2M5 13H3" />
  </svg>
)

export default flag
