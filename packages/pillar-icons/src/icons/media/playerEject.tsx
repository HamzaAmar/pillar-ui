import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const playerEject = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M5 12h14l-7-8-7 8ZM18 16H6l-1 1v2l1 1h12l1-1v-2l-1-1Z" />
  </svg>
)

export default playerEject
