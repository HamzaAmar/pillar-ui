import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const productHunt = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M10 16V8h2.5a2.5 2.5 0 0 1 0 5H10m11-1a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
)

export default productHunt
