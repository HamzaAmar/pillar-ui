import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const pray = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M7 21h8l-4-4v-7l4 3 2-2m-4-5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
  </svg>
)

export default pray
