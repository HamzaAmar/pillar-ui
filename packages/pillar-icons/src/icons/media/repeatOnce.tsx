import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const repeatOnce = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M4 12V9a3 3 0 0 1 3-3h13m0 0-3-3m3 3-3 3m3 3v3a3 3 0 0 1-3 3H4m0 0 3 3m-3-3 3-3m4-4 1-1v4" />
  </svg>
)

export default repeatOnce
