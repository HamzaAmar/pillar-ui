import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const playerPlay = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M7 4v16l13-8L7 4Z" />
  </svg>
)

export default playerPlay
