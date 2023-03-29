import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const brackets = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 4H5v16h3m8-16h3v16h-3" />
    <path d="M22 12h-8M2 12h8m0-5v10m4-10v10" />
  </svg>
)

export default brackets
