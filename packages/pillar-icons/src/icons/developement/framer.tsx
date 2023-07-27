import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const framer = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M6 15h12L6 3h12v6H6v6Zm0 0 6 6v-6" />
  </svg>
)

export default framer
