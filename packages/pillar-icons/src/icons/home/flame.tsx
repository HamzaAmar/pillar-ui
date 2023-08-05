import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const flame = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M12 12c2-3 0-7-1-8 0 3-1.8 4.7-3 6a7.5 7.5 0 0 0-2 5 6 6 0 1 0 12 0c0-1.5-1-4-2-5-1.8 3-2.8 3-4 2Z" />
  </svg>
)

export default flame
