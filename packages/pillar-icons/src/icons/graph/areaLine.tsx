import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const area = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m4 12 3-4 4 2 5-6 4 4M4 19l4-6 4 2 4-5 4 4v5H4Z" />
  </svg>
)

export default area
