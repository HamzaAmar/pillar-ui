import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const rewindBackward10 = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M7 9 4 6m0 0 3-3M4 6h11a6 6 0 0 1 1 12M6 14v6m3-4.5v3a1.5 1.5 0 0 0 3 0v-3a1.5 1.5 0 1 0-3 0Z" />
  </svg>
)

export default rewindBackward10
