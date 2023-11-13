import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const rewindForward10 = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m17 9 3-3m0 0-3-3m3 3H9a6 6 0 0 0-1 12m4-4v6m3-4.5v3a1.5 1.5 0 1 0 3 0v-3a1.5 1.5 0 1 0-3 0Z" />
  </svg>
)

export default rewindForward10
