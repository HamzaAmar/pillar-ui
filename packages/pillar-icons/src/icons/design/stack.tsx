import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const stacks = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m4 12 8 4 8-4M4 16l8 4 8-4M12 4 4 8l8 4 8-4-8-4Z" />
  </svg>
)

export default stacks
