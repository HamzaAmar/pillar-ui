import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const Bluetooth = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m7 8 10 8-5 4V4l5 4-10 8" />
  </svg>
)

export default Bluetooth
