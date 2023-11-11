import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const layersIntersect = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M8 6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2V6Z" />
    <path d="M4 10a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8Z" />
  </svg>
)

export default layersIntersect
