import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const dThree = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M3 4h1.8c4 0 7.2 3.6 7.2 8s-3.2 8-7.2 8H3m9-16h5.5c2 0 3.5 1.8 3.5 4s-1.6 4-3.5 4m0 0H15m2.5 0H15m2.4 0c2 0 3.5 1.8 3.5 4s-1.6 4-3.5 4H12" />
  </svg>
)

export default dThree
