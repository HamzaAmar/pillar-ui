import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const paint = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M19 6h1a2 2 0 0 1 2 2 5 5 0 0 1-5 5h-5v2M5 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5Zm5 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-4Z" />
  </svg>
)

export default paint
