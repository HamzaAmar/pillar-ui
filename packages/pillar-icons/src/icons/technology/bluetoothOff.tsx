import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const BluetoothOff = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m3 3 18 18M12 8V4l5 4-2.8 2.2M12 12l-5 4m9.4.4L12 20v-8l4.4 4.4Z" />
  </svg>
)

export default BluetoothOff
