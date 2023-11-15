import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const note = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m13 20 7-7m-7 7v-6a1 1 0 0 1 1-1h6m-7 7H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7" />
  </svg>
)

export default note
