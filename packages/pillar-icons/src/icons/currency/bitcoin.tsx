import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const bitcoin = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M6 6h8a3 3 0 0 1 0 6m0 0a3 3 0 0 1 0 6H6m8-6H8m0-6v12M9 3v3m4-3v3M9 18v3m4-3v3" />
  </svg>
)

export default bitcoin
