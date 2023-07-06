import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const kotlin = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M4 20h16l-8-8m-8 8V4h16L4 20Zm0-8 8-8" />
  </svg>
)

export default kotlin
