import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const briefcase = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M8.3 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m-4 5v0m-9 1a20 20 0 0 0 18 0m-16-6h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-14a2 2 0 0 1-2-2V9c0-1.1.8-2 2-2Z" />
  </svg>
)

export default briefcase
