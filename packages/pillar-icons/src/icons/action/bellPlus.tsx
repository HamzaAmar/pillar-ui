import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const bellPlus = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M9 17v1a3 3 0 0 0 6 0v-1m-5-6h4m-2-2v4m-2-8a2 2 0 1 1 4 0 7 7 0 0 1 4 6v3a4 4 0 0 0 2 3H4a4 4 0 0 0 2-3v-3a7 7 0 0 1 4-6Z" />
  </svg>
)

export default bellPlus
