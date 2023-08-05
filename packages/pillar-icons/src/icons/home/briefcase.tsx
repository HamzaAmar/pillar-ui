import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const briefcase = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m-4 5v0m-9 1a20 20 0 0 0 18 0M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
  </svg>
)

export default briefcase
