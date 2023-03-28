import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const cloud = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M6.7 18C4 18 2 16 2 13.5S4 9 6.7 9a5.2 5.2 0 0 1 3.6-3.7 6 6 0 0 1 5.5 1c1.5 1.1 2.1 3 1.7 4.7h1c2 0 3.5 1.6 3.5 3.5 0 2-1.6 3.5-3.5 3.5H6.7" />
  </svg>
)

export default cloud
