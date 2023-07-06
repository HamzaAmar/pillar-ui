import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const Bluetooth = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M4 8h16M8 4v4m1.5 6.5L11 16l3-3M5 4h14c.6 0 1 .4 1 1v14c0 .6-.4 1-1 1H5a1 1 0 0 1-1-1V5c0-.6.4-1 1-1Z" />
  </svg>
)

export default Bluetooth
