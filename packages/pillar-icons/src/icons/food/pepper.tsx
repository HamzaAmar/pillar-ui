import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const papper = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M16 8a3 3 0 0 1 3 3 8 8 0 0 1-16 0c0 2.2 2.2 4 5 4s5-1.8 5-4a3 3 0 0 1 3-3Zm0 0c0-2 2-4 4-4" />
  </svg>
)

export default papper
