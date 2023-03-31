import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const squareX = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m7.3 7.6 4 4m0-4-4 4m-4-10h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2v-12c0-1.1 1-2 2-2Z" />
  </svg>
)

export default squareX
