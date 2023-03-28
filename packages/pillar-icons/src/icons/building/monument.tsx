import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const monument = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m8 18 2-13 2-2 2 2 2 13M5 21v-3h14v3M3 21h18" />
  </svg>
)

export default monument
