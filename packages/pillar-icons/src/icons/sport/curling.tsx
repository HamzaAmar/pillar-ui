import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const curling = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M16 9H8a4 4 0 0 0-4 4v2a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-2a4 4 0 0 0-4-4Zm0 0V7a2 2 0 0 0-2-2H8m-4 9h16" />
  </svg>
)

export default curling
