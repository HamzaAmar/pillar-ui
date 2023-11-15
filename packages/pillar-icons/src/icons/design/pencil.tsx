import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const pencil = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m13.5 6.5 4 4M4 20h4L18.5 9.5a2.8 2.8 0 0 0-4-4L4 16v4Z" />
  </svg>
)

export default pencil
