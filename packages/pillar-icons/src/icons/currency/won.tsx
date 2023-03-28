import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const won = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m4 6 3.2 11.4a.9.9 0 0 0 1.7 0L12 8l3.1 9.4a.8.8 0 0 0 1.7 0L20 6m1 4H3m18 4H3" />
  </svg>
)

export default won
