import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const colorPicker = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m11 7 6 6M4 16 15.7 4.3a1 1 0 0 1 1.4 0l2.6 2.6a1 1 0 0 1 0 1.4L8 20H4v-4Z" />
  </svg>
)

export default colorPicker
