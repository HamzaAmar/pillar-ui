import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const justify = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m5 7 8 10m-8 0 8-10m8 13h-4l3.5-4a2 2 0 0 0-3.5-2" />
  </svg>
)

export default justify
