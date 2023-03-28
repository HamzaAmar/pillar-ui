import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const justify = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m12.5 5.5 4 4m-12 4 4 4M3 19h4L17.5 8.5a2.8 2.8 0 0 0-4-4L3 15v4Zm18-4v4h-8l4-4h4Z" />
  </svg>
)

export default justify
