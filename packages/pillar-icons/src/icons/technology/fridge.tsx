import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const fridge = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M5 10h14M9 13v3M9 6v1M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2Z" />
  </svg>
)

export default fridge
