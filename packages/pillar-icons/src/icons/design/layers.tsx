import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const layers = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M16 16v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2m0-2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2V6Z" />
  </svg>
)

export default layers
